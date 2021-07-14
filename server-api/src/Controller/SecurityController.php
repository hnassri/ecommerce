<?php

namespace App\Controller ;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
    #[Route(path: '/login', name:'api_login')]

    public function login(){

        $user = $this->getUser();

        return $this->json([
           'email' => $user
        ]);
        }
}
