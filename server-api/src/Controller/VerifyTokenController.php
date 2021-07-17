<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Firebase\JWT\JWT;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use symfony\Component\Routing\Annotation\Route;

class VerifyTokenController extends AbstractController
{
    #[Route('/verify/token', name: 'verify_token')]
    public function verify_token(Request $request)
    {
        dd($request);

    }
}
