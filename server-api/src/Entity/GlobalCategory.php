<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\GlobalCategoryRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=GlobalCategoryRepository::class)
 */
#[ApiResource]
class GlobalCategory
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=category::class, inversedBy="globalCategories")
     */
    private $id_category;

    /**
     * @ORM\ManyToOne(targetEntity=article::class, inversedBy="globalCategories")
     */
    private $id_article;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdCategory(): ?category
    {
        return $this->id_category;
    }

    public function setIdCategory(?category $id_category): self
    {
        $this->id_category = $id_category;

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
