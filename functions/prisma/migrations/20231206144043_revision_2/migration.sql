-- CreateEnum
CREATE TYPE "Category" AS ENUM ('skinny', 'normal', 'over');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "category" "Category";
