<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Article;
use App\Entity\Feature;
use App\Entity\Category;
use App\Entity\Image;
use App\Entity\GlobalFeature;
use App\Entity\GlobalCategory;
use Doctrine\ORM\EntityManagerInterface;

class ArticleController extends AbstractController
{
    #[Route('/article', name: 'article')]
    public function index(): Response
    {
        $articles = $this->getDoctrine()->getRepository(Article::class)->findAll();
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

    #[Route('/article/{id}', name: 'article_show', methods: ["GET", "HEAD"])]
    public function show(int $id): Response
    {
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);
        if(empty($article)) {
            return $this->json([
                "success" => false,
                "message" => "This product doesn't exist!"
            ], 500);
        }
        $item = [];
        $stock = ($article->getQuantity() > 0 && $article->getStock()) ? "stock" : "empty";
        $features = $this->getFeatures($article);
        $images = $this->getImages($article);
        $item[] = [
            "id" => $article->getId(),
            "name" => $article->getName(),
            "price" => $article->getPrice(),
            "description" => $article->getDescription(),
            "stock" => $stock,
            "uuid" => $article->getUuid(),
            "features" => $features,
            "images" => $images
        ];
        
        return $this->json([
            "success" => true,
            "item" => $item
        ], 200);
    }

    #[Route('/admin/article/{id}', name: 'admin_article_show', methods: ["GET", "HEAD"])]
    public function admin_show(int $id): Response
    {
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);
        if(empty($article)) {
            return $this->json([
                "success" => false,
                "message" => "This product doesn't exist!"
            ], 500);
        }
        $item = [];
        $features = $this->getFeatures($article);
        $categories = $this->getCategories($article);
        $images = $this->getImages($article);
        $item = [
            "id" => $article->getId(),
            "name" => $article->getName(),
            "price" => $article->getPrice(),
            "description" => $article->getDescription(),
            "quantity" => $article->getQuantity(),
            "stock" => $article->getStock(),
            "uuid" => $article->getUuid(),
            "features" => $features,
            "images" => $images,
            "categories" => $categories
        ];
        
        return $this->json([
            "success" => true,
            "item" => $item
        ], 200);
    }

    #[Route('/article_new', name: 'article_create', methods: ["POST"])]
    public function create(Request $request): Response
    {
        $dataToVerify = ["name", "price", "description", "quantity", "uuid", "features", "images", "categories", "stock"];
        if($this->checkData($request, $dataToVerify) === false){
            return $this->json([
                "success" => false,
                "message" => "Please, fill out the necessary fields!"
            ], 500);
        }
        $entityManager = $this->getDoctrine()->getManager();
        $article = new Article();
        $article->setName(trim($request->get("name")));
        $article->setPrice($request->get("price"));
        $article->setDescription(trim($request->get("description")));
        $article->setQuantity($request->get("quantity"));
        $article->setUuid(trim($request->get("uuid")));
        if($request->get("stock") == "true"){
            $article->setStock(true);
        }else {
            $article->setStock(false);
        }
        $entityManager->persist($article);
        if($entityManager->flush() !== false){
            $this->setImages($article, $request, $entityManager);
            $this->setFeatures($article, $request, $entityManager);
            $this->setCategories($article, $request, $entityManager);
            return $this->json([
                "success" => true,
                "message" => "Product created!"
            ], 200);
        }
        return $this->json([
            "success" => false,
            "message" => "Product not created!"
        ], 500);
    }
    
    #[Route('/article/edit/{id}', name: 'article_edit', methods: ["POST", "PUT"])]
    public function update(Request $request, int $id): Response
    {
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);
        if(empty($article)){
            return $this->json([
                "success" => false,
                "message" => "This Product doesn't exist"
            ], 500);
        }
        $dataToVerify = ["name", "price", "description", "quantity", "uuid", "features", "images", "categories", "stock"];
        //dd($request->get("stock"));
        if($this->checkData($request, $dataToVerify) === false){
            return $this->json([
                "success" => false,
                "message" => "Please, fill out the necessary fields!"
            ], 500);
        }
        $entityManager = $this->getDoctrine()->getManager();
        
        $article->setName(trim($request->get("name")));
        $article->setPrice($request->get("price"));
        $article->setDescription(trim($request->get("description")));
        $article->setQuantity($request->get("quantity"));
        $article->setUuid(trim($request->get("uuid")));
        if($request->get("stock") == "true"){
            $article->setStock(true);
        }else {
            $article->setStock(false);
        }
        
        $entityManager->persist($article);
        if($entityManager->flush() !== false){
            $this->removeImages($article, $entityManager);
            $this->setImages($article, $request, $entityManager);
            $this->removeFeatures($article, $entityManager);
            $this->setFeatures($article, $request, $entityManager);
            $this->removeCategories($article, $entityManager);
            $this->setCategories($article, $request, $entityManager);

            return $this->json([
                "success" => true,
                "message" => "Product updated!"
            ], 200);
        }
        
        
        return $this->json([
            "success" => false,
            "message" => "Product not updated!"
        ], 500);
    }
    
    #[Route('/article/{id}', name: 'article_delete', methods: ["DELETE"])]
    public function delete( int $id): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);
        if(!$article){
            return $this->json([
                "success" => false,
                "message" => "This product doesn't exist!"
            ], 500);
        }
        $this->removeImages($article, $entityManager);
        $this->removeFeatures($article, $entityManager);
        $this->removeCategories($article, $entityManager);
        $entityManager->remove($article);
        $entityManager->flush();
        return $this->json([
            "success" => true,
            "message" => "Product deleted!"
        ], 200);
    }

    #[Route('/article/outstock/{id}', name: 'article_outstock', methods: ["GET", "HEAD"])]
    public function outStockArticle(int $id)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);
        if(!$article){
            return $this->json([
                "success" => false,
                "message" => "This product doesn't exist!"
            ], 500);
        }
        $article->setStock(false);
        $entityManager->persist($article);
        $entityManager->flush();
        return $this->json([
            "success" => true,
            "message" => "Product has been out stocked!"
        ], 200);
    }
        #[Route('/article/instock/{id}', name: 'article_instock', methods: ["GET", "HEAD"])]
        public function inStockArticle(int $id)
        {
            $entityManager = $this->getDoctrine()->getManager();
            $article = $this->getDoctrine()->getRepository(Article::class)->find($id);
            if(!$article){
                return $this->json([
                    "success" => false,
                    "message" => "This product doesn't exist!"
                ], 500);
            }
            $article->setStock(true);
            $entityManager->persist($article);
            $entityManager->flush();
            return $this->json([
                "success" => true,
                "message" => "Product has been in stocked!"
            ], 200);
        }
    protected function checkQuantity(Request $request, int $id): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);
        if(!$article){
            return $this->json(["message" => "This product doesn't exist!"]);
        }
        $nb_to_check = 1;
        if($request->get("quantity") !== null && $request->get("quantity") > 0){
            $nb_to_check = $request->get("quantity");
        }
        if($article->getQuantity() - $nb_to_check >= 0){
            $article->setQuantity($article->getQuantity() - $nb_to_check);
            $entityManager->persist($article);
            $entityManager->flush();
            return $this->json(["message" => "Command passed successfully!"]);
        }
        return $this->json(["message" => "Sorry but we don't have enough items to assurs your command"]);
    }

    protected function checkData(Request $request, array $data){
        foreach($data as $value){
            if($request->get($value) === null && $request->files->get($value) === null){
                return false;
            }
        }
        return true;
    }

    protected function getImages(Article $article)
    {
        $images = $this->getDoctrine()->getRepository(Image::class)->findBy(["uuid" => $article->getUuid()]);
        $images_tab = [];
        foreach($images as $image){
            if(file_exists($this->getParameter('images_directory') . substr($image->getUrl(),8))){
                $images_tab[] = [
                    "id" => $image->getId(),
                    "url" => $image->getUrl()
                ];
            }
            
        }
        return $images_tab;
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

    protected function getCategories(Article $article)
    {
        $global_categories = $this->getDoctrine()->getRepository(GlobalCategory::class)->findBy(["article_id" => $article->getId()]);
        $categories = [];
        foreach($global_categories as $global_category){
            $category = $this->getDoctrine()->getRepository(Category::class)->find($global_category->getCategoryId());
            $categories[] = $category->getName();
        }
        return $categories;
    }

    protected function setImages(Article $article, Request $request, $entityManager)
    {
        $img_files = $request->files->get("images");
        foreach($img_files as $img_file){
            $filename = md5(uniqid()) . "." . $img_file->guessExtension();
            $img_file->move( $this->getParameter('images_directory'), $filename);
            $image = new Image();
            $image->setUuid($article->getUuid());
            $image->setArticleId($article);
            $image->setUrl("/uploads/" . $filename);
            $entityManager->persist($image);
        }
        $entityManager->flush();
    }

    protected function setFeatures(Article $article, Request $request, $entityManager)
    {
        $features = $request->get("features");
        foreach($features as $feature_name){
            $feature_name = trim($feature_name);
            $feature = $this->getDoctrine()->getRepository(Feature::class)->findOneBy(["name" => $feature_name]);
            $global_feature_exist = false;
            if(empty($feature)){
                $feature = new Feature();
                $feature->setName($feature_name);
                $entityManager->persist($feature);
                $entityManager->flush();
            }else{
                $global_feature = $this->getDoctrine()->getRepository(GlobalFeature::class)->findOneBy(["article_id" => $article->getId(), "feature_id" => $feature->getId()]);
                if(empty($global_feature) === false){
                    $global_feature_exist = true;
                }
            }
            if($global_feature_exist === false){
                $global_feature = new GlobalFeature();
                $global_feature->setArticleId($article);
                $global_feature->setFeatureId($feature);
                $entityManager->persist($global_feature);
            }
        }
        $entityManager->flush();
    }

    protected function setCategories(Article $article, Request $request, $entityManager)
    {
        $categories = $request->get("categories");
        foreach($categories as $category_name){
            $category_name = trim($category_name);
            $category = $this->getDoctrine()->getRepository(Category::class)->findOneBy(["name" => $category_name]);
            $global_category_exist = false;
            if(empty($category)){
                $category = new Category();
                $category->setName($category_name);
                $entityManager->persist($category);
                $entityManager->flush();
            }else{
                $global_category = $this->getDoctrine()->getRepository(GlobalCategory::class)->findOneBy(["article_id" => $article->getId(), "category_id" => $category->getId()]);
                if(empty($global_category) === false){
                    $global_category_exist = true;
                }
            }
            if($global_category_exist === false){
                $global_category = new GlobalCategory();
                $global_category->setArticleId($article);
                $global_category->setCategoryId($category);
                $entityManager->persist($global_category);
            }
        }
        $entityManager->flush();
    }

    protected function removeImages(Article $article, $entityManager)
    {
        $images = $this->getDoctrine()->getRepository(Image::class)->findBy(["article_id" => $article->getId()]);
        foreach($images as $item){
            $img_name = substr($item->getUrl(),8);
            if(file_exists($this->getParameter('images_directory') . $img_name)){
                unlink($this->getParameter('images_directory') . $img_name);
            }
            $entityManager->remove($item);
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

    protected function removeCategories(Article $article, $entityManager)
    {
        $global_categories = $this->getDoctrine()->getRepository(GlobalCategory::class)->findBy(["article_id" => $article->getId()]);
        foreach($global_categories as $item){
            $entityManager->remove($item);
        }
        $entityManager->flush();
    }
}
