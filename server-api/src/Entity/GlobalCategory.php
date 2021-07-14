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
     * @ORM\ManyToOne(targetEntity=article::class, inversedBy="global_id")
     */
    private $article;

    /**
     * @ORM\ManyToOne(targetEntity=category::class, inversedBy="category_id")
     */
    private $category;

  
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

    public function getArticle(): ?article
    {
        return $this->article;
    }

    public function setArticle(?article $article): self
    {
        $this->article = $article;

        return $this;
    }

    public function getCategory(): ?category
    {
        return $this->category;
    }

    public function setCategory(?category $category): self
    {
        $this->category = $category;

        return $this;
    }
}
