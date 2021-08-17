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

        $queryBuilder = $entityManager->createQueryBuilder();
        $queryBuilder->select('a')
        ->from(Article::class, 'a');

        if(empty($category) === false){
            $queryBuilder = $queryBuilder->innerJoin('a.globalCategories', 'c',  'WITH', 'c.category_id = :category_id')
            ->setParameter('category_id', $category->getId());   
        }

        if(empty($name) === false){
            $queryBuilder = $queryBuilder->where('a.name LIKE :name')
            ->setParameter('name', "%$name%");
        }

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

    #[Route('/filter/name/{name}', name: 'filter_by_name', methods: ["GET", "HEAD"])]
    public function filter_by_name(string $name): Response
    {
        $name = trim($name);
        $entityManager = $this->getDoctrine()->getManager();
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
            ], 404);
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

    #[Route('/filter/category/{name}', name: 'filter_by_category', methods: ["GET", "HEAD"])]
    public function filter_by_category(string $name): Response
    {
        $name = trim($name);
        $category = $this->getDoctrine()->getRepository(Category::class)->findOneByName($name);
        if(empty($category)){
            return $this->json([
                "success" => false,
                "message" => "This category doesn't exist!"
            ], 403);
        }
        $entityManager = $this->getDoctrine()->getManager();
        $queryBuilder = $entityManager->createQueryBuilder();

        $queryBuilder->select('a')
        ->from(Article::class, 'a')
        ->innerJoin('a.globalCategories', 'c',  'WITH', 'c.category_id = :category_id')
        ->setParameter('category_id', $category->getId());

        $articles = $queryBuilder->getQuery()->getResult();
        if(empty($articles)) {
            return $this->json([
                "success" => false,
                "message" => "No Products founded!"
            ], 404);
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
