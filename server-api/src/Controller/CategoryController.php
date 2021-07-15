<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
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

    #[Route('/category_new', name: 'category_create', methods: ["POST"])]
    public function create(Request $request): Response
    {
        $request_name = trim($request->get("name"));
        if(empty($request_name)){
            return $this->json([
                "success" => false,
                "message" => "Please, give a name for the category!"
            ]);
        }
        $category = $this->getDoctrine()->getRepository(Category::class)->findByName($request_name);
        if(empty($category) == false){
            return $this->json([
                "success" => false,
                "message" => "This category already exist!"
            ]);
        }
        $entityManager = $this->getDoctrine()->getManager();
        $category = new Category();
        $category->setName($request_name);
        $entityManager->persist($category);
        if($entityManager->flush() !== false){
            return $this->json([
                "success" => true,
                "message" => "Category created!"
            ]);
        }
        return $this->json([
            "success" => false,
            "message" => "An error occured, this category has not be created!"
        ]);
    }

    #[Route('/category/edit/{id}', name: 'category_edit', methods: ["PUT"])]
    public function update(Request $request, int $id): Response
    {
        $request_name = trim($request->get("name"));
        if(empty($request_name)){
            return $this->json([
                "success" => false,
                "message" => "Please give a name, so we can update the category!"
            ]);
        }
        $category = $this->getDoctrine()->getRepository(Category::class)->findByName($request_name);
        if(empty($category) == false){
            return $this->json([
                "success" => false,
                "message" => "This category already exist!"
            ]);
        }
        $entityManager = $this->getDoctrine()->getManager();
        $category = new Category();
        $category->setName($request_name);
        $entityManager->persist($category);
        if($entityManager->flush() !== false){
            return $this->json([
                "success" => true,
                "message" => "Category updated!"
            ]);
        }
        return $this->json([
            "success" => false,
            "message" => "An error occured, this category has not be updated!"
        ]);
    }
}
