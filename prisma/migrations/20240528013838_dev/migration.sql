-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "role" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kecamatan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,

    CONSTRAINT "kecamatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "desa" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "telepon" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "luas" DOUBLE PRECISION NOT NULL,
    "letak_dan_batas" TEXT NOT NULL,
    "banyak_dusun" INTEGER NOT NULL,
    "jumlah_penduduk" INTEGER NOT NULL,
    "akses_komunikasi" TEXT NOT NULL,
    "akses_transportasi" TEXT NOT NULL,
    "nama_responden" TEXT NOT NULL,
    "nip_responden" TEXT NOT NULL,
    "jabatan_responden" TEXT NOT NULL,
    "nomor_hp_responden" TEXT NOT NULL,
    "kecamatan_id" INTEGER NOT NULL,

    CONSTRAINT "desa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "desa" ADD CONSTRAINT "desa_kecamatan_id_fkey" FOREIGN KEY ("kecamatan_id") REFERENCES "kecamatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
