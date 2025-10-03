/*
  Warnings:

  - Added the required column `isFeatured` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Blog" ADD COLUMN     "isFeatured" BOOLEAN NOT NULL;
