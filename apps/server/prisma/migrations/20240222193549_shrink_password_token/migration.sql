/*
  Warnings:

  - You are about to alter the column `value` on the `tokens` table. The data in that column could be lost. The data in that column will be cast from `VarChar(500)` to `VarChar(72)`.

*/
-- AlterTable
ALTER TABLE "tokens" ALTER COLUMN "value" SET DATA TYPE VARCHAR(72);

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "password" SET DATA TYPE VARCHAR(72);
