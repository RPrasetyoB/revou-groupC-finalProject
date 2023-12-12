"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.caloriesCalculation = exports.getCaloriesUser = void 0;
const errorCatch_1 = __importDefault(require("../utils/errorCatch"));
const db_connection_1 = require("../config/db/db.connection");
const date_fns_1 = require("date-fns");
//------ Get food calories ------
const getCaloriesUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!username) {
            throw new errorCatch_1.default({
                success: false,
                message: "Unauthorized! please login",
                status: 400,
            });
        }
        const user = yield db_connection_1.prisma.user.findUnique({
            where: { username },
            include: {
                food: true,
            },
        });
        if (!user) {
            throw new errorCatch_1.default({
                success: false,
                message: "User not found",
                status: 404,
            });
        }
        return {
            success: true,
            message: "success get calories data",
            data: user.food,
        };
    }
    catch (error) {
        throw new errorCatch_1.default({
            success: false,
            message: error.message,
            status: error.status || 500,
        });
    }
    finally {
        yield db_connection_1.prisma.$disconnect();
    }
});
exports.getCaloriesUser = getCaloriesUser;
//----- post food calories ------
const caloriesCalculation = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!userId) {
            throw new errorCatch_1.default({
                success: false,
                message: "Unauthorized! please login",
                status: 400,
            });
        }
        const user = yield db_connection_1.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user || (user === null || user === void 0 ? void 0 : user.weight) == null || (user === null || user === void 0 ? void 0 : user.height) == null || (user === null || user === void 0 ? void 0 : user.age) == null || (user === null || user === void 0 ? void 0 : user.activeness) == null) {
            throw new errorCatch_1.default({
                success: false,
                message: "Cannot calculate calories, User profile data required. Please input all user profile data",
                status: 422,
            });
        }
        const getBmr = () => {
            const manBmr = 66.47 + 13.75 * (user === null || user === void 0 ? void 0 : user.weight) + 5.003 * (user === null || user === void 0 ? void 0 : user.height) - 6.755 * (user === null || user === void 0 ? void 0 : user.age);
            const womanBmr = 655.1 + 9.563 * (user === null || user === void 0 ? void 0 : user.weight) + 1.85 * (user === null || user === void 0 ? void 0 : user.height) - 4.676 * (user === null || user === void 0 ? void 0 : user.age);
            if ((user === null || user === void 0 ? void 0 : user.gender) == "man") {
                return manBmr;
            }
            else {
                return womanBmr;
            }
        };
        const bmr = getBmr();
        const getAmr = () => {
            const light = bmr * 1.25;
            const moderate = bmr * 1.5;
            const active = bmr * 1.75;
            if ((user === null || user === void 0 ? void 0 : user.activeness) == "light") {
                return light;
            }
            else if ((user === null || user === void 0 ? void 0 : user.activeness) == "moderate") {
                return moderate;
            }
            else {
                return active;
            }
        };
        const amr = getAmr();
        const bmi = (user === null || user === void 0 ? void 0 : user.weight) / (((user === null || user === void 0 ? void 0 : user.height) * 0.01) ** 2);
        const getTarget = () => {
            const skinny = amr + 300;
            const over = amr - 300;
            if (bmi <= 18.5) {
                return skinny;
            }
            else if (bmi >= 18.5 && bmi <= 25) {
                return amr;
            }
            else {
                return over;
            }
        };
        const target = getTarget();
        const today = new Date();
        const startOfToday = (0, date_fns_1.startOfDay)(today);
        const endOfToday = (0, date_fns_1.endOfDay)(today);
        const foodConsumed = yield db_connection_1.prisma.foodConsumed.findMany({
            where: {
                userId: userId,
                createdAt: {
                    gte: startOfToday,
                    lte: endOfToday
                }
            },
        });
        let totalActualCalories = 0;
        if (foodConsumed.length > 0) {
            totalActualCalories = foodConsumed.reduce((total, item) => { var _a; return total + ((_a = item.calories) !== null && _a !== void 0 ? _a : 0); }, 0);
        }
        // Check if there are existing calories records for today
        const existingCalories = yield db_connection_1.prisma.calories.findMany({
            where: {
                userId: userId,
                createdAt: {
                    gte: startOfToday,
                    lte: endOfToday
                }
            },
        });
        if (existingCalories.length > 0) {
            // Update the existing Calories record
            const updatedCalories = yield db_connection_1.prisma.calories.update({
                where: { id: existingCalories[0].id },
                data: {
                    actual: totalActualCalories,
                },
            });
            return {
                success: true,
                message: "success update calories",
                data: updatedCalories,
            };
        }
        else {
            // Create a new Calories record
            const createFood = yield db_connection_1.prisma.calories.create({
                data: {
                    userId: userId,
                    amr: amr,
                    bmi: bmi,
                    actual: totalActualCalories,
                    target: target,
                },
            });
            return {
                success: true,
                message: "success post calories",
                data: createFood,
            };
        }
    }
    catch (error) {
        console.error('Error in caloriesCalculation:', error);
        throw new errorCatch_1.default({
            success: false,
            message: error.message,
            status: error.status || 500,
        });
    }
    finally {
        yield db_connection_1.prisma.$disconnect();
    }
});
exports.caloriesCalculation = caloriesCalculation;
