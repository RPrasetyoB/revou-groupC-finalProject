import { NextFunction, Request, Response } from "express";
import { getToken, loggedUser } from "../utils/getToken";
import { caloriesCalculation, getCaloriesUser } from "../services/caloriesService";

//----- get user calories ------
const getCalories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const decodedToken = getToken(req)
        const { userId, username } = loggedUser(decodedToken)
        const result = await getCaloriesUser(userId, username)
        if(result.success) {
            return res.status(200).json({
                message: result.message,
                data: result.data
            })
        }
    } catch (error) {
        next(error)
    }
}


//------ create user calories ------
const createCalories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const decodedToken = getToken(req)
        const { userId } = loggedUser(decodedToken)
        const result = await caloriesCalculation(userId)
        if(result?.success) {
            return res.status(200).json({
                message: result.message,
                data: result.data
            })
        }
    } catch (error) {
        next(error)
    }

}

export { getCalories, createCalories }