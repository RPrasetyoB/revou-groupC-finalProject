"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const foodConsumedController_1 = require("../controllers/foodConsumedController");
const foodConsumedRoutes = express_1.default.Router();
foodConsumedRoutes.post('/consume', foodConsumedController_1.createDailyFoodConsumed);
foodConsumedRoutes.get('/consume', foodConsumedController_1.getDailyFoodConsumed);
foodConsumedRoutes.put('/consume/:uniqueId', foodConsumedController_1.updateDailyFoodConsumed);
foodConsumedRoutes.delete('/consume/:uniqueId', foodConsumedController_1.deleteDailyFoodConsumed);
exports.default = foodConsumedRoutes;
