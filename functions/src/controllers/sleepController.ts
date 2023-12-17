import { Request, Response, NextFunction } from "express";
import { getToken, loggedUser } from "../utils/getToken";
import { getTodaySleep, postTodaySleep } from "../services/sleep";

//------ post daily sleep ------
const createUpdateSleepDaily = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const decodedToken = getToken(req);
    const { userId } = loggedUser(decodedToken);
    const parseDateTimeString = (dateTimeString: string): Date => {
        const [datePart, timePart] = dateTimeString.split(' ');
        const [year, month, day] = datePart.split('-').map(Number);
        const [hours, minutes] = timePart.split(':').map(Number);
        const date = new Date(year, month - 1, day, hours, minutes, 0, 0);
        return date;
    };
    const sleepStart = parseDateTimeString(req.body.sleepStart);
    const sleepEnd = parseDateTimeString(req.body.sleepEnd);
    const result = await postTodaySleep(userId, sleepStart, sleepEnd);
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


//------ get daily sleep ------
const getSleepDaily = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const decodedToken = getToken(req);
    const { userId } = loggedUser(decodedToken);
    const result = await getTodaySleep(userId);
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


//------ get all sleep history ------
const getAllSleepHistory = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const decodedToken = getToken(req);
    const { userId } = loggedUser(decodedToken);
    const result = await getTodaySleep(userId);
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

export { createUpdateSleepDaily, getSleepDaily, getAllSleepHistory };
