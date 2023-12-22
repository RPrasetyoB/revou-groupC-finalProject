import ErrorCatch from "../utils/errorCatch";
import { prisma } from "../config/db/dbConnection";
import { endOfDay, startOfDay, subDays } from "date-fns";
import { getTodaySleep } from "./sleepService";
import { getTodaySteps } from "./stepsService";
import { getTodayWater } from "./waterService";
import { getTodayMeditation } from "./meditationService";
import { getTodayMood } from "./moodService";

const today = new Date();
const startOfToday = startOfDay(today);
const endOfToday = endOfDay(today);

const getCalories = async (userId: number) => {
  const result = await prisma.calories.findFirst({
    where: {
      userId: userId,
      createdAt: {
        gte: startOfToday,
        lte: endOfToday,
      },
    },
  });
  if (!result) {
    return null;
  } else {
    return result;
  }
};

const getSleep = async (userId: number) => {
  const result = await getTodaySleep(userId);
  if (!result) {
    return null;
  } else {
    return result.data;
  }
};

const getStep = async (userId: number) => {
  const result = await getTodaySteps(userId);
  if (!result) {
    return null;
  } else {
    return result.data;
  }
};

const getWater = async (userId: number) => {
  const result = await getTodayWater(userId);
  if (!result) {
    return null;
  } else {
    return result.data;
  }
};

const getMeditation = async (userId: number) => {
  const result = await getTodayMeditation(userId);
  if (!result) {
    return null;
  } else {
    return result.data;
  }
};

const getMood = async (userId: number) => {
  const result = await getTodayMood(userId);
  if (!result) {
    return null;
  } else {
    return result.data;
  }
};

//------ post report ------
const postTodayReport = async (userId: number) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new ErrorCatch({
        success: false,
        message: "User not found",
        status: 404,
      });
    }

    const calories = await getCalories(userId);
    const sleep = await getSleep(userId);
    const steps = await getStep(userId);
    const water = await getWater(userId);
    const meditation = await getMeditation(userId);
    const mood = await getMood(userId);
    const calculatePercentage = (actual: number, target: number) => {
      if(actual > target){
        return 100;
      }
      return target !== 0 ? (actual / target) * 100 : 0 || null;
    };
    const calculateAveragePercentage = (values: (number | null)[]): number => {
      const filteredValues = values.filter(
        (value) => typeof value === "number" && value !== null
      );
      console.log("values:", values);
      console.log("filteredValues:", filteredValues);
      if (filteredValues.length === 0) {
        return 0;
      }
      const sum = filteredValues.reduce((acc, value) => acc! + value!, 0);
      const average = sum! / filteredValues.length;
      return parseFloat(average.toFixed(2));
    };

    const todayReport = await prisma.report.findFirst({
      where: {
        userId: userId,
        date: {
          gte: startOfToday,
          lte: endOfToday,
        },
      },
    });
    const data: any = {
      foodCaloriesActual: calories?.actual || 0,
      foodCaloriesTarget: calories?.target || 0,
      sleepActual: sleep?.sleepActual || 0,
      sleepTarget: sleep?.target || 7,
      stepsActual: steps?.stepsActual || 0,
      stepsTarget: steps?.target || 8000,
      waterActual: water?.waterActual || 0,
      waterTarget: water?.target || 8,
      meditationActual: meditation?.meditationActual || 0,
      meditationTarget: meditation?.target || 15,
      mood: mood?.currentMood || "netral",
      category: calculateAveragePercentage([
        calculatePercentage(calories?.actual || 0, calories?.target || 0),
        calculatePercentage(sleep?.sleepActual || 0, sleep?.target || 0),
        calculatePercentage(steps?.stepsActual || 0, steps?.target || 0),
        calculatePercentage(water?.waterActual || 0, water?.target || 0),
        calculatePercentage(
          meditation?.meditationActual || 0,
          meditation?.target || 0
        ),
      ]),
      user: { connect: { id: userId } },
    };

    if (!todayReport) {
      const createReport = await prisma.report.create({
        data: data,
      });
      return {
        success: true,
        message: "success create daily report",
        data: createReport,
      };
    } else {
      const updateReport = await prisma.report.update({
        where: {
          id: todayReport.id,
        },
        data: data,
      });
      return {
        success: true,
        message: "success update daily report",
        data: updateReport,
      };
    }
  } catch (error: any) {
    console.error("Error in caloriesCalculation:", error);
    throw new ErrorCatch({
      success: false,
      message: error.message,
      status: error.status || 500,
    });
  } finally {
    await prisma.$disconnect();
  }
};

//------ get today report ------
const getTodayReport = async (userId: number) => {
  try {
    const getReport = await prisma.report.findFirst({
      where: {
        userId: userId,
        date: {
          gte: startOfToday,
          lte: endOfToday,
        },
      },
    });
    if (getReport) {
      return {
        success: true,
        message: "success get daily report",
        data: getReport,
      };
    } else {
      throw new ErrorCatch({
        success: false,
        message: "Daily report not create yet",
        status: 404,
      });
    }
  } catch (error: any) {
    console.error("Error in caloriesCalculation:", error);
    throw new ErrorCatch({
      success: false,
      message: error.message,
      status: error.status || 500,
    });
  } finally {
    await prisma.$disconnect();
  }
};

//------ get report history ------
const getAllReport = async (userId: number) => {
  try {
    const sevenDaysAgo = subDays(new Date(), 7);
    const getReport = await prisma.report.findMany({
      where: {
        userId: userId,
        date: {
          gte: sevenDaysAgo
        }
      },
    });
    if(getReport) {
      return {
        success: true,
        message: "success get report history last 7 days",
        data: getReport,
      };
    }
  } catch (error: any) {
    console.error("Error in caloriesCalculation:", error);
    throw new ErrorCatch({
      success: false,
      message: error.message,
      status: error.status || 500,
    });
  } finally {
    await prisma.$disconnect();
  }
};

export { postTodayReport, getTodayReport, getAllReport };
