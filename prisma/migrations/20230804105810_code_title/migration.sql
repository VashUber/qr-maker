/*
  Warnings:

  - Added the required column `title` to the `Codes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Codes" ADD COLUMN     "title" TEXT NOT NULL;
