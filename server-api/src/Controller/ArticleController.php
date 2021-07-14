<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Article;
use App\Entity\Feature;
use App\Entity\Image;
use App\Entity\GlobalFeature;
use Doctrine\ORM\EntityManagerInterface;

class ArticleController extends AbstractController
{
    #[Route('/article', name: 'article')]
    public function index(): Response
    {
        $articles = $this->getDoctrine()->getRepository(Article::class)->findAll();
        if(empty($articles)) {
            return $this->json(["message" => "No Products founded!"]);
        }
        $items = [];
        foreach($articles as $article){
            $stock = ($article->getQuantity() > 0) ? "stock" : "empty";
            $items[] = [
                "name" => $article->getName(),
                "price" => $article->getPrice(),
                "description" =>  $article->getDescription(),
                "stock" => $stock,
                "uuid" => $article->getUuid(),
            ];
        }
        
        return $this->json($items);
    }

    #[Route('/article/{id}', name: 'article_show', methods: ["GET", "HEAD"])]
    public function show(int $id): Response
    {
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);
        if(empty($article)) {
            return $this->json(["message" => "This product doesn't exist!"]);
        }
        $item = [];
        $stock = ($article->getQuantity() > 0) ? "stock" : "empty";
        $features = $this->getFeatures($article);
        $item[] = [
            "name" => $article->getName(),
            "price" => $article->getPrice(),
            "description" =>  $article->getDescription(),
            "stock" => $stock,
            "uuid" => $article->getUuid(),
            "features" => $features
        ];
        
        return $this->json($item);
    }

    #[Route('/article_new', name: 'article_create', methods: ["POST"])]
    public function create(Request $request): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $article = new Article();
        $article->setName($request->get("name"));
        $article->setPrice($request->get("price"));
        $article->setDescription($request->get("description"));
        $article->setQuantity($request->get("quantity"));
        $article->setUuid($request->get("uuid"));
        $entityManager->persist($article);
        if($entityManager->flush() !== false){
            //$this->setImages($article, $request, $entityManager);
            $this->setFeatures($article, $request, $entityManager);
            return $this->json(["message" => "Product created!"]);
        }
        
        
        return $this->json(["message" => "Product not created!"]);
    }
    #[Route('/article/edit/{id}', name: 'article_edit', methods: ["PUT"])]
    public function update(Request $request, int $id): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);
        $article->setName($request->get("name"));
        $article->setPrice($request->get("price"));
        $article->setDescription($request->get("description"));
        $article->setQuantity($request->get("quantity"));
        $article->setUuid($request->get("uuid"));
        $entityManager->persist($article);
        if($entityManager->flush() !== false){
            //$this->setImages($article, $request, $entityManager);
            $this->removeFeatures($article, $entityManager);
            $this->setFeatures($article, $request, $entityManager);
            return $this->json(["message" => "Product updated!"]);
        }
        
        
        return $this->json(["message" => "Product not updated!"]);
    }
    #[Route('/article/{id}', name: 'article_delete', methods: ["DELETE"])]
    public function delete( int $id): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);
        if(!$article){
            return $this->json(["message" => "This product doesn't exist!"]);
        }
        $this->removeFeatures($article, $entityManager);
        $entityManager->remove($article);
        $entityManager->flush();
        
        
        return $this->json(["message" => "Product deleted!"]);
    }

    protected function getFeatures(Article $article)
    {
        $global_features = $this->getDoctrine()->getRepository(GlobalFeature::class)->findBy(["article_id" => $article->getId()]);
        $features = [];
        foreach($global_features as $global_feature){
            $feature = $this->getDoctrine()->getRepository(Feature::class)->find($global_feature->getFeatureId());
            $features[] = $feature->getName();
        }
        return $features;
    }

    protected function setImages(Article $article, Request $request, $entityManager)
    {
        $img_file = $request->get("image");
        $filename = md5(uniqid()) . "." . $img_file->guessExtention();
        $img_file->move("./src/public/uploads/" . $filename);
        $image = new Image();
        $image->setUuid($article->getUuid());
        $image->setArticleId($article->getId());
        $image->setUrl("./src/public/uploads/" . $filename);
        $entityManager->persist($image);
    }

    protected function setFeatures(Article $article, Request $request, $entityManager)
    {
        $features = $request->get("features");
        $features_array = [];
        foreach($features as $feature_name){
            $feature = $this->getDoctrine()->getRepository(Feature::class)->findOneByname(["name" => $feature_name]);
            if(empty($feature)){
                $feature = new Feature();
                $feature->setName($feature_name);
                $entityManager->persist($feature);
                $entityManager->flush();
                $features_array[] = $feature;
            }else {
                $global_feature = new GlobalFeature();
                $global_feature->setArticleId($article);
                $global_feature->setFeatureId($feature);
                $entityManager->persist($global_feature);
            }
        }

        foreach($features_array as $feature){
            $global_feature = new GlobalFeature();
            $global_feature->setArticleId($article);
            $global_feature->setFeatureId($feature);
            $entityManager->persist($global_feature);
        }
        $entityManager->flush();
    }

    protected function removeFeatures(Article $article, $entityManager)
    {
        $global_features = $this->getDoctrine()->getRepository(GlobalFeature::class)->findBy(["article_id" => $article->getId()]);
        foreach($global_features as $item){
            $entityManager->remove($item);
        }
        $entityManager->flush();
    }
}
