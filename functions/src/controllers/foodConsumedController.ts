import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_Sign } from "../config/auth/jwt";
import { getToken, loggedUser } from "../utils/getToken";
import { foodConsumed, getFood, editFood } from "../services/foodConsumedService";

interface FoodConsumedRequest {
  foodNames: string[];
}

//----- create daily food consumed -----
const createDailyFoodConsumed = async ( req: Request, res: Response, next: NextFunction) => {
  try {
    const decodedToken = getToken(req);
    const { userId } = loggedUser(decodedToken);
    const { foodNames }: FoodConsumedRequest = req.body;
    const result = await foodConsumed(userId, { foodNames });
        if (result.success) {
        return res.status(200).json({
            success: true,
            message: "Add new foodConsumed success",
            data: result.data,
        });
        }
  } catch (error) {
    next(error);
  }
};

//----- get daily food consumed -----
const getDailyFoodConsumed = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const decodedToken = getToken(req);
    const { userId } = loggedUser(decodedToken);
    const result = await getFood(userId);
    if (result.success) {
      return res.status(200).json({
        message: "get daily foodCosumed success",
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
};

//----- update food consumed -----
const updateDailyFoodConsumed = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const decodedToken = getToken(req);
    const { userId } = loggedUser(decodedToken);
    const { foodNames }: FoodConsumedRequest = req.body;
    const uniqueId = req.params.uniqueId
    const result = await editFood(userId, {foodNames}, uniqueId);
    if (result.success){
      return res.status(200).json({
        message: "update daily foodCosumed success",
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
}

export { createDailyFoodConsumed, getDailyFoodConsumed, updateDailyFoodConsumed };