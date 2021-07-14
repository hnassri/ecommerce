<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CategoryRepository::class)
 */
#[ApiResource]
class Category
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
     * @ORM\OneToMany(targetEntity=GlobalCategory::class, mappedBy="id_category")
     */
    private $globalCategories;

    /**
     * @ORM\OneToMany(targetEntity=GlobalCategory::class, mappedBy="category")
     */
    private $category_id;

    public function __construct()
    {
        $this->globalCategories = new ArrayCollection();
        $this->category_id = new ArrayCollection();
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
            $globalCategory->setIdCategory($this);
        }

        return $this;
    }

    public function removeGlobalCategory(GlobalCategory $globalCategory): self
    {
        if ($this->globalCategories->removeElement($globalCategory)) {
            // set the owning side to null (unless already changed)
            if ($globalCategory->getIdCategory() === $this) {
                $globalCategory->setIdCategory(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|GlobalCategory[]
     */
    public function getCategoryId(): Collection
    {
        return $this->category_id;
    }

    public function addCategoryId(GlobalCategory $categoryId): self
    {
        if (!$this->category_id->contains($categoryId)) {
            $this->category_id[] = $categoryId;
            $categoryId->setCategory($this);
        }

        return $this;
    }

    public function removeCategoryId(GlobalCategory $categoryId): self
    {
        if ($this->category_id->removeElement($categoryId)) {
            // set the owning side to null (unless already changed)
            if ($categoryId->getCategory() === $this) {
                $categoryId->setCategory(null);
            }
        }

        return $this;
    }
}
