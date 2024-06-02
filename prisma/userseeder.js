// Import PrismaClient
const { PrismaClient } = require('@prisma/client');

// Instantiate PrismaClient
const prisma = new PrismaClient();

// Define seeding function
async function seed() {
  try {
    // Sample data to seed
    const users = [
      { username: 'test', email: 'email@gmail.com',password: '$2a$10$BvypR.xagQLJm8cpVFWtBu1NW.7svGCQsgTIVCSVf54R2FOp5OhO2', role: 'user' },
      { username: 'admin', email: 'admin@gmail.com',password: '$2a$10$BvypR.xagQLJm8cpVFWtBu1NW.7svGCQsgTIVCSVf54R2FOp5OhO2', role: 'super admin' },
      // Add more data as needed
    ];

    // Insert users into database
    await prisma.user.createMany({
      data: users,
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
