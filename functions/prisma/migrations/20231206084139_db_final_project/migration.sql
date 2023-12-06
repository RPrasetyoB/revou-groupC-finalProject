-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('man', 'woman');

-- CreateEnum
CREATE TYPE "Activeness" AS ENUM ('light_active', 'moderate_active', 'very_active');

-- CreateEnum
CREATE TYPE "Todaymood" AS ENUM ('sad', 'netral', 'happy');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fullName" TEXT,
    "weight" INTEGER,
    "height" INTEGER,
    "gender" "Gender",
    "age" INTEGER,
    "activeness" "Activeness",

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sleep" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sleep_start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sleep_end" TIMESTAMP(3) NOT NULL,
    "sleep_actual" INTEGER NOT NULL,
    "target" INTEGER NOT NULL,

    CONSTRAINT "Sleep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Steps" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "steps_actual" INTEGER NOT NULL,
    "target" INTEGER NOT NULL,

    CONSTRAINT "Steps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Food" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "foodlist_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "calories" INTEGER NOT NULL,
    "min_calories" INTEGER NOT NULL,
    "max_calories" INTEGER NOT NULL,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodList" (
    "id" SERIAL NOT NULL,
    "food_name" TEXT NOT NULL,
    "calories" INTEGER NOT NULL,

    CONSTRAINT "FoodList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Water" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "water_actual" INTEGER NOT NULL,
    "target" INTEGER NOT NULL,

    CONSTRAINT "Water_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meditation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "medication_actual" INTEGER NOT NULL,
    "target" INTEGER NOT NULL,

    CONSTRAINT "Meditation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mood" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "current_mood" "Todaymood" NOT NULL,

    CONSTRAINT "Mood_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "sleepActual" INTEGER NOT NULL,
    "sleepTarget" INTEGER NOT NULL,
    "stepsActual" INTEGER NOT NULL,
    "stepsTarget" INTEGER NOT NULL,
    "foodCaloriesActual" INTEGER NOT NULL,
    "foodCaloriesTarget" INTEGER NOT NULL,
    "waterActual" INTEGER NOT NULL,
    "waterTarget" INTEGER NOT NULL,
    "meditationActual" INTEGER NOT NULL,
    "meditationTarget" INTEGER NOT NULL,
    "mood" "Todaymood" NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Sleep" ADD CONSTRAINT "Sleep_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Steps" ADD CONSTRAINT "Steps_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Food" ADD CONSTRAINT "Food_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Food" ADD CONSTRAINT "Food_foodlist_id_fkey" FOREIGN KEY ("foodlist_id") REFERENCES "FoodList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Water" ADD CONSTRAINT "Water_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meditation" ADD CONSTRAINT "Meditation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mood" ADD CONSTRAINT "Mood_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
