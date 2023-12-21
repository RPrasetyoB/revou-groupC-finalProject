import { Request, Response, NextFunction } from "express";
import { getToken, loggedUser } from "../utils/getToken";
import { getAllReport, getTodayReport, postTodayReport } from "../services/reportService";

//------ post daily report -------
const createUpdateReportDaily = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        const decodedToken = getToken(req);
        const { userId } = loggedUser(decodedToken);
        const result = await postTodayReport(userId);
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
}


//------ get daily report ------
const getReportDaily = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        const decodedToken = getToken(req);
        const { userId } = loggedUser(decodedToken);
        const result = await getTodayReport(userId);
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
}

const getReportHistory = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        const decodedToken = getToken(req);
        const { userId } = loggedUser(decodedToken);
        const result = await getAllReport(userId);
        if (result?.success) {
            return res.status(200).json({
            success: true,
            message: result.message,
            data: result.data,
            });
        }
    } catch (error) {
    next(error);
    }
}


export { createUpdateReportDaily, getReportDaily, getReportHistory }