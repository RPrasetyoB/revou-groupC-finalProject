/*
  Warnings:

  - The values [light_active,moderate_active,very_active] on the enum `Activeness` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `food_name` on the `FoodList` table. All the data in the column will be lost.
  - You are about to drop the column `medication_actual` on the `Meditation` table. All the data in the column will be lost.
  - You are about to drop the column `current_mood` on the `Mood` table. All the data in the column will be lost.
  - You are about to drop the column `sleep_actual` on the `Sleep` table. All the data in the column will be lost.
  - You are about to drop the column `sleep_end` on the `Sleep` table. All the data in the column will be lost.
  - You are about to drop the column `sleep_start` on the `Sleep` table. All the data in the column will be lost.
  - You are about to drop the column `steps_actual` on the `Steps` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `water_actual` on the `Water` table. All the data in the column will be lost.
  - You are about to drop the `Food` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[foodName]` on the table `FoodList` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[googleId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `foodName` to the `FoodList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medicationActual` to the `Meditation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentMood` to the `Mood` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sleepActual` to the `Sleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sleepEnd` to the `Sleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stepsActual` to the `Steps` table without a default value. This is not possible if the table is not empty.
  - Added the required column `waterActual` to the `Water` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Activeness_new" AS ENUM ('light', 'moderate', 'active');
ALTER TABLE "User" ALTER COLUMN "activeness" TYPE "Activeness_new" USING ("activeness"::text::"Activeness_new");
ALTER TYPE "Activeness" RENAME TO "Activeness_old";
ALTER TYPE "Activeness_new" RENAME TO "Activeness";
DROP TYPE "Activeness_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Food" DROP CONSTRAINT "Food_foodlist_id_fkey";

-- DropForeignKey
ALTER TABLE "Food" DROP CONSTRAINT "Food_userId_fkey";

-- AlterTable
ALTER TABLE "FoodList" DROP COLUMN "food_name",
ADD COLUMN     "foodName" TEXT NOT NULL,
ALTER COLUMN "calories" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Meditation" DROP COLUMN "medication_actual",
ADD COLUMN     "medicationActual" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Mood" DROP COLUMN "current_mood",
ADD COLUMN     "currentMood" "Todaymood" NOT NULL;

-- AlterTable
ALTER TABLE "Report" ADD COLUMN     "category" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Sleep" DROP COLUMN "sleep_actual",
DROP COLUMN "sleep_end",
DROP COLUMN "sleep_start",
ADD COLUMN     "sleepActual" INTEGER NOT NULL,
ADD COLUMN     "sleepEnd" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "sleepStart" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Steps" DROP COLUMN "steps_actual",
ADD COLUMN     "stepsActual" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "fullName",
ADD COLUMN     "googleId" TEXT,
ADD COLUMN     "isEmailVerified" BOOLEAN DEFAULT false,
ADD COLUMN     "nickname" TEXT,
ADD COLUMN     "verificationToken" TEXT,
ALTER COLUMN "password" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Water" DROP COLUMN "water_actual",
ADD COLUMN     "waterActual" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Food";

-- CreateTable
CREATE TABLE "Calories" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amr" INTEGER NOT NULL,
    "bmi" INTEGER NOT NULL,
    "actual" INTEGER,
    "target" INTEGER NOT NULL,

    CONSTRAINT "Calories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodConsumed" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "foodName" TEXT NOT NULL,
    "calories" INTEGER NOT NULL,
    "uniqueId" TEXT NOT NULL,

    CONSTRAINT "FoodConsumed_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FoodList_foodName_key" ON "FoodList"("foodName");

-- CreateIndex
CREATE UNIQUE INDEX "User_googleId_key" ON "User"("googleId");

-- AddForeignKey
ALTER TABLE "Calories" ADD CONSTRAINT "Calories_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodConsumed" ADD CONSTRAINT "FoodConsumed_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodConsumed" ADD CONSTRAINT "FoodConsumed_foodName_fkey" FOREIGN KEY ("foodName") REFERENCES "FoodList"("foodName") ON DELETE RESTRICT ON UPDATE CASCADE;
