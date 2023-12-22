import ErrorCatch from "../utils/errorCatch";
import { prisma } from "../config/db/dbConnection";
import { endOfDay, startOfDay } from "date-fns";

const today = new Date();
const startOfToday = startOfDay(today);
const endOfToday = endOfDay(today);

// ------ create daily meditation ------
const postTodayMeditation = async (userId: number, meditationActual: number) => {
  try {
    const userMeditation = await prisma.meditation.findFirst({
      where: {
        userId: userId,
        createdAt:{
          gte: startOfToday,
          lte: endOfToday
        }
      },
    });

    if (!userMeditation) {
      const newMeditation = await prisma.meditation.create({
        data: {
          userId: userId,
          meditationActual: meditationActual,
        },
      });

      return {
        success: true,
        message: "create daily meditation consumption success",
        data: newMeditation,
      };
    } else {
      const updateMeditation = await prisma.meditation.update({
        where: {
          id: userMeditation.id,
          createdAt:{
            gte: startOfToday,
            lte: endOfToday
          }
        },
        data: {
            meditationActual: meditationActual,
        },
      });

      return {
        success: true,
        message: "update daily meditation consumption success",
        data: updateMeditation,
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


//------ get daily meditation ------
const getTodayMeditation = async ( userId: number ) => {
  try {
    const dailyMeditation = await prisma.meditation.findFirst({
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
      message: 'get daily meditation success',
      data: dailyMeditation
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


//------ get all Meditation ------
const getAllMeditation = async ( userId: number ) => {
  try {
    const allMeditation = await prisma.meditation.findMany({
      where:{
        userId: userId,
      }
    })
    return {
      success: true,
      message: 'get all meditation tracker success',
      data: allMeditation
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

export { postTodayMeditation, getTodayMeditation, getAllMeditation }
