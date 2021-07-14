<?php

namespace App\Security;

use App\Entity\User;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\Authenticator\AbstractAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\PassportInterface;
use App\Repository\UserRepository;
use Symfony\Component\Security\Core\Exception\UserNotFoundException;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\PasswordUpgradeBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Credentials\PasswordCredentials;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;

class AuthAuthenticator extends AbstractAuthenticator
{
      
     private $userRepository;

     function __construct(UserRepository $userRepository)
     {
         $this->userRepository = $userRepository;
     }

    public function supports(Request $request): ?bool
    {
        
       return $request->attributes->get('_route') == 'api_login'

        && $request->isMethod('POST');



    }

    public function authenticate(Request $request): PassportInterface
    {
        $user = $this->userRepository->findBy(array('email' => $request->request->get('email')));
        
        if(!$user){
            throw new UserNotFoundException();
        }
        return new Passport(new UserBadge($user[0]->getUsername()),new PasswordCredentials($request->request->get('psw')),[
                 new PasswordUpgradeBadge($request->get('psw'),$this->userRepository)
        ]);
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        return('succses');
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): ?Response
    {
        
        dd('echec');
    }

//    public function start(Request $request, AuthenticationException $authException = null): Response
//    {
//        /*
//         * If you would like this class to control what happens when an anonymous user accesses a
//         * protected page (e.g. redirect to /login), uncomment this method and make this class
//         * implement Symfony\Component\Security\Http\EntryPoint\AuthenticationEntrypointInterface.
//         *
//         * For more details, see https://symfony.com/doc/current/security/experimental_authenticators.html#configuring-the-authentication-entry-point
//         */
//    }
}
