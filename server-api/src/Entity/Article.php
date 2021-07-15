<?php

namespace App\Entity;

<<<<<<< HEAD
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ArticleRepository;
=======
use App\Repository\ArticleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
>>>>>>> 6aa96dd6692ce48baccd3309ccffa8fb23f348fe
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ArticleRepository::class)
 */
<<<<<<< HEAD
#[ApiResource]
=======
>>>>>>> 6aa96dd6692ce48baccd3309ccffa8fb23f348fe
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
<<<<<<< HEAD
=======
     * @ORM\Column(type="float")
     */
    private $price;

    /**
>>>>>>> 6aa96dd6692ce48baccd3309ccffa8fb23f348fe
     * @ORM\Column(type="integer")
     */
    private $quantity;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
<<<<<<< HEAD
     * @ORM\Column(type="integer")
     */
    private $price;


    /**
     * @ORM\Column(type="string", length=255)
     */
    private $uid;
=======
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

    public function __construct()
    {
        $this->images = new ArrayCollection();
        $this->globalCategories = new ArrayCollection();
        $this->globalFeatures = new ArrayCollection();
    }
>>>>>>> 6aa96dd6692ce48baccd3309ccffa8fb23f348fe

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

<<<<<<< HEAD
=======
    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

>>>>>>> 6aa96dd6692ce48baccd3309ccffa8fb23f348fe
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

<<<<<<< HEAD
    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): self
    {
        $this->price = $price;
=======
    public function getUuid(): ?string
    {
        return $this->uuid;
    }

    public function setUuid(?string $uuid): self
    {
        $this->uuid = $uuid;
>>>>>>> 6aa96dd6692ce48baccd3309ccffa8fb23f348fe

        return $this;
    }

<<<<<<< HEAD

    public function getUid(): ?string
    {
        return $this->uid;
    }

    public function setUid(string $uid): self
    {
        $this->uid = $uid;
=======
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
>>>>>>> 6aa96dd6692ce48baccd3309ccffa8fb23f348fe

        return $this;
    }
}
