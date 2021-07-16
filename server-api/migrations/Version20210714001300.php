<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210714001300 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE global_feature DROP FOREIGN KEY FK_7453B587C56E38AE');
        $this->addSql('ALTER TABLE global_feature DROP FOREIGN KEY FK_7453B587D71E064B');
        $this->addSql('DROP INDEX IDX_7453B587C56E38AE ON global_feature');
        $this->addSql('DROP INDEX IDX_7453B587D71E064B ON global_feature');
        $this->addSql('ALTER TABLE global_feature ADD feature_id INT DEFAULT NULL, DROP id_feature_id, CHANGE id_article_id article_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE global_feature ADD CONSTRAINT FK_7453B5877294869C FOREIGN KEY (article_id) REFERENCES article (id)');
        $this->addSql('ALTER TABLE global_feature ADD CONSTRAINT FK_7453B58760E4B879 FOREIGN KEY (feature_id) REFERENCES feature (id)');
        $this->addSql('CREATE INDEX IDX_7453B5877294869C ON global_feature (article_id)');
        $this->addSql('CREATE INDEX IDX_7453B58760E4B879 ON global_feature (feature_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE global_feature DROP FOREIGN KEY FK_7453B5877294869C');
        $this->addSql('ALTER TABLE global_feature DROP FOREIGN KEY FK_7453B58760E4B879');
        $this->addSql('DROP INDEX IDX_7453B5877294869C ON global_feature');
        $this->addSql('DROP INDEX IDX_7453B58760E4B879 ON global_feature');
        $this->addSql('ALTER TABLE global_feature ADD id_feature_id INT NOT NULL, ADD id_article_id INT DEFAULT NULL, DROP article_id, DROP feature_id');
        $this->addSql('ALTER TABLE global_feature ADD CONSTRAINT FK_7453B587C56E38AE FOREIGN KEY (id_feature_id) REFERENCES article (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE global_feature ADD CONSTRAINT FK_7453B587D71E064B FOREIGN KEY (id_article_id) REFERENCES article (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_7453B587C56E38AE ON global_feature (id_feature_id)');
        $this->addSql('CREATE INDEX IDX_7453B587D71E064B ON global_feature (id_article_id)');
    }
}
