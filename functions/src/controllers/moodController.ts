import { Request, Response, NextFunction } from "express";
import { getToken, loggedUser } from "../utils/getToken";
import { getAllMood, getTodayMood, postTodayMood } from "../services/moodService";

const createUpdateMoodDaily = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const decodedToken = getToken(req);
    const { userId } = loggedUser(decodedToken);
    const { currentMood } = req.body;
    const result = await postTodayMood(userId, currentMood);
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

const getMoodDaily = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const decodedToken = getToken(req);
    const { userId } = loggedUser(decodedToken);
    const result = await getTodayMood(userId);
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

const getAllMoodHistory = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const decodedToken = getToken(req);
    const { userId } = loggedUser(decodedToken);
    const result = await getAllMood(userId);
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

export { createUpdateMoodDaily, getMoodDaily, getAllMoodHistory };
