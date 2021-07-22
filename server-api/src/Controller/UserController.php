<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class UserController extends AbstractController

{


    #[Route('/api/v1/user/all', name: 'user_all', methods: "GET")]
    public function user_all(UserRepository $userRepository = null, Request $request = null): Response
    {
        $user = $userRepository->findAll();
        if (!$user) {
            return $this->json(
                [
                    "success" => false,
                    "error" => "no user "
                ],
                404
            );
        }

        return $this->json([
            "success" => true,
            "data" => $user

        ], 200);
    }
    #[Route('/api/v1/user', name: 'user_info', methods: "GET")]
    public function user_info(UserRepository $userRepository = null, Request $request = null): Response
    {

        $token = $this->info_token($request);
        $user = $userRepository->findOneBy([
            "id" => $token["id"]
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
    #[Route('/api/v1/user/{id}', name: 'user_info_admin', methods: "GET")]
    public function info_user_admin($id = 0, UserRepository $userRepository = null, Request $request = null)
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
            "data" => $user

        ], 200);
    }

    #[Route('/api/v1/user/edit', name: 'user_update', methods: "PUT")]
    public function update_user(Request $request = null, UserRepository $userRepository = null): Response
    {


        $token = $this->info_token($request);

        if (!$request->request->has("email")) {
            return $this->json(
                [
                    "success" => false,
                    "error" => "email,name,first name are required"
                ],
                500
            );
        }
        if ($email = $request->request->get('email')) {
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                return $this->json(
                    [
                        "success" => false,
                        "error" => "email address is invalid"
                    ],
                    500
                );
            }

            $user = $userRepository->findOneBy([
                "email" => $email
            ]);
            if ($user) {
                if ($user->getEmail() == $email) {
                    if ($user->getId() != $token["id"]) {
                        return $this->json(
                            [
                                "success" => false,
                                "error" => "already exists in the database"
                            ],
                            500
                        );
                    }
                }
            }
        }


        $entityManager = $this->getDoctrine()->getManager();
        $user = $userRepository->find($token["id"]);
        $user->setEmail($email);
        $entityManager->persist($user);

        if (!$entityManager->flush()) {
            return $this->json(
                [
                    "success" => true,
                    "payload" => "user information has been updated"
                ],
                200
            );
        }
        return $this->json(
            [
                "success" => false,
                "error" => "the update has not been carried out"
            ],
            400
        );
    }

    #[Route('/api/v1/user/edit/{id}', name: 'user_update_admin', methods: "PUT")]
    public function update_user_admin($id = 0, Request $request = null, UserRepository $userRepository = null): Response
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

        if (!$request->request->has("email") || !$request->request->has("roles")) {
            return $this->json(
                [
                    "success" => false,
                    "error" => "email,roles,name,first name are required"
                ],
                500
            );
        }
        if ($email = $request->request->get('email')) {
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                return $this->json(
                    [
                        "success" => false,
                        "error" => "email address is invalid"
                    ],
                    500
                );
            }

            $user = $userRepository->findOneBy([
                "email" => $email
            ]);

            if ($user) {
                if ($user->getEmail() == $email) {
                    if ($user->getId() != $id) {
                        return $this->json(
                            [
                                "success" => false,
                                "error" => "already exists in the database"
                            ],
                            500
                        );
                    }
                }
            }
        }
        if ($role = $request->request->get("roles")) {
            $role = json_decode($role);
            if ($role[0] == "ROLE_USER" || $role[0] == "ROLE_ADMIN") {
            } else {
                return $this->json(
                    [
                        "success" => false,
                        "error" => "wrong role format"
                    ]
                );
            }
        }

        $entityManager = $this->getDoctrine()->getManager();
        $user = $userRepository->find($id);
        $user->setEmail($email);
        $user->setRoles($role);
        $entityManager->persist($user);

        if (!$entityManager->flush()) {
            return $this->json(
                [
                    "success" => true,
                    "payload" => "user information has been updated"
                ],
                200
            );
        }
        return $this->json(
            [
                "success" => false,
                "error" => "the update has not been carried out"
            ],
            400
        );
    }
    #[Route('/api/v1/user/edit/passsword', name: "user_password", methods: "PATCH")]
    public function uptade_password( Request $request = null, UserRepository $userRepository = null): Response
    {
        $id = $this->info_token($request)["id"];
        if (!$id || (int)$id == 0) {
            return $this->json(
                [
                    "success" => false,
                    "error" => "user id not specified"
                ],
                404
            );
        }

        if (!$request->request->has("password")) {
            return $this->json(
                [
                    "success" => false,
                    "error" => "password required"
                ],
                404
            );
        }
        if (!$request->request->has("newpassword")) {
            return $this->json(
                [
                    "success" => false,
                    "error" => "newpassword required"
                ],
                404
            );
        }
        if ($current_password = $request->request->get("password")) {
            $user = $userRepository->find($id);

            if (!$this->check_password($current_password, $user->getEmail(), $userRepository)) {
                return $this->json([
                    "success" => false,
                    "error" => "the current password is incorrect"
                ]);
            }
        }

        $entityManager = $this->getDoctrine()->getManager();
        $user = $userRepository->find($id);
        $user->setPassword(password_hash($request->request->get("newpassword"), PASSWORD_BCRYPT));
        $entityManager->persist($user);

        if (!$entityManager->flush()) {
            return $this->json(
                [
                    "success" => true,
                    "payload" => "password has been updated"
                ],
                200
            );
        }
    }
    #[Route('/api/v1/user/edit/password/{id}', name: "user_password_admin", methods: "PATCH")]
    public function uptade_password_admin($id = 0, Request $request = null, UserRepository $userRepository = null): Response
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

        if (!$request->request->has("password")) {
            return $this->json(
                [
                    "success" => false,
                    "error" => "password required"
                ],
                404
            );
        }
        if (!$request->request->has("newpassword")) {
            return $this->json(
                [
                    "success" => false,
                    "error" => "newpassword required"
                ],
                404
            );
        }
        if ($current_password = $request->request->get("password")) {
            $user = $userRepository->find($id);

            if (!$this->check_password($current_password, $user->getEmail(), $userRepository)) {
                return $this->json([
                    "success" => false,
                    "error" => "the current password is incorrect"
                ]);
            }
        }

        $entityManager = $this->getDoctrine()->getManager();
        $user = $userRepository->find($id);
        $user->setPassword(password_hash($request->request->get("newpassword"), PASSWORD_BCRYPT));
        $entityManager->persist($user);

        if (!$entityManager->flush()) {
            return $this->json(
                [
                    "success" => true,
                    "payload" => "password has been updated"
                ],
                200
            );
        }
    }

    #[Route('/api/v1/user/delete/{id}', name: "delete_user", methods: "DELETE")]
    public function delete_user($id = 0, Request $request = null, UserRepository $userRepository = null): Response
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
        if(!$user){
            return $this->json(
                [
                    "success" => false,
                    "error" => " User is not specified"
                ],
                404
            );
        }
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($user);
        $entityManager->flush();

        return $this->json([
            "success" => true,
            "message" => "User deleted!"
        ], 200);
     
    }

    private function check_password(string $password, string $email, UserRepository $userRepository): bool
    {
        $user = $userRepository
            ->findOneBy(['email' => $email]);

        return password_verify($password, $user->getPassword());
    }
    private function info_token(Request $request)
    {

        return $request->attributes->get('infotoken');
    }
}
