import { Request, Response, NextFunction } from "express";
import { getToken, loggedUser } from "../utils/getToken";
import { getTodayWater, postTodayWater } from "../services/waterService";

const createUpdateWaterDaily = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const decodedToken = getToken(req);
    const { userId } = loggedUser(decodedToken);
    const { waterActual } = req.body;
    const result = await postTodayWater(userId, waterActual);
    if (result.success) {
      return res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
};

const getWaterDaily = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const decodedToken = getToken(req);
    const { userId } = loggedUser(decodedToken);
    const result = await getTodayWater(userId);
    if (result.success) {
      return res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
};

const getAllWaterHistory = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const decodedToken = getToken(req);
    const { userId } = loggedUser(decodedToken);
    const result = await getTodayWater(userId);
    if (result.success) {
      return res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
};

export { createUpdateWaterDaily, getWaterDaily, getAllWaterHistory };
