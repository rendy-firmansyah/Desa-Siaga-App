// Import PrismaClient
const { PrismaClient } = require('@prisma/client');

// Instantiate PrismaClient
const prisma = new PrismaClient();

// Define seeding function
async function seed() {
  try {
    // Sample data to seed for 'Berita'
    const beritaItems = [
      {
        judul: "Berita Desa 1",
        deskripsi: "Deskripsi lengkap untuk berita desa 1",
        gambar: "https://example.com/gambar1.jpg",
        desa_id: 1, // Ensure that these 'desa_id' values exist in your database
        created_at: new Date(),
      },
      {
        judul: "Berita Desa 2",
        deskripsi: "Deskripsi lengkap untuk berita desa 2",
        gambar: "https://example.com/gambar2.jpg",
        desa_id: 2,
        created_at: new Date(),
      },
      {
        judul: "Berita Desa 3",
        deskripsi: "Deskripsi lengkap untuk berita desa 3",
        gambar: "https://example.com/gambar3.jpg",
        desa_id: 3,
        created_at: new Date(),
      }
    ];

    // Insert 'Berita' items into database
    await prisma.berita.createMany({
      data: beritaItems,
    });

    console.log('Seeding completed!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    // Disconnect PrismaClient
    await prisma.$disconnect();
  }
}

// Call seeding function
seed();
