import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

const connectDB = async ()=> {
  return await prisma.$connect();
}

const disconnectDB = async ()=> {
  await prisma.$disconnect();
}


export const db = async ()=> {
  try {
    await connectDB();
    console.log("connected to database");
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await disconnectDB();
  }
}
