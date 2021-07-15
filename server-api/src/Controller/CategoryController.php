<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Category;

class CategoryController extends AbstractController
{
    #[Route('/category', name: 'category')]
    public function index(): Response
    {
        $categories = $this->getDoctrine()->getRepository(Category::class)->findAll();
        if(empty($categories)) {
            return $this->json(["message" => "No Categories founded!"]);
        }
        $items = [];
        foreach($categories as $category){
            $items[] = [
                "name" => $category->getName()
            ];
        }
        
        return $this->json($items);
    }
}
