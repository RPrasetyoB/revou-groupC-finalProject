import ErrorCatch from "../utils/errorCatch";
import { prisma } from "../config/db/db.connection";
import { endOfDay, startOfDay } from "date-fns";

const today = new Date();
const startOfToday = startOfDay(today);
const endOfToday = endOfDay(today);

// ------ create daily sleep ------
const postTodaySleep = async (userId: number, sleepStart: Date, sleepEnd: Date) => {
  try {
    const userSleep = await prisma.sleep.findFirst({
      where: {
        userId: userId,
        createdAt: {
          gte: startOfToday,
          lte: endOfToday,
        },
      },
    });
    const calculateSleepDuration = (start: Date, end: Date): number => {
        const diffInMilliseconds = end.getTime() - start.getTime();
        return Math.floor(diffInMilliseconds / (1000 * 60) / 60);
    };
    const sleepActual = calculateSleepDuration(sleepStart, sleepEnd)
    if (!userSleep) {
      const newSleep = await prisma.sleep.create({
        data: {
          userId: userId,
          sleepStart: sleepStart,
          sleepEnd: sleepEnd,
          sleepActual: sleepActual,
        },
      });
      return {
        success: true,
        message: "create daily sleep consumption success",
        data: newSleep,
      };
    } else {
      const updateSleep = await prisma.sleep.update({
        where: {
          id: userSleep.id,
          createdAt: {
            gte: startOfToday,
            lte: endOfToday,
          },
        },
        data: {
          sleepStart: sleepStart,
          sleepEnd: sleepEnd,
          sleepActual: sleepActual,
        },
      });
      return {
        success: true,
        message: "update daily sleep consumption success",
        data: updateSleep,
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


//------ get daily sleep ------
const getTodaySleep = async ( userId: number ) => {
  try {
    const dailySleep = await prisma.sleep.findFirst({
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
      message: 'get daily sleep success',
      data: dailySleep
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


//------ get all sleep ------
const getAllSleep = async ( userId: number ) => {
  try {
    const allSleep = await prisma.sleep.findMany({
      where:{
        userId: userId,
      }
    })
    return {
      success: true,
      message: 'get all sleep tracker success',
      data: allSleep
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

export { postTodaySleep, getTodaySleep, getAllSleep }
