<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Article;
use App\Entity\Feature;
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

    #[Route('/article/{id}', name: 'article_show')]
    public function show(int $id): Response
    {
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);
        if(empty($article)) {
            return $this->json(["message" => "This product doesn't exist!"]);
        }
        $items = [];
        $stock = ($article->getQuantity() > 0) ? "stock" : "empty";
        $features = $this->getFeatures($article);
        $items[] = [
            "name" => $article->getName(),
            "price" => $article->getPrice(),
            "description" =>  $article->getDescription(),
            "stock" => $stock,
            "uuid" => $article->getUuid(),
            "features" => $features
        ];
        
        return $this->json($items);
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
}
