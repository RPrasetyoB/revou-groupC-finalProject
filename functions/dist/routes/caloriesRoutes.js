"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const caloriesController_1 = require("../controllers/caloriesController");
const foodRoutes = express_1.default.Router();
foodRoutes.get('/calories', caloriesController_1.getCalories);
foodRoutes.post('/calories', caloriesController_1.createCalories);
exports.default = foodRoutes;
