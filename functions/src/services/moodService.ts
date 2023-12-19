import ErrorCatch from "../utils/errorCatch";
import { prisma } from "../config/db/db.connection";
import { endOfDay, startOfDay } from "date-fns";
import { Todaymood } from "../../prisma/generated/client";

const today = new Date();
const startOfToday = startOfDay(today);
const endOfToday = endOfDay(today);

// ------ create daily mood ------
const postTodayMood = async (userId: number, currentMood: Todaymood) => {
  try {
    const userMood = await prisma.mood.findFirst({
      where: {
        userId: userId,
        createdAt: {
          gte: startOfToday,
          lte: endOfToday,
        },
      },
    });

    if (!userMood) {
      const newMood = await prisma.mood.create({
        data: {
          userId: userId,
          currentMood: currentMood,
        },
      });

      return {
        success: true,
        message: "create daily mood success",
        data: newMood,
      };
    } else {
      const updateMood = await prisma.mood.update({
        where: {
          id: userMood.id,
          createdAt: {
            gte: startOfToday,
            lte: endOfToday,
          },
        },
        data: {
          currentMood: currentMood,
        },
      });

      return {
        success: true,
        message: "update daily mood success",
        data: updateMood,
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


//------ get daily mood ------
const getTodayMood = async ( userId: number ) => {
  try {
    const dailyMood = await prisma.mood.findFirst({
      where:{
        userId: userId,
        createdAt: {
          gte: startOfToday,
          lte: endOfToday
        }
      }
    })
    return {
      success: true,
      message: 'get daily mood success',
      data: dailyMood
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


//------ get all mood ------
const getAllMood = async ( userId: number ) => {
  try {
    const allMood = await prisma.mood.findMany({
      where:{
        userId: userId,
      }
    })
    return {
      success: true,
      message: 'get all mood track success',
      data: allMood
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

export { postTodayMood, getTodayMood, getAllMood }
