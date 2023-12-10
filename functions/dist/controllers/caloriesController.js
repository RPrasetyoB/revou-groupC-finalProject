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
exports.createCalories = exports.getCalories = void 0;
const getToken_1 = require("../utils/getToken");
const caloriesService_1 = require("../services/caloriesService");
//----- get user calories ------
const getCalories = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decodedToken = (0, getToken_1.getToken)(req);
        const { username } = (0, getToken_1.loggedUser)(decodedToken);
        const result = yield (0, caloriesService_1.getCaloriesUser)(username);
        if (result.success) {
            return res.status(200).json({
                message: result.message,
                data: result.data
            });
        }
    }
    catch (error) {
        next(error);
    }
});
exports.getCalories = getCalories;
//------ create user calories ------
const createCalories = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decodedToken = (0, getToken_1.getToken)(req);
        const { userId } = (0, getToken_1.loggedUser)(decodedToken);
        const result = yield (0, caloriesService_1.caloriesCalculation)(userId);
        if (result === null || result === void 0 ? void 0 : result.success) {
            return res.status(200).json({
                message: result.message,
                data: result.data
            });
        }
    }
    catch (error) {
        next(error);
    }
});
exports.createCalories = createCalories;
