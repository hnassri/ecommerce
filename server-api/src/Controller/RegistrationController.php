<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;



class RegistrationController extends AbstractController
{
    /**
     *@Route("/api/v1/register", name="register_user")
     */

    public function register(Request $request, UserRepository $user)
    {
        $em = $this->getDoctrine()->getManager();

        $mail = $request->request->get('email');
        if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
            return $this->json(
                [
                    "success" => false,
                    "error" => "email address is invalid"
                ],
                500
            );
        }
        $password = $request->request->get('password');
        $user = $user->findOneBy(['email' => $mail]);
        if (!$user) {
            $users = new User();
            $users->setPassword(password_hash($password, PASSWORD_BCRYPT));
            $users->setEmail($mail);
            $em->persist($users);
            $em->flush();

            return $this->json([
                "success" => true,
                "payload" => 'user' . $mail . ' has been registered'

            ], 200);
        } else {
            return $this->json([
                "success" => false,
                "error" => 'user ' . $user->getEmail() . ' already exists in the database'
            ], 400);
        }
    }
}
