/*
  Warnings:

  - You are about to drop the column `Deskripsi` on the `pelaporanAwal` table. All the data in the column will be lost.
  - Added the required column `deskripsi` to the `pelaporanAwal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pelaporanAwal" DROP COLUMN "Deskripsi",
ADD COLUMN     "deskripsi" TEXT NOT NULL;
