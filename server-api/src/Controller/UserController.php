<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    #[Route('/api/v1/user/{id}', name: 'user_info', methods: "GET")]
    public function user_info($id = null, UserRepository $userRepository = null): Response
    {

        if (!$id || (int)$id == 0) {
            return $this->json(
                [
                    "success" => false,
                    "error" => "user id not specified"
                ],
                404
            );
        }

        $user = $userRepository->findOneBy([
            "id" => $id
        ]);

        if (!$user) {
            return $this->json(
                [
                    "success" => false,
                    "error" => "no user with this identifier is referenced"
                ],
                404
            );
        }

        return $this->json([
            "success" => true,
            "data" => [
                "email" => $user->getEmail(),
                "role"  => $user->getRoles(),
                "id" => $user->getId()
            ]

        ], 200);
    }

}
