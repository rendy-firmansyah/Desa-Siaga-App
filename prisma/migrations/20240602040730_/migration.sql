-- AlterTable
ALTER TABLE "pelaporanAwal" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "korbanMeninggal" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "jenisKelamin" TEXT NOT NULL,
    "usia" INTEGER NOT NULL,
    "tempatMeninggal" TEXT NOT NULL,
    "penyebab" TEXT NOT NULL,
    "pelaporan_id" INTEGER NOT NULL,

    CONSTRAINT "korbanMeninggal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "korbanHilang" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "jenisKelamin" TEXT NOT NULL,
    "usia" INTEGER NOT NULL,
    "lokasiHilang" TEXT NOT NULL,
    "pelaporan_id" INTEGER NOT NULL,

    CONSTRAINT "korbanHilang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "korbanLuka" (
    "id" SERIAL NOT NULL,
    "namaFaskes" TEXT NOT NULL,
    "jenisRawat" TEXT NOT NULL,
    "lakiLaki" INTEGER NOT NULL,
    "wanita" INTEGER NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "pelaporan_id" INTEGER NOT NULL,

    CONSTRAINT "korbanLuka_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "korbanPengungsi" (
    "id" SERIAL NOT NULL,
    "Kabupaten" TEXT NOT NULL,
    "Desa" TEXT NOT NULL,
    "lokasi" TEXT NOT NULL,
    "gangguanAnak" TEXT NOT NULL,
    "gangguanDewasa" TEXT NOT NULL,
    "lakiLaki" INTEGER NOT NULL,
    "perempuan" INTEGER NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "kk" INTEGER NOT NULL,
    "pelaporan_id" INTEGER NOT NULL,

    CONSTRAINT "korbanPengungsi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "korbanMeninggal" ADD CONSTRAINT "korbanMeninggal_pelaporan_id_fkey" FOREIGN KEY ("pelaporan_id") REFERENCES "pelaporanAwal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "korbanHilang" ADD CONSTRAINT "korbanHilang_pelaporan_id_fkey" FOREIGN KEY ("pelaporan_id") REFERENCES "pelaporanAwal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "korbanLuka" ADD CONSTRAINT "korbanLuka_pelaporan_id_fkey" FOREIGN KEY ("pelaporan_id") REFERENCES "pelaporanAwal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "korbanPengungsi" ADD CONSTRAINT "korbanPengungsi_pelaporan_id_fkey" FOREIGN KEY ("pelaporan_id") REFERENCES "pelaporanAwal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
