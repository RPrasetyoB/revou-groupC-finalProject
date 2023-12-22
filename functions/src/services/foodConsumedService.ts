import ErrorCatch from "../utils/errorCatch";
import { prisma } from "../config/db/db.connection";
import { subSeconds } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import { endOfDay, startOfDay } from "date-fns";

const today = new Date();
const startOfToday = startOfDay(today);
const endOfToday = endOfDay(today);

//----- create foodConsumed ------
const postFoodConsumed = async (userId: number, input: FoodInput) => {
  try {
    const foodNames = "foodNames" in input ? input.foodNames : [input.foodName];
    const filteredFoodNames = foodNames.filter(Boolean);
    const foodListEntries = await prisma.foodList.findMany({
      where: { foodName: { in: filteredFoodNames } },
      select: { foodName: true, calories: true },
    });

    if (foodListEntries.length !== filteredFoodNames.length) {
      throw new ErrorCatch({
        status: 404,
        success: false,
        message: "Some food items not found in the FoodList",
      });
    }
    const uniqueId = uuidv4();
    await prisma.foodConsumed.createMany({
      data: foodListEntries.map((entry: FoodListEntry) => ({
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
const getFoodConsumed = async (userId: number) => {
  try {
    const foodConsumed = await prisma.foodConsumed.findMany({
      where: {
        userId: userId,
        createdAt:{
          gte: startOfToday,
          lte: endOfToday
        }
      },
    });
    return {
      success: true,
      message: "Successfully get daily food consumed",
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


//----- get all food consumed -----
const getAllFoodConsumed = async (userId: number) => {
  try {
    const allFoodConsumed = await prisma.foodConsumed.findMany({
      where: {
        userId: userId
      }
    });
    return {
      success: true,
      message: "Successfully get food consumed history",
      data: allFoodConsumed,
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
const editFoodConsumed = async (userId: number, input: FoodInput, uniqueId : string) => {
  try {
    const user = await prisma.foodConsumed.findMany({
      where: {
        userId: userId,
      },
    });

    if (!user) {
      throw new ErrorCatch({
        success: false,
        message: "Unauthorized, please re-login",
        status: 403,
      });
    }

    const getFood = await prisma.foodConsumed.findMany({
      where: {
        userId: userId,
        uniqueId: uniqueId,
      },
    });
    if (!getFood || getFood.length === 0) {
      throw new ErrorCatch({
        success: false,
        message: "Food consumed not found or Unauthorized to update",
        status: 404,
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
    const updatePromises = getFood.map(async (record : RecordType, index: number) => {
      const entry : EntryType = foodListEntries[index];
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


//----- delete food consumed ------
const deleteFoodConsumed = async (userId: number, uniqueId : string) => {
  try {
    const user = await prisma.foodConsumed.findMany({
      where: {
        userId: userId,
      },
    });

    if (!user) {
      throw new ErrorCatch({
        success: false,
        message: "Unauthorized, please re-login",
        status: 403,
      });
    }

    const getFood = await prisma.foodConsumed.findMany({
      where: {
        userId: userId,
        uniqueId: uniqueId,
      },
    });
    if (!getFood || getFood.length === 0) {
      throw new ErrorCatch({
        success: false,
        message: "Food consumed not found or Unauthorized to delete",
        status: 404,
      });
    }    
    
    await prisma.foodConsumed.deleteMany({
      where : {
        userId: userId,
        uniqueId: uniqueId
      }
    })
    return {
      success: true,
      message: "Successfully updated consumed food",
      data: getFood,
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
}


export { postFoodConsumed, getFoodConsumed, getAllFoodConsumed, editFoodConsumed, deleteFoodConsumed };
