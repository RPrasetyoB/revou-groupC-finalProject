import { Request, Response, NextFunction } from "express";
import { getToken, loggedUser } from "../utils/getToken";
import { getAllSteps, getTodaySteps, postTodaySteps } from "../services/steps";

//------ post daily steps ------
const createUpdateStepsDaily = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const decodedToken = getToken(req);
    const { userId } = loggedUser(decodedToken);
    const { stepsActual } = req.body;
    const result = await postTodaySteps(userId, stepsActual);
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


//------ get daily steps ------
const getStepsDaily = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const decodedToken = getToken(req);
    const { userId } = loggedUser(decodedToken);
    const result = await getTodaySteps(userId);
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


//------ get all steps history ------
const getAllStepsHistory = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const decodedToken = getToken(req);
    const { userId } = loggedUser(decodedToken);
    const result = await getAllSteps(userId);
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

export { createUpdateStepsDaily, getStepsDaily, getAllStepsHistory };
