<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210714162710 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE user');
        $this->addSql('ALTER TABLE article ADD uuid VARCHAR(255) DEFAULT NULL, DROP uid, CHANGE price price DOUBLE PRECISION NOT NULL');
        $this->addSql('ALTER TABLE global_category DROP FOREIGN KEY FK_D12A4FEF12469DE2');
        $this->addSql('ALTER TABLE global_category DROP FOREIGN KEY FK_D12A4FEF7294869C');
        $this->addSql('DROP INDEX IDX_D12A4FEF12469DE2 ON global_category');
        $this->addSql('DROP INDEX IDX_D12A4FEF7294869C ON global_category');
        $this->addSql('ALTER TABLE global_category ADD article_id_id INT DEFAULT NULL, ADD category_id_id INT DEFAULT NULL, DROP article_id, DROP category_id');
        $this->addSql('ALTER TABLE global_category ADD CONSTRAINT FK_D12A4FEF8F3EC46 FOREIGN KEY (article_id_id) REFERENCES article (id)');
        $this->addSql('ALTER TABLE global_category ADD CONSTRAINT FK_D12A4FEF9777D11E FOREIGN KEY (category_id_id) REFERENCES category (id)');
        $this->addSql('CREATE INDEX IDX_D12A4FEF8F3EC46 ON global_category (article_id_id)');
        $this->addSql('CREATE INDEX IDX_D12A4FEF9777D11E ON global_category (category_id_id)');
        $this->addSql('ALTER TABLE global_feature DROP FOREIGN KEY FK_7453B58760E4B879');
        $this->addSql('ALTER TABLE global_feature DROP FOREIGN KEY FK_7453B5877294869C');
        $this->addSql('DROP INDEX IDX_7453B58760E4B879 ON global_feature');
        $this->addSql('DROP INDEX IDX_7453B5877294869C ON global_feature');
        $this->addSql('ALTER TABLE global_feature ADD article_id_id INT DEFAULT NULL, ADD feature_id_id INT DEFAULT NULL, DROP article_id, DROP feature_id');
        $this->addSql('ALTER TABLE global_feature ADD CONSTRAINT FK_7453B5878F3EC46 FOREIGN KEY (article_id_id) REFERENCES article (id)');
        $this->addSql('ALTER TABLE global_feature ADD CONSTRAINT FK_7453B587B61A945E FOREIGN KEY (feature_id_id) REFERENCES feature (id)');
        $this->addSql('CREATE INDEX IDX_7453B5878F3EC46 ON global_feature (article_id_id)');
        $this->addSql('CREATE INDEX IDX_7453B587B61A945E ON global_feature (feature_id_id)');
        $this->addSql('ALTER TABLE image DROP FOREIGN KEY FK_C53D045F7294869C');
        $this->addSql('DROP INDEX IDX_C53D045F7294869C ON image');
        $this->addSql('ALTER TABLE image CHANGE url url VARCHAR(255) NOT NULL, CHANGE article_id article_id_id INT DEFAULT NULL, CHANGE uid uuid VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045F8F3EC46 FOREIGN KEY (article_id_id) REFERENCES article (id)');
        $this->addSql('CREATE INDEX IDX_C53D045F8F3EC46 ON image (article_id_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, roles LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:json)\', password VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE article ADD uid VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, DROP uuid, CHANGE price price INT NOT NULL');
        $this->addSql('ALTER TABLE global_category DROP FOREIGN KEY FK_D12A4FEF8F3EC46');
        $this->addSql('ALTER TABLE global_category DROP FOREIGN KEY FK_D12A4FEF9777D11E');
        $this->addSql('DROP INDEX IDX_D12A4FEF8F3EC46 ON global_category');
        $this->addSql('DROP INDEX IDX_D12A4FEF9777D11E ON global_category');
        $this->addSql('ALTER TABLE global_category ADD article_id INT DEFAULT NULL, ADD category_id INT DEFAULT NULL, DROP article_id_id, DROP category_id_id');
        $this->addSql('ALTER TABLE global_category ADD CONSTRAINT FK_D12A4FEF12469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE global_category ADD CONSTRAINT FK_D12A4FEF7294869C FOREIGN KEY (article_id) REFERENCES article (id)');
        $this->addSql('CREATE INDEX IDX_D12A4FEF12469DE2 ON global_category (category_id)');
        $this->addSql('CREATE INDEX IDX_D12A4FEF7294869C ON global_category (article_id)');
        $this->addSql('ALTER TABLE global_feature DROP FOREIGN KEY FK_7453B5878F3EC46');
        $this->addSql('ALTER TABLE global_feature DROP FOREIGN KEY FK_7453B587B61A945E');
        $this->addSql('DROP INDEX IDX_7453B5878F3EC46 ON global_feature');
        $this->addSql('DROP INDEX IDX_7453B587B61A945E ON global_feature');
        $this->addSql('ALTER TABLE global_feature ADD article_id INT DEFAULT NULL, ADD feature_id INT DEFAULT NULL, DROP article_id_id, DROP feature_id_id');
        $this->addSql('ALTER TABLE global_feature ADD CONSTRAINT FK_7453B58760E4B879 FOREIGN KEY (feature_id) REFERENCES feature (id)');
        $this->addSql('ALTER TABLE global_feature ADD CONSTRAINT FK_7453B5877294869C FOREIGN KEY (article_id) REFERENCES article (id)');
        $this->addSql('CREATE INDEX IDX_7453B58760E4B879 ON global_feature (feature_id)');
        $this->addSql('CREATE INDEX IDX_7453B5877294869C ON global_feature (article_id)');
        $this->addSql('ALTER TABLE image DROP FOREIGN KEY FK_C53D045F8F3EC46');
        $this->addSql('DROP INDEX IDX_C53D045F8F3EC46 ON image');
        $this->addSql('ALTER TABLE image CHANGE url url LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE article_id_id article_id INT DEFAULT NULL, CHANGE uuid uid VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045F7294869C FOREIGN KEY (article_id) REFERENCES article (id)');
        $this->addSql('CREATE INDEX IDX_C53D045F7294869C ON image (article_id)');
    }
}
