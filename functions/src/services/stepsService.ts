import ErrorCatch from "../utils/errorCatch";
import { prisma } from "../config/db/db.connection";
import { endOfDay, startOfDay } from "date-fns";

const today = new Date();

// ------ create daily steps ------
const postTodaySteps = async (userId: number, stepsActual: number) => {
  try {
    const userSteps = await prisma.steps.findFirst({
      where: {
        userId: userId,
        createdAt: today
      },
    });
    if (!userSteps) {
      const newSteps = await prisma.steps.create({
        data: {
          userId: userId,
          stepsActual: stepsActual,
        },
      });
      return {
        success: true,
        message: "create daily steps consumption success",
        data: newSteps,
      };
    } else {
      const updateSteps = await prisma.steps.update({
        where: {
          id: userSteps.id,
          createdAt: today
        },
        data: {
            stepsActual: stepsActual,
        },
      });
      return {
        success: true,
        message: "update daily steps consumption success",
        data: updateSteps,
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


//------ get daily steps ------
const getTodaySteps = async ( userId: number ) => {
  try {
    const dailySteps = await prisma.steps.findFirst({
      where:{
        userId: userId,
        createdAt: today
      }
    })
    return {
      success: true,
      message: 'get daily steps success',
      data: dailySteps
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


//------ get all steps ------
const getAllSteps = async ( userId: number ) => {
  try {
    const allSteps = await prisma.steps.findMany({
      where:{
        userId: userId,
      }
    })
    return {
      success: true,
      message: 'get all steps track success',
      data: allSteps
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

export { postTodaySteps, getTodaySteps, getAllSteps }
