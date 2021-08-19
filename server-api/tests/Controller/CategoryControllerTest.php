<?php

namespace App\Tests\Controller;

use App\DataFixtures\CategoryFixtures;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Liip\TestFixturesBundle\Test\FixturesTrait;

class CategoryControllerTest extends WebTestCase
{

    use FixturesTrait;

    private $client = null;

    public function setUp() :void
    {
        $this->client = static::createClient();
        $this->loadFixtures([CategoryFixtures::class]);
    }

    public function testIndex()
    {
        //init client for web request and boot the kernel
        //$client = static::createClient();
        //load fixtures of category
        
        //done request and verify the result
        $this->client->request('GET', '/category');
        $this->assertEquals(200, $this->client->getResponse()->getStatusCode());
    }
}
