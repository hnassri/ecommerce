<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use App\Form\RegisterUserType;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class RegistrationController extends AbstractController
{
     /**
    *@Route("/register_user", name="register_user")
    */
   
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder,UserRepository $user)
    {
        $em = $this->getDoctrine()->getManager();
        
        $mail = $request->request->get('email');
        $password = $request->request->get('password');
        $user = $user->findOneBy(['email' => $mail]);
        if(!$user){
            $users = new User();
            $users->setPassword($passwordEncoder->encodePassword($users, $password));
            $users->setEmail($mail);
            $em->persist($users);
            $em->flush();
    
            return new Response(sprintf('User %s successfully created', $users->getEmail()));
        }
        else{
            return new Response(sprintf('User exist created', $user->getEmail()));
        }
   
    }
    
}
