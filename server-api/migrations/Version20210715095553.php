<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210715095553 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE feature (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE global_category (id INT AUTO_INCREMENT NOT NULL, article_id_id INT DEFAULT NULL, category_id_id INT DEFAULT NULL, INDEX IDX_D12A4FEF8F3EC46 (article_id_id), INDEX IDX_D12A4FEF9777D11E (category_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE global_feature (id INT AUTO_INCREMENT NOT NULL, article_id_id INT DEFAULT NULL, feature_id_id INT DEFAULT NULL, INDEX IDX_7453B5878F3EC46 (article_id_id), INDEX IDX_7453B587B61A945E (feature_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE image (id INT AUTO_INCREMENT NOT NULL, article_id_id INT DEFAULT NULL, url VARCHAR(255) NOT NULL, uuid VARCHAR(255) NOT NULL, INDEX IDX_C53D045F8F3EC46 (article_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE global_category ADD CONSTRAINT FK_D12A4FEF8F3EC46 FOREIGN KEY (article_id_id) REFERENCES article (id)');
        $this->addSql('ALTER TABLE global_category ADD CONSTRAINT FK_D12A4FEF9777D11E FOREIGN KEY (category_id_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE global_feature ADD CONSTRAINT FK_7453B5878F3EC46 FOREIGN KEY (article_id_id) REFERENCES article (id)');
        $this->addSql('ALTER TABLE global_feature ADD CONSTRAINT FK_7453B587B61A945E FOREIGN KEY (feature_id_id) REFERENCES feature (id)');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045F8F3EC46 FOREIGN KEY (article_id_id) REFERENCES article (id)');
        $this->addSql('ALTER TABLE article ADD uuid VARCHAR(255) DEFAULT NULL, DROP uid, CHANGE price price DOUBLE PRECISION NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE global_category DROP FOREIGN KEY FK_D12A4FEF9777D11E');
        $this->addSql('ALTER TABLE global_feature DROP FOREIGN KEY FK_7453B587B61A945E');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE feature');
        $this->addSql('DROP TABLE global_category');
        $this->addSql('DROP TABLE global_feature');
        $this->addSql('DROP TABLE image');
        $this->addSql('ALTER TABLE article ADD uid VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, DROP uuid, CHANGE price price INT NOT NULL');
    }
}
