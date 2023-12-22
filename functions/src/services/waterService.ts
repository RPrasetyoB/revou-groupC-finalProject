import ErrorCatch from "../utils/errorCatch";
import { prisma } from "../config/db/dbConnection";
import { endOfDay, startOfDay } from "date-fns";

const today = new Date();
const startOfToday = startOfDay(today);
const endOfToday = endOfDay(today);

// ------ create daily water ------
const postTodayWater = async (userId: number, waterActual: number) => {
  try {
    const userWater = await prisma.water.findFirst({
      where: {
        userId: userId,
        createdAt:{
          gte: startOfToday,
          lte: endOfToday
        }
      },
    });

    if (!userWater) {
      const newWater = await prisma.water.create({
        data: {
          userId: userId,
          waterActual: waterActual,
        },
      });

      return {
        success: true,
        message: "create daily water consumption success",
        data: newWater,
      };
    } else {
      const updateWater = await prisma.water.update({
        where: {
          id: userWater.id,
          createdAt:{
            gte: startOfToday,
            lte: endOfToday
          }
        },
        data: {
          waterActual: waterActual,
        },
      });

      return {
        success: true,
        message: "update daily water consumption success",
        data: updateWater,
      };
    }
  } catch (error: any) {
    throw new ErrorCatch({
      success: false,
      message: error.message,
      status: error.status || 500,
    });
  } finally {
    await prisma.$disconnect();
  }
};


//------ get daily water ------
const getTodayWater = async ( userId: number ) => {
  try {
    const dailyWater = await prisma.water.findFirst({
      where:{
        userId: userId,
        createdAt:{
          gte: startOfToday,
          lte: endOfToday
        }
      }
    })
    return {
      success: true,
      message: 'get daily water success',
      data: dailyWater
    }
  } catch (error: any) {
    throw new ErrorCatch({
      success: false,
      message: error.message,
      status: error.status || 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}


//------ get all water ------
const getAllWater = async ( userId: number ) => {
  try {
    const allWater = await prisma.water.findMany({
      where:{
        userId: userId,
      }
    })
    return {
      success: true,
      message: 'get all water track success',
      data: allWater
    }
  } catch (error: any) {
    throw new ErrorCatch({
      success: false,
      message: error.message,
      status: error.status || 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}

export { postTodayWater, getTodayWater, getAllWater }
