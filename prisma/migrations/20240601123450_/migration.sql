-- CreateTable
CREATE TABLE "berita" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "gambar" TEXT NOT NULL,
    "desa_id" INTEGER NOT NULL,

    CONSTRAINT "berita_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "berita" ADD CONSTRAINT "berita_desa_id_fkey" FOREIGN KEY ("desa_id") REFERENCES "desa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
