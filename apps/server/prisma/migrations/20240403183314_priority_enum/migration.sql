/*
  Warnings:

  - The `priority` column on the `todo_items` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('DEFAULT', 'LOW', 'MEDIUM', 'HIGH');

-- AlterTable
ALTER TABLE "todo_items" DROP COLUMN "priority",
ADD COLUMN     "priority" "Priority" NOT NULL DEFAULT 'DEFAULT';
