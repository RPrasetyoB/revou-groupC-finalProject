import ErrorCatch from "../utils/errorCatch";
import { prisma } from "../config/db/db.connection";
import { endOfDay, startOfDay } from "date-fns";

const today = new Date();
const startOfToday = startOfDay(today);
const endOfToday = endOfDay(today);

//----- post food calories ------
const postCaloriesCalculation = async (userId?: number) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user || user?.weight == null || user?.height == null || user?.age == null || user?.activeness == null) {
      throw new ErrorCatch({
        success: false,
        message: "Cannot calculate calories, User profile data required. Please input all user profile data",
        status: 422,
      });
    }

    const getBmr = () => {
      const manBmr =
        66.47 + 13.75 * user?.weight! + 5.003 * user?.height! - 6.755 * user?.age!;
      const womanBmr =
        655.1 + 9.563 * user?.weight! + 1.85 * user?.height! - 4.676 * user?.age!;
      if (user?.gender == "man") {
        return manBmr;
      } else {
        return womanBmr;
      }
    };
    const bmr = getBmr();
    const getAmr = () => {
      const light = bmr * 1.25;
      const moderate = bmr * 1.5;
      const active = bmr * 1.75;
      if (user?.activeness == "light") {
        return light;
      } else if (user?.activeness == "moderate") {
        return moderate;
      } else {
        return active;
      }
    };
    const amr = getAmr();
    const bmi = user?.weight! / ((user?.height! * 0.01) ** 2);
    const getTarget = () => {
      const skinny = amr + 300;
      const over = amr - 300;
      if (bmi <= 18.5) {
        return skinny;
      } else if (bmi >= 18.5 && bmi <= 25) {
        return amr;
      } else {
        return over;
      }
    };
    const target = getTarget();
    const foodConsumed = await prisma.foodConsumed.findMany({
      where: {
        userId: userId,
        createdAt:{
          gte: startOfToday,
          lte: endOfToday
        } 
      },
    }) as { calories: number }[];

  let totalActualCalories = 0;
    if (foodConsumed.length > 0) {
      totalActualCalories = foodConsumed.reduce((total, item) => total + (item.calories ?? 0), 0);
    }

    // Check if there are existing calories records for today
    const existingCalories = await prisma.calories.findMany({
      where: {
        userId: userId,
        createdAt: {
          gte: startOfToday,
          lte: endOfToday
        } 
      },
    }) as { id: number }[];

    if (existingCalories.length > 0) {
      const updatedCalories = await prisma.calories.update({
        where: { id: existingCalories[0].id },
        data: {
          actual: totalActualCalories,
        },
      });
      return {
        success: true,
        message: "success update calories",
        data: updatedCalories,
      };
    } else {
      const createFood = await prisma.calories.create({
        data: {
          userId: userId,
          amr: amr,
          bmi: bmi,
          actual: totalActualCalories,
          target: target,
        },
      });
      return {
        success: true,
        message: "success post calories",
        data: createFood,
      };
    }
  } catch (error: any) {
    console.error('Error in caloriesCalculation:', error);
    throw new ErrorCatch({
      success: false,
      message: error.message,
      status: error.status || 500,
    });
  } finally {
    await prisma.$disconnect();
  }
};


//------ Get food calories ------
const getCaloriesUser = async (userId: number, username?: string) => {
  try {
    const foodConsumed = await prisma.foodConsumed.findMany({
      where: {
        userId: userId,
        createdAt:{
          gte: startOfToday,
          lte: endOfToday
        } 
      },
    }) as { calories: number }[];

  let totalActualCalories = 0;
    if (foodConsumed.length > 0) {
      totalActualCalories = foodConsumed.reduce((total, item) => total + (item.calories ?? 0), 0);
    }

    const existingCalories = await prisma.calories.findMany({
      where: {
        userId: userId,
        createdAt: {
          gte: startOfToday,
          lte: endOfToday
        } 
      },
    }) as { id: number }[];

    await prisma.calories.update({
      where: { id: existingCalories[0].id },
      data: {
        actual: totalActualCalories,
      },
    });
      
    const user = await prisma.user.findFirst({
      where: { id: userId,
        createdAt:{
          gte: startOfToday,
          lte: endOfToday
        }
      },
      include: {
        food: true,
      },
    });
    if (!user) {
      throw new ErrorCatch({
        success: false,
        message: "User not found",
        status: 404,
      });
    }
    return {
      success: true,
      message: "success get calories data",
      data: user.food,
    };
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


//------ Get food calories ------
const getAllCalories = async ( userId: number ) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        food: true,
      },
    })
    return {
      success: true,
      message: "success get all calories data",
      data: user?.food,
    };
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

export { getCaloriesUser, getAllCalories, postCaloriesCalculation };
