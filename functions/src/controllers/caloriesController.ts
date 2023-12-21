import { NextFunction, Request, Response } from "express";
import { getToken, loggedUser } from "../utils/getToken";
import { getAllCalories, getCaloriesUser, postCaloriesCalculation } from "../services/caloriesService";

//------ create user calories ------
const createCalories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const decodedToken = getToken(req)
        const { userId } = loggedUser(decodedToken)
        const result = await postCaloriesCalculation(userId)
        if(result?.success) {
            return res.status(200).json({
                success: true,
                message: result.message,
                data: result.data
            })
        }
    } catch (error) {
        next(error)
    }

}


//----- get user calories ------
const getCalories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const decodedToken = getToken(req)
        const { userId, username } = loggedUser(decodedToken)
        const result = await getCaloriesUser(userId)
        if(result.success) {
            return res.status(200).json({
                success: true,
                message: result.message,
                data: result.data
            })
        }
    } catch (error) {
        next(error)
    }
}


//----- get all user calories ------
const getAllCaloriesHistory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const decodedToken = getToken(req)
        const { userId } = loggedUser(decodedToken)
        const result = await getAllCalories(userId)
        if(result.success) {
            return res.status(200).json({
                success: true,
                message: result.message,
                data: result.data
            })
        }
    } catch (error) {
        next(error)
    }
}

export { getCalories, getAllCaloriesHistory, createCalories }