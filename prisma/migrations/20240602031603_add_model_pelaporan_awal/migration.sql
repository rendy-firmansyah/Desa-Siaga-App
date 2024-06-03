-- CreateTable
CREATE TABLE "pelaporanAwal" (
    "id" SERIAL NOT NULL,
    "jenisBencana" TEXT NOT NULL,
    "waktuKejadian" TIMESTAMP(3) NOT NULL,
    "Deskripsi" TEXT NOT NULL,
    "lokasi" TEXT NOT NULL,
    "desa_id" INTEGER NOT NULL,
    "jumlahPendudukTerancam" INTEGER NOT NULL,

    CONSTRAINT "pelaporanAwal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pelaporanAwal" ADD CONSTRAINT "pelaporanAwal_desa_id_fkey" FOREIGN KEY ("desa_id") REFERENCES "desa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
