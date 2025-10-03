/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Blog` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uniqueTitle]` on the table `Blog` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."Blog" ADD COLUMN     "uniqueTitle" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Blog_title_key" ON "public"."Blog"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_uniqueTitle_key" ON "public"."Blog"("uniqueTitle");
