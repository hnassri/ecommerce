<?php

namespace App\Controller;
use App\Entity\Adress;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class AdressController extends AbstractController
{
        #[Route('/adress/show', name: 'adress_show')]
        public function index(Request $request): Response
        {
           $Adress = $this->getDoctrine()->getRepository(Adress::class)->findBy(['user_id' => $request->attributes->get('infotoken')['id']]);

           if(!$Adress){
            return $this->json([
                "success" => false,
                "items" => 'no address save'
            ], 500);
           }
           return $this->json([
            "success" => true,
            "items" => $Adress
        ], 200);
        }
        #[Route('/adress/delete/{id}', name: 'adress_delete', methods: ["DELETE"])]
        public function delete(int $id): Response
        {
            $entityManager = $this->getDoctrine()->getManager();
            $CheckAdress = $this->getDoctrine()->getRepository(Adress::class)->findOneBy(["id" =>$id]);
            if(!$CheckAdress){
                return $this->json([
                    "success" => false,
                    "message" => "This Adress doesn't exist!"
                ], 500);
            }
            $entityManager->remove($CheckAdress);
            $entityManager->flush();
            return $this->json([
                "success" => true,
                "message" => "Adress deleted!"
            ], 200);

        }
   
   
       #[Route('/adress/create', name: 'adress_new', methods: ["POST"])]
       public function create(Request $request): Response
       {
         if($this->checkData($request) === true){
          
            $entityManager = $this->getDoctrine()->getManager();
            $Adress = new Adress();
            $Adress->setName(trim($request->get("name")));
            $Adress->setSurname(trim($request->get("surname")));
            $Adress->setAdress($request->get("adress"));
            $Adress->setCity(trim($request->get("city")));
            $Adress->setPostalCode($request->get("postal_code"));
            $Adress->setCountry($request->get("country"));
            $Adress->setUserId($request->attributes->get('infotoken')['id']);
            $entityManager->persist($Adress);
                if($entityManager->flush() !== false){
                    return $this->json([
                        "success" => true,
                        "message" => "Adress created!"
                    ], 200);
                }
           }

           return $this->json([
            "success" => false,
            "message" => "Please, fill out the necessary fields!"
        ], 500);

          
       }
   
   
       protected function checkData(Request $request){
           
         if(trim($request->get("name"))===""|| $request->get("name")===null){
            return false;
         }
         if(trim($request->get("surname"))==="" || $request->get("surname")===null){
            return false;
         }
         if(trim($request->get("adress"))==="" || $request->get("adress")===null){
            return false;
         }
         if(trim($request->get("city"))==="" || $request->get("city")===null){
            return false;
         }
         if(trim($request->get("postal_code"))==="" || $request->get("postal_code")===null){
            return false;
         }
         if(trim($request->get("country"))==="" || $request->get("country")===null){
            return false;
         }
           return true;
       }
}
