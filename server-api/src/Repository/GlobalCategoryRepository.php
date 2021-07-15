<?php

namespace App\Repository;

use App\Entity\GlobalCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method GlobalCategory|null find($id, $lockMode = null, $lockVersion = null)
 * @method GlobalCategory|null findOneBy(array $criteria, array $orderBy = null)
 * @method GlobalCategory[]    findAll()
 * @method GlobalCategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GlobalCategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GlobalCategory::class);
    }

    // /**
    //  * @return GlobalCategory[] Returns an array of GlobalCategory objects
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
    public function findOneBySomeField($value): ?GlobalCategory
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
