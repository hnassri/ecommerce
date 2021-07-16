<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210713235834 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE article (id INT AUTO_INCREMENT NOT NULL, global_feature_id INT NOT NULL, name VARCHAR(255) NOT NULL, quantity INT NOT NULL, description LONGTEXT NOT NULL, price INT NOT NULL, uid VARCHAR(255) NOT NULL, INDEX IDX_23A0E66E9EB92F2 (global_feature_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE feature (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE global_category (id INT AUTO_INCREMENT NOT NULL, id_category_id INT DEFAULT NULL, id_article_id INT DEFAULT NULL, INDEX IDX_D12A4FEFA545015 (id_category_id), INDEX IDX_D12A4FEFD71E064B (id_article_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE global_feature (id INT AUTO_INCREMENT NOT NULL, id_feature_id INT NOT NULL, id_article_id INT DEFAULT NULL, INDEX IDX_7453B587C56E38AE (id_feature_id), INDEX IDX_7453B587D71E064B (id_article_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE image (id INT AUTO_INCREMENT NOT NULL, id_article_id INT DEFAULT NULL, url LONGTEXT NOT NULL, uid VARCHAR(255) NOT NULL, INDEX IDX_C53D045FD71E064B (id_article_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `user` (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE article ADD CONSTRAINT FK_23A0E66E9EB92F2 FOREIGN KEY (global_feature_id) REFERENCES global_feature (id)');
        $this->addSql('ALTER TABLE global_category ADD CONSTRAINT FK_D12A4FEFA545015 FOREIGN KEY (id_category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE global_category ADD CONSTRAINT FK_D12A4FEFD71E064B FOREIGN KEY (id_article_id) REFERENCES article (id)');
        $this->addSql('ALTER TABLE global_feature ADD CONSTRAINT FK_7453B587C56E38AE FOREIGN KEY (id_feature_id) REFERENCES article (id)');
        $this->addSql('ALTER TABLE global_feature ADD CONSTRAINT FK_7453B587D71E064B FOREIGN KEY (id_article_id) REFERENCES article (id)');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045FD71E064B FOREIGN KEY (id_article_id) REFERENCES article (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE global_category DROP FOREIGN KEY FK_D12A4FEFD71E064B');
        $this->addSql('ALTER TABLE global_feature DROP FOREIGN KEY FK_7453B587C56E38AE');
        $this->addSql('ALTER TABLE global_feature DROP FOREIGN KEY FK_7453B587D71E064B');
        $this->addSql('ALTER TABLE image DROP FOREIGN KEY FK_C53D045FD71E064B');
        $this->addSql('ALTER TABLE global_category DROP FOREIGN KEY FK_D12A4FEFA545015');
        $this->addSql('ALTER TABLE article DROP FOREIGN KEY FK_23A0E66E9EB92F2');
        $this->addSql('DROP TABLE article');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE feature');
        $this->addSql('DROP TABLE global_category');
        $this->addSql('DROP TABLE global_feature');
        $this->addSql('DROP TABLE image');
        $this->addSql('DROP TABLE `user`');
    }
}
