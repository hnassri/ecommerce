<?php

namespace App\Entity;

use App\Repository\FeatureRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=FeatureRepository::class)
 */
class Feature
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
     * @ORM\OneToMany(targetEntity=GlobalFeature::class, mappedBy="feature_id")
     */
    private $globalFeatures;

    public function __construct()
    {
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
            $globalFeature->setFeatureId($this);
        }

        return $this;
    }

    public function removeGlobalFeature(GlobalFeature $globalFeature): self
    {
        if ($this->globalFeatures->removeElement($globalFeature)) {
            // set the owning side to null (unless already changed)
            if ($globalFeature->getFeatureId() === $this) {
                $globalFeature->setFeatureId(null);
            }
        }

        return $this;
    }
}
