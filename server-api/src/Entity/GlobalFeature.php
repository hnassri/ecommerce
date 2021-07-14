<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\GlobalFeatureRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=GlobalFeatureRepository::class)
 */
#[ApiResource]
class GlobalFeature
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=article::class, inversedBy="global_feature")
     */
    private $article;

    /**
     * @ORM\ManyToOne(targetEntity=feature::class, inversedBy="globalFeatures")
     */
    private $feature;




    public function __construct()
    {
        $this->id_feature = new ArrayCollection();
        $this->id_article = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getArticle(): ?article
    {
        return $this->article;
    }

    public function setArticle(?article $article): self
    {
        $this->article = $article;

        return $this;
    }

    public function getFeature(): ?feature
    {
        return $this->feature;
    }

    public function setFeature(?feature $feature): self
    {
        $this->feature = $feature;

        return $this;
    }



}
