/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[liveLink]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[repoLink]` on the table `Project` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Project_title_key" ON "public"."Project"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Project_liveLink_key" ON "public"."Project"("liveLink");

-- CreateIndex
CREATE UNIQUE INDEX "Project_repoLink_key" ON "public"."Project"("repoLink");
