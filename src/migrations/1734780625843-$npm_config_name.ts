import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1734780625843 implements MigrationInterface {
    name = ' $npmConfigName1734780625843'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "created_at"`);
    }

}
