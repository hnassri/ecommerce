<?php

namespace App\Entity;

use App\Repository\ArticleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ArticleRepository::class)
 */
class Article
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="float")
     */
    private $price;

    /**
     * @ORM\Column(type="integer")
     */
    private $quantity;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $uuid;

    /**
     * @ORM\OneToMany(targetEntity=Image::class, mappedBy="article_id")
     */
    private $images;

    /**
     * @ORM\OneToMany(targetEntity=GlobalCategory::class, mappedBy="article_id")
     */
    private $globalCategories;

    /**
     * @ORM\OneToMany(targetEntity=GlobalFeature::class, mappedBy="article_id")
     */
    private $globalFeatures;

    /**
     * @ORM\Column(type="boolean")
     */
    private $stock;

    public function __construct()
    {
        $this->images = new ArrayCollection();
        $this->globalCategories = new ArrayCollection();
        $this->globalFeatures = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getUuid(): ?string
    {
        return $this->uuid;
    }

    public function setUuid(?string $uuid): self
    {
        $this->uuid = $uuid;

        return $this;
    }

    /**
     * @return Collection|Image[]
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(Image $image): self
    {
        if (!$this->images->contains($image)) {
            $this->images[] = $image;
            $image->setArticleId($this);
        }

        return $this;
    }

    public function removeImage(Image $image): self
    {
        if ($this->images->removeElement($image)) {
            // set the owning side to null (unless already changed)
            if ($image->getArticleId() === $this) {
                $image->setArticleId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|GlobalCategory[]
     */
    public function getGlobalCategories(): Collection
    {
        return $this->globalCategories;
    }

    public function addGlobalCategory(GlobalCategory $globalCategory): self
    {
        if (!$this->globalCategories->contains($globalCategory)) {
            $this->globalCategories[] = $globalCategory;
            $globalCategory->setArticleId($this);
        }

        return $this;
    }

    public function removeGlobalCategory(GlobalCategory $globalCategory): self
    {
        if ($this->globalCategories->removeElement($globalCategory)) {
            // set the owning side to null (unless already changed)
            if ($globalCategory->getArticleId() === $this) {
                $globalCategory->setArticleId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|GlobalFeature[]
     */
    public function getGlobalFeatures(): Collection
    {
        return $this->globalFeatures;
    }

    public function addGlobalFeature(GlobalFeature $globalFeature): self
    {
        if (!$this->globalFeatures->contains($globalFeature)) {
            $this->globalFeatures[] = $globalFeature;
            $globalFeature->setArticleId($this);
        }

        return $this;
    }

    public function removeGlobalFeature(GlobalFeature $globalFeature): self
    {
        if ($this->globalFeatures->removeElement($globalFeature)) {
            // set the owning side to null (unless already changed)
            if ($globalFeature->getArticleId() === $this) {
                $globalFeature->setArticleId(null);
            }
        }

        return $this;
    }

    public function getStock(): ?bool
    {
        return $this->stock;
    }

    public function setStock(bool $stock): self
    {
        $this->stock = $stock;

        return $this;
    }
}