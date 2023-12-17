import { NextFunction, Request, Response } from "express";
import { getToken, loggedUser } from "../utils/getToken";
import { deleteFoodConsumed, editFoodConsumed, getAllFoodConsumed, getFoodConsumed, postFoodConsumed } from "../services/foodConsumedService";

//----- create daily food consumed -----
const createDailyFoodConsumed = async ( req: Request, res: Response, next: NextFunction) => {
  try {
    const decodedToken = getToken(req);
    const { userId } = loggedUser(decodedToken);
    const { foodNames }: FoodConsumedRequest = req.body;
    const result = await postFoodConsumed(userId, { foodNames });
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
    const result = await getFoodConsumed(userId);
    if (result.success) {
      return res.status(200).json({
        message: result.message,
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
};


//----- get daily food consumed -----
const getAllFoodConsumedHistory = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const decodedToken = getToken(req);
    const { userId } = loggedUser(decodedToken);
    const result = await getAllFoodConsumed(userId);
    if (result.success) {
      return res.status(200).json({
        message: result.message,
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
    const result = await editFoodConsumed(userId, {foodNames}, uniqueId);
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


//----- delete food consumed ------
const deleteDailyFoodConsumed = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const decodedToken = getToken(req);
    const { userId } = loggedUser(decodedToken);
    const uniqueId = req.params.uniqueId
    const result = await deleteFoodConsumed(userId, uniqueId);
    if (result.success){
      return res.status(200).json({
        message: "delete food consumed success",
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
}

export { createDailyFoodConsumed, getDailyFoodConsumed, getAllFoodConsumedHistory, updateDailyFoodConsumed, deleteDailyFoodConsumed };
