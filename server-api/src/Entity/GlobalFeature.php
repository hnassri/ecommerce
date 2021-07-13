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
     * @ORM\ManyToOne(targetEntity=article::class, inversedBy="globalFeatures")
     * @ORM\JoinColumn(nullable=false)
     */
    private $id_feature;

    /**
     * @ORM\ManyToOne(targetEntity=article::class, inversedBy="article")
     */
    private $id_article;

    public function __construct()
    {
        $this->id_feature = new ArrayCollection();
        $this->id_article = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection|feature[]
     */
    public function getIdFeature(): Collection
    {
        return $this->id_feature;
    }

    

    /**
     * @return Collection|article[]
     */

    public function setIdFeature(?article $id_feature): self
    {
        $this->id_feature = $id_feature;

        return $this;
    }

    public function getIdArticle(): ?article
    {
        return $this->id_article;
    }

    public function setIdArticle(?article $id_article): self
    {
        $this->id_article = $id_article;

        return $this;
    }
}
