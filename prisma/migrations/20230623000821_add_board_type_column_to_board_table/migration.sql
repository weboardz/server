/*
  Warnings:

  - Added the required column `type` to the `Board` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BoardType" AS ENUM ('private', 'public');

-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "type" "BoardType" NOT NULL;
