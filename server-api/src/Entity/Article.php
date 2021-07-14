<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ArticleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ArticleRepository::class)
 */
#[ApiResource]
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
     * @ORM\Column(type="integer")
     */
    private $quantity;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\Column(type="integer")
     */
    private $price;


    /**
     * @ORM\Column(type="string", length=255)
     */
    private $uid;

    /**
     * @ORM\ManyToOne(targetEntity=GlobalFeature::class, inversedBy="id_article")
     * @ORM\JoinColumn(nullable=false)
     */
    private $globalFeature;

    /**
     * @ORM\OneToMany(targetEntity=Image::class, mappedBy="id_article")
     */
    private $images;

    /**
     * @ORM\OneToMany(targetEntity=GlobalFeature::class, mappedBy="id_feature")
     */
    private $globalFeatures;

    /**
     * @ORM\OneToMany(targetEntity=GlobalFeature::class, mappedBy="id_article")
     */
    private $article;

    /**
     * @ORM\OneToMany(targetEntity=GlobalCategory::class, mappedBy="id_article")
     */
    private $globalCategories;

    /**
     * @ORM\OneToMany(targetEntity=GlobalCategory::class, mappedBy="article")
     */
    private $global_id;

    /**
     * @ORM\OneToMany(targetEntity=GlobalFeature::class, mappedBy="article")
     */
    private $global_feature;

    /**
     * @ORM\OneToMany(targetEntity=Image::class, mappedBy="article")
     */
    private $image;

    public function __construct()
    {
        $this->images = new ArrayCollection();
        $this->globalFeatures = new ArrayCollection();
        $this->article = new ArrayCollection();
        $this->globalCategories = new ArrayCollection();
        $this->global_id = new ArrayCollection();
        $this->global_feature = new ArrayCollection();
        $this->image = new ArrayCollection();
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

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): self
    {
        $this->price = $price;

        return $this;
    }


    public function getUid(): ?string
    {
        return $this->uid;
    }

    public function setUid(string $uid): self
    {
        $this->uid = $uid;

        return $this;
    }

    public function getGlobalFeature(): ?GlobalFeature
    {
        return $this->globalFeature;
    }

    public function setGlobalFeature(?GlobalFeature $globalFeature): self
    {
        $this->globalFeature = $globalFeature;

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
            $image->setIdArticle($this);
        }

        return $this;
    }

    public function removeImage(Image $image): self
    {
        if ($this->images->removeElement($image)) {
            // set the owning side to null (unless already changed)
            if ($image->getIdArticle() === $this) {
                $image->setIdArticle(null);
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



    /**
     * @return Collection|GlobalFeature[]
     */
    public function getArticle(): Collection
    {
        return $this->article;
    }

    public function addArticle(GlobalFeature $article): self
    {
        if (!$this->article->contains($article)) {
            $this->article[] = $article;
            $article->setIdArticle($this);
        }

        return $this;
    }

    public function removeArticle(GlobalFeature $article): self
    {
        if ($this->article->removeElement($article)) {
            // set the owning side to null (unless already changed)
            if ($article->getIdArticle() === $this) {
                $article->setIdArticle(null);
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
            $globalCategory->setIdArticle($this);
        }

        return $this;
    }

    public function removeGlobalCategory(GlobalCategory $globalCategory): self
    {
        if ($this->globalCategories->removeElement($globalCategory)) {
            // set the owning side to null (unless already changed)
            if ($globalCategory->getIdArticle() === $this) {
                $globalCategory->setIdArticle(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|GlobalCategory[]
     */
    public function getGlobalId(): Collection
    {
        return $this->global_id;
    }

    public function addGlobalId(GlobalCategory $globalId): self
    {
        if (!$this->global_id->contains($globalId)) {
            $this->global_id[] = $globalId;
            $globalId->setArticle($this);
        }

        return $this;
    }

    public function removeGlobalId(GlobalCategory $globalId): self
    {
        if ($this->global_id->removeElement($globalId)) {
            // set the owning side to null (unless already changed)
            if ($globalId->getArticle() === $this) {
                $globalId->setArticle(null);
            }
        }

        return $this;
    }

    public function addGlobalFeature(GlobalFeature $globalFeature): self
    {
        if (!$this->global_feature->contains($globalFeature)) {
            $this->global_feature[] = $globalFeature;
            $globalFeature->setArticle($this);
        }

        return $this;
    }

    public function removeGlobalFeature(GlobalFeature $globalFeature): self
    {
        if ($this->global_feature->removeElement($globalFeature)) {
            // set the owning side to null (unless already changed)
            if ($globalFeature->getArticle() === $this) {
                $globalFeature->setArticle(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Image[]
     */
    public function getImage(): Collection
    {
        return $this->image;
    }
}
