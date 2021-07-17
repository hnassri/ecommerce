<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210714000627 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE global_category DROP FOREIGN KEY FK_D12A4FEFA545015');
        $this->addSql('ALTER TABLE global_category DROP FOREIGN KEY FK_D12A4FEFD71E064B');
        $this->addSql('DROP INDEX IDX_D12A4FEFA545015 ON global_category');
        $this->addSql('DROP INDEX IDX_D12A4FEFD71E064B ON global_category');
        $this->addSql('ALTER TABLE global_category ADD article_id INT DEFAULT NULL, ADD category_id INT DEFAULT NULL, DROP id_category_id, DROP id_article_id');
        $this->addSql('ALTER TABLE global_category ADD CONSTRAINT FK_D12A4FEF7294869C FOREIGN KEY (article_id) REFERENCES article (id)');
        $this->addSql('ALTER TABLE global_category ADD CONSTRAINT FK_D12A4FEF12469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('CREATE INDEX IDX_D12A4FEF7294869C ON global_category (article_id)');
        $this->addSql('CREATE INDEX IDX_D12A4FEF12469DE2 ON global_category (category_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE global_category DROP FOREIGN KEY FK_D12A4FEF7294869C');
        $this->addSql('ALTER TABLE global_category DROP FOREIGN KEY FK_D12A4FEF12469DE2');
        $this->addSql('DROP INDEX IDX_D12A4FEF7294869C ON global_category');
        $this->addSql('DROP INDEX IDX_D12A4FEF12469DE2 ON global_category');
        $this->addSql('ALTER TABLE global_category ADD id_category_id INT DEFAULT NULL, ADD id_article_id INT DEFAULT NULL, DROP article_id, DROP category_id');
        $this->addSql('ALTER TABLE global_category ADD CONSTRAINT FK_D12A4FEFA545015 FOREIGN KEY (id_category_id) REFERENCES category (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE global_category ADD CONSTRAINT FK_D12A4FEFD71E064B FOREIGN KEY (id_article_id) REFERENCES article (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_D12A4FEFA545015 ON global_category (id_category_id)');
        $this->addSql('CREATE INDEX IDX_D12A4FEFD71E064B ON global_category (id_article_id)');
    }
}
