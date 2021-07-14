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
}
