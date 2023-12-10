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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDailyFoodConsumed = exports.getDailyFoodConsumed = exports.createDailyFoodConsumed = void 0;
const getToken_1 = require("../utils/getToken");
const foodConsumedService_1 = require("../services/foodConsumedService");
//----- create daily food consumed -----
const createDailyFoodConsumed = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decodedToken = (0, getToken_1.getToken)(req);
        const { userId } = (0, getToken_1.loggedUser)(decodedToken);
        const { foodNames } = req.body;
        const result = yield (0, foodConsumedService_1.foodConsumed)(userId, { foodNames });
        if (result.success) {
            return res.status(200).json({
                success: true,
                message: "Add new foodConsumed success",
                data: result.data,
            });
        }
    }
    catch (error) {
        next(error);
    }
});
exports.createDailyFoodConsumed = createDailyFoodConsumed;
//----- get daily food consumed -----
const getDailyFoodConsumed = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decodedToken = (0, getToken_1.getToken)(req);
        const { userId } = (0, getToken_1.loggedUser)(decodedToken);
        const result = yield (0, foodConsumedService_1.getFood)(userId);
        if (result.success) {
            return res.status(200).json({
                message: "get daily foodCosumed success",
                data: result.data,
            });
        }
    }
    catch (error) {
        next(error);
    }
});
exports.getDailyFoodConsumed = getDailyFoodConsumed;
//----- update food consumed -----
const updateDailyFoodConsumed = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decodedToken = (0, getToken_1.getToken)(req);
        const { userId } = (0, getToken_1.loggedUser)(decodedToken);
        const { foodNames } = req.body;
        const uniqueId = req.params.uniqueId;
        const result = yield (0, foodConsumedService_1.editFood)(userId, { foodNames }, uniqueId);
        if (result.success) {
            return res.status(200).json({
                message: "update daily foodCosumed success",
                data: result.data,
            });
        }
    }
    catch (error) {
        next(error);
    }
});
exports.updateDailyFoodConsumed = updateDailyFoodConsumed;
