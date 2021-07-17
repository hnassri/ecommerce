<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Firebase\JWT\JWT;
use ParagonIE\Sodium\Core\HSalsa20;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class SecurityController extends AbstractController
{
    #[Route(path: '/login', name: 'api_login', methods: "POST")]

    public function login(Request $request, UserRepository $userRepository)
    {
        if (!$request->request->has("email")) {
            return $this->json([
                "success"=> false,
                "error" => "an email adress is required"
            ], 403);
        }

        if (!$request->request->has("password")) {
            return $this->json([
                "success"=> false,
                "error" => "a password is required"
            ], 506);
        }

        if ($email = $request->request->get('email')) {
            $user = $userRepository->findOneBy([
                "email" => $email
            ]);

            if (!$user) {
                return $this->json([
                    "success"=> false,
                    "message" => "the password or email is incorrect"
                ], 504);
            }

            if ($check = $this->check_password($request->request->get("password"), $email, $userRepository)) {

                $payload = array(
                    "iss" => "http://localhost:8000",
                    "aud" => "http://localhost:8000",
                    "iat" => time(),
                    "exp" => time() + 3600 + (24 * 60 * 60),
                    "email" => $user->getEmail(),
                    "role" =>$user->getRoles(),
                    "id" =>$user->getId()
                     

                );
                $users = $userRepository->findOneBy([
                    "token" => JWT::encode($payload, $this->getParameter("app.salt"), "HS256", $user->getId())
                ]);
                if(!$users){
                    $entityManager = $this->getDoctrine()->getManager();
                    $user->setToken(JWT::encode($payload, $this->getParameter("app.salt"), "HS256", $user->getId()));
                    $entityManager->persist($user);
                    if($entityManager->flush() !== false){

                        return $this->json([
                            "success"=>true,
                            "token" => JWT::encode($payload, $this->getParameter("app.salt"), "HS256", $user->getId())
                        ]);
                    }

                }
                else{
                    return $this->json([
                        "success"=> false,
                        "message" => "token used"
                    ], 404);
                }
                
            } else {
                return $this->json([
                    "success"=> false,
                    "message" => "the password or email is incorrect"
                ], 404);
            }
        }
    }

    /**
     * 
     */
    private function check_password(string $password, string $email, UserRepository $userRepository): bool
    {
        $user = $userRepository
            ->findOneBy(['email' => $email]);

        return password_verify($password, $user->getPassword());
    }

    
}
