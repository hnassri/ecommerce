<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Category;
use App\Entity\Article;
use App\Entity\Image;
use App\Entity\GlobalCategory;
use Doctrine\ORM\Query\ResultSetMapping;

class FilterController extends AbstractController
{
    #[Route('/filter', name: 'filter', methods: ["GET", "HEAD"])]
    public function index(Request $request): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $name = trim($request->query->get("name"));
        $category_name = trim($request->query->get("category"));
        $category = $this->getDoctrine()->getRepository(Category::class)->findOneByName($category_name);
        $sql = "SELECT a.id, a.name, a.description, a.uuid, a.price, i.url FROM article a ";
        $parameter = [];
        if(empty($category)){
            $sql .= "INNER JOIN image i ON a.id = i.article_id_id ";
        }else{
            $sql .= "INNER JOIN (global_category gc, image i) ON a.id = gc.article_id_id and gc.category_id_id = :category_id and a.id = i.article_id_id ";
            $parameter[] = ['category_id' => $category->getId()];
        }

        if(empty($name) === false){
            $sql .= "WHERE a.name = '%:name%' ";
            $parameter[] = ['name' => $name];
        }

        $sql .= "GROUP BY i.url";
        $rsm = new ResultSetMapping();
        $rsm->addEntityResult('App\Entity\Article', 'a');
        //$rsm->addJoinedEntityResult('App\Entity\GlobalCategory', 'gc', 'a', 'global_category');
        //$rsm->addJoinedEntityResult('App\Entity\Image', 'i', 'a', 'image');
        $rsm->addFieldResult("a", "id", "id");
        $rsm->addFieldResult("a", "name", "name");
        $rsm->addFieldResult("a", "description", "description");
        $rsm->addFieldResult("a", "uuid", "uuid");
        //$rsm->addMetaResult("i", "url", "url");

        /*$query = $entityManager->createNativeQuery($sql, $rsm);
        foreach($parameter as $value){
            //dd($value[0] . " " . $value[1]);
            $query->setParameter($value[0], $value[1]);
        }*/
        $conn = $entityManager->getConnection();
        $stmt = $conn->prepare($sql);
        $stmt->execute($parameter);
        //var_dump($stmt->fetchAll());
        $articles = $query->getResult();
        dd($articles);

    }

    #[Route('/filter/name/{name}', name: 'filter_by_name', methods: ["GET", "HEAD"])]
    public function filter_by_name(string $name): Response
    {
        $name = trim($name);
        $entityManager = $this->getDoctrine()->getManager();
        //$articles = $this->getDoctrine()->getRepository(Article::class)->findByName();
        $queryBuilder = $entityManager->createQueryBuilder();

        $queryBuilder->select('a')
        ->from(Article::class, 'a')
        ->where('a.name LIKE :name')
        ->setParameter('name', "%$name%");

        $articles = $queryBuilder->getQuery()->getResult();
        if(empty($articles)) {
            return $this->json([
                "success" => false,
                "message" => "No Products founded!"
            ], 500);
        }
        $items = [];
        foreach($articles as $article){
            $stock = ($article->getQuantity() > 0 && $article->getStock()) ? "stock" : "empty";
            $image = $this->getDoctrine()->getRepository(Image::class)->findOneBy(["article_id" => $article->getId()]);
            if(empty($image) === false){
                $image = $image->getUrl();
            }
            $items[] = [
                "id" => $article->getId(),
                "name" => $article->getName(),
                "price" => $article->getPrice(),
                "description" =>  $article->getDescription(),
                "stock" => $stock,
                "uuid" => $article->getUuid(),
                "image" => $image
            ];
        }
        
        return $this->json([
            "success" => true,
            "items" => $items
        ], 200);
    }
}
