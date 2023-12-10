import ErrorCatch from "../utils/errorCatch";
import { prisma } from "../config/db/db.connection";
import { endOfDay, startOfDay, subSeconds } from "date-fns";
import { v4 as uuidv4 } from "uuid";

interface InputFood {
  foodName: string;
}

interface MultipleFoodInput {
  foodNames: string[];
}

type FoodInput = InputFood | MultipleFoodInput;

const today = new Date();
const startOfToday = startOfDay(today);
const endOfToday = endOfDay(today);

//----- create foodConsumed ------
const foodConsumed = async (userId: number, input: FoodInput) => {
  try {
    await prisma.$connect;
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new ErrorCatch({
        success: false,
        message: "Unauthorized! please login",
        status: 400,
      });
    }

    const foodNames = "foodNames" in input ? input.foodNames : [input.foodName];
    const filteredFoodNames = foodNames.filter(Boolean);
    const foodListEntries = await prisma.foodList.findMany({
      where: { foodName: { in: filteredFoodNames } },
      select: { foodName: true, calories: true },
    });

    if (foodListEntries.length !== filteredFoodNames.length) {
      throw new ErrorCatch({
        success: false,
        message: "Some food items not found in the FoodList",
        status: 404,
      });
    }

    const uniqueId = uuidv4();

    await prisma.foodConsumed.createMany({
      data: foodListEntries.map((entry) => ({
        userId: userId,
        foodName: entry.foodName,
        calories: entry.calories,
        uniqueId: uniqueId,
      })),
    });

    const createdRecords = await prisma.foodConsumed.findMany({
      where: {
        userId: userId,
        createdAt: {
          gte: subSeconds(new Date(), 2),
        },
      },
    });

    return {
      success: true,
      message: "Successfully recorded consumed food",
      data: createdRecords,
    };
  } catch (error: any) {
    throw new ErrorCatch({
      success: false,
      message: error.message,
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
};

//----- get food consumed -----
const getFood = async (userId: number) => {
  try {
    await prisma.$connect;
    const foodConsumed = await prisma.foodConsumed.findMany({
      where: {
        userId: userId,
        createdAt: {
          gte: startOfToday,
          lte: endOfToday,
        },
      },
    });

    return {
      success: true,
      message: "Successfully recorded consumed food",
      data: foodConsumed,
    };
  } catch (error: any) {
    throw new ErrorCatch({
      success: false,
      message: error.message,
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
};

//----- update food consumed -----
const editFood = async (userId: number, input: FoodInput, uniqueId : string) => {
  try {
    await prisma.$connect();

    const getFood = await prisma.foodConsumed.findMany({
      where: {
        userId: userId,
        uniqueId: uniqueId,
      },
    });

    if (!getFood || getFood.length === 0) {
      throw new ErrorCatch({
        success: false,
        message: "Food consumed not found",
        status: 400,
      });
    }
    const foodNames = "foodNames" in input ? input.foodNames : [input.foodName];
    const filteredFoodNames = foodNames.filter(Boolean);
    const foodListEntries = await prisma.foodList.findMany({
      where: { foodName: { in: filteredFoodNames } },
      select: { foodName: true, calories: true },
    });

    if (foodListEntries.length !== filteredFoodNames.length) {
      throw new ErrorCatch({
        success: false,
        message: "Some food items not found in the FoodList",
        status: 404,
      });
    }

    const updatePromises = getFood.map(async (record, index) => {
      const entry = foodListEntries[index];
      return prisma.foodConsumed.update({
        where: {
          id: record.id,
        },
        data: {
          foodName: entry.foodName,
          calories: entry.calories,
        },
      });
    });
    
    const updatedRecords = await Promise.all(updatePromises);

    return {
      success: true,
      message: "Successfully updated consumed food",
      data: updatedRecords,
    };
  } catch (error: any) {
    throw new ErrorCatch({
      success: false,
      message: error.message,
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
};

export { foodConsumed, getFood, editFood };
