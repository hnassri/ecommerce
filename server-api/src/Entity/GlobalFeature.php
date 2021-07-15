<?php

namespace App\Entity;

use App\Repository\GlobalFeatureRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=GlobalFeatureRepository::class)
 */
class GlobalFeature
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Article::class, inversedBy="globalFeatures")
     */
    private $article_id;

    /**
     * @ORM\ManyToOne(targetEntity=Feature::class, inversedBy="globalFeatures")
     */
    private $feature_id;

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

    public function getFeatureId(): ?Feature
    {
        return $this->feature_id;
    }

    public function setFeatureId(?Feature $feature_id): self
    {
        $this->feature_id = $feature_id;

        return $this;
    }
}
