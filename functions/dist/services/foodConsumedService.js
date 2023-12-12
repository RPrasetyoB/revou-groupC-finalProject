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
exports.deleteFood = exports.editFood = exports.getFood = exports.foodConsumed = void 0;
const errorCatch_1 = __importDefault(require("../utils/errorCatch"));
const db_connection_1 = require("../config/db/db.connection");
const date_fns_1 = require("date-fns");
const uuid_1 = require("uuid");
const today = new Date();
const startOfToday = (0, date_fns_1.startOfDay)(today);
const endOfToday = (0, date_fns_1.endOfDay)(today);
//----- create foodConsumed ------
const foodConsumed = (userId, input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foodNames = "foodNames" in input ? input.foodNames : [input.foodName];
        const filteredFoodNames = foodNames.filter(Boolean);
        const foodListEntries = yield db_connection_1.prisma.foodList.findMany({
            where: { foodName: { in: filteredFoodNames } },
            select: { foodName: true, calories: true },
        });
        if (foodListEntries.length !== filteredFoodNames.length) {
            throw new errorCatch_1.default({
                status: 404,
                success: false,
                message: "Some food items not found in the FoodList",
            });
        }
        const uniqueId = (0, uuid_1.v4)();
        yield db_connection_1.prisma.foodConsumed.createMany({
            data: foodListEntries.map((entry) => ({
                userId: userId,
                foodName: entry.foodName,
                calories: entry.calories,
                uniqueId: uniqueId,
            })),
        });
        const createdRecords = yield db_connection_1.prisma.foodConsumed.findMany({
            where: {
                userId: userId,
                createdAt: {
                    gte: (0, date_fns_1.subSeconds)(new Date(), 2),
                },
            },
        });
        return {
            success: true,
            message: "Successfully recorded consumed food",
            data: createdRecords,
        };
    }
    catch (error) {
        throw new errorCatch_1.default({
            success: false,
            message: error.message,
            status: 500,
        });
    }
    finally {
        yield db_connection_1.prisma.$disconnect();
    }
});
exports.foodConsumed = foodConsumed;
//----- get food consumed -----
const getFood = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foodConsumed = yield db_connection_1.prisma.foodConsumed.findMany({
            where: {
                userId: userId,
                createdAt: {
                    gte: startOfToday,
                    lte: endOfToday,
                },
            },
        });
        return {
            success: true,
            message: "Successfully recorded consumed food",
            data: foodConsumed,
        };
    }
    catch (error) {
        throw new errorCatch_1.default({
            success: false,
            message: error.message,
            status: 500,
        });
    }
    finally {
        yield db_connection_1.prisma.$disconnect();
    }
});
exports.getFood = getFood;
//----- update food consumed -----
const editFood = (userId, input, uniqueId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getFood = yield db_connection_1.prisma.foodConsumed.findMany({
            where: {
                userId: userId,
                uniqueId: uniqueId,
            },
        });
        if (!getFood || getFood.length === 0) {
            throw new errorCatch_1.default({
                success: false,
                message: "Food consumed not found",
                status: 400,
            });
        }
        const foodNames = "foodNames" in input ? input.foodNames : [input.foodName];
        const filteredFoodNames = foodNames.filter(Boolean);
        const foodListEntries = yield db_connection_1.prisma.foodList.findMany({
            where: { foodName: { in: filteredFoodNames } },
            select: { foodName: true, calories: true },
        });
        if (foodListEntries.length !== filteredFoodNames.length) {
            throw new errorCatch_1.default({
                success: false,
                message: "Some food items not found in the FoodList",
                status: 404,
            });
        }
        const updatePromises = getFood.map((record, index) => __awaiter(void 0, void 0, void 0, function* () {
            const entry = foodListEntries[index];
            return db_connection_1.prisma.foodConsumed.update({
                where: {
                    id: record.id,
                },
                data: {
                    foodName: entry.foodName,
                    calories: entry.calories,
                },
            });
        }));
        const updatedRecords = yield Promise.all(updatePromises);
        return {
            success: true,
            message: "Successfully updated consumed food",
            data: updatedRecords,
        };
    }
    catch (error) {
        throw new errorCatch_1.default({
            success: false,
            message: error.message,
            status: 500,
        });
    }
    finally {
        yield db_connection_1.prisma.$disconnect();
    }
});
exports.editFood = editFood;
//----- delete food consumed ------
const deleteFood = (userId, uniqueId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getFood = yield db_connection_1.prisma.foodConsumed.findMany({
            where: {
                userId: userId,
                uniqueId: uniqueId,
            },
        });
        if (!getFood || getFood.length === 0) {
            throw new errorCatch_1.default({
                success: false,
                message: "Food consumed not found",
                status: 400,
            });
        }
        const delFood = yield db_connection_1.prisma.foodConsumed.deleteMany({
            where: {
                userId: userId,
                uniqueId: uniqueId
            }
        });
        return {
            success: true,
            message: "Successfully updated consumed food",
            data: getFood,
        };
    }
    catch (error) {
        throw new errorCatch_1.default({
            success: false,
            message: error.message,
            status: 500,
        });
    }
    finally {
        yield db_connection_1.prisma.$disconnect();
    }
});
exports.deleteFood = deleteFood;
