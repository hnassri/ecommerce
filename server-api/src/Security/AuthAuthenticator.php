<?php

namespace App\Security;

use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\Authenticator\AbstractAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\PassportInterface;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\PasswordUpgradeBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Credentials\PasswordCredentials;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Firebase\JWT\JWT;
use Symfony\Component\Security\Core\Exception\UserNotFoundException;

class AuthAuthenticator extends AbstractAuthenticator
{

    private $userRepository;
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function supports(Request $request): ?bool
    {
        if ($request->attributes->has('_route')){
            switch ($request->attributes->get('_route')){
                // route proteger
                case 'article_create':
                case 'article_edit':
                case 'article_delete':
                case 'category_create':
                case 'category_edit':
                case 'category_delete':                    
                case 'user_all':
                case 'user_info_admin':
                case 'user_update_admin':
                case 'article_outstock':
                case 'user_password_admin';
                case 'admin_show':
                    // only admin roles can access to api
                    return $this->check_authorization($request, ['ROLE_ADMIN']);
                case 'user_update':
                case 'user_info':
                case 'article':
                case 'article_show':
                    /*  */
                    return $this->check_authorization($request, ['*']);
                default:

                    return false; // Authorized route by using without token
            }
        }

        return true;
    }

    public function authenticate(Request $request): PassportInterface
    {
        $user = $this->userRepository->findBy(array('email' => 'mohg'));

        if (!$user) {
            throw new UserNotFoundException();
        }
        return new Passport(new UserBadge($user[0]->getUsername()), new PasswordCredentials($request->request->get('psw')), [
            new PasswordUpgradeBadge($request->get('psw'), $this->userRepository)
        ]);
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        return new JsonResponse([
            "message" => "ce code ne sera jamais executer "
        ], 401);
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): ?Response
    {
        return new JsonResponse([
            "success" => false,
            "error" => "accees deny, make sure you have a valid jwt key and the necessary permissions",
        ], 401);
    }

    private function check_authorization(Request $request, array $roles = ['ROLE_USER'])
    {
        $token = str_replace('Bearer ', '', $request->headers->get('authorization'));
        $token = trim($token);
        try {
            $decoded = JWT::decode($token, "9d12902d04e3cf1a094644a04915f6ef", array('HS256'));
            $request->attributes->set('infotoken', (array)$decoded);
            if (!$this->check_token($token, $request)) {
                return true;
            }
            if ($roles[0] == '*') {
                return false;
            } else {
                if ($decoded->role[0] !== $roles[0]) {
                    return true;
                } else {
                    return false;
                }
            }
        } catch (\Exception $e) {
            return true;
        }

        return false;
    }
    private function check_token(string $token, $request)
    {
        $user = $this->userRepository->find($request->attributes->get('infotoken')['id']);
        //return empty($find_token) == false;

        if ($user) {

            if ($user->getToken() === $token) {
                return true;
            }
        }
        return false;
    }
}
