<?php

namespace App\Entity;

use App\Repository\GlobalCategoryRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=GlobalCategoryRepository::class)
 */
class GlobalCategory
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Article::class, inversedBy="globalCategories")
     */
    private $article_id;

    /**
     * @ORM\ManyToOne(targetEntity=Category::class, inversedBy="globalCategories")
     */
    private $category_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getArticleId(): ?Article
    {
        return $this->article_id;
    }

    public function setArticleId(?Article $article_id): self
    {
        $this->article_id = $article_id;

        return $this;
    }

    public function getCategoryId(): ?Category
    {
        return $this->category_id;
    }

    public function setCategoryId(?Category $category_id): self
    {
        $this->category_id = $category_id;

        return $this;
    }
}
