// prisma/seed.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create some kecamatans
  const kecamatan1 = await prisma.kecamatan.create({
    data: {
      nama: 'Kecamatan A',
      alamat: 'Jl. Raya No. 1',
      desa: {
        create: [
          {
            nama: 'Desa A1',
            alamat: 'Jl. Desa No. 1',
            telepon: '08123456789',
            website: 'http://desaA1.com',
            email: 'desaA1@mail.com',
            luas: 12.34,
            letak_dan_batas: 'Batas utara, selatan, timur, barat',
            banyak_dusun: 5,
            jumlah_penduduk: 1500,
            akses_komunikasi: 'Jaringan 4G',
            akses_transportasi: 'Jalan aspal',
            nama_responden: 'Pak A1',
            nip_responden: '1234567890',
            jabatan_responden: 'Kepala Desa',
            nomor_hp_responden: '08123456789',
          },
          {
            nama: 'Desa A2',
            alamat: 'Jl. Desa No. 2',
            telepon: '08123456780',
            website: 'http://desaA2.com',
            email: 'desaA2@mail.com',
            luas: 23.45,
            letak_dan_batas: 'Batas utara, selatan, timur, barat',
            banyak_dusun: 3,
            jumlah_penduduk: 1000,
            akses_komunikasi: 'Jaringan 4G',
            akses_transportasi: 'Jalan aspal',
            nama_responden: 'Pak A2',
            nip_responden: '0987654321',
            jabatan_responden: 'Kepala Desa',
            nomor_hp_responden: '08123456780',
          }
        ]
      }
    }
  });

  const kecamatan2 = await prisma.kecamatan.create({
    data: {
      nama: 'Kecamatan B',
      alamat: 'Jl. Raya No. 2',
      desa: {
        create: [
          {
            nama: 'Desa B1',
            alamat: 'Jl. Desa No. 3',
            telepon: '08123456781',
            website: 'http://desaB1.com',
            email: 'desaB1@mail.com',
            luas: 34.56,
            letak_dan_batas: 'Batas utara, selatan, timur, barat',
            banyak_dusun: 4,
            jumlah_penduduk: 2000,
            akses_komunikasi: 'Jaringan 4G',
            akses_transportasi: 'Jalan aspal',
            nama_responden: 'Pak B1',
            nip_responden: '1234567891',
            jabatan_responden: 'Kepala Desa',
            nomor_hp_responden: '08123456781',
          }
        ]
      }
    }
  });

  console.log('Seeding completed!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
