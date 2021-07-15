<?php

namespace App\Repository;

use App\Entity\GlobalFeature;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method GlobalFeature|null find($id, $lockMode = null, $lockVersion = null)
 * @method GlobalFeature|null findOneBy(array $criteria, array $orderBy = null)
 * @method GlobalFeature[]    findAll()
 * @method GlobalFeature[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GlobalFeatureRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GlobalFeature::class);
    }

    // /**
    //  * @return GlobalFeature[] Returns an array of GlobalFeature objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?GlobalFeature
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
