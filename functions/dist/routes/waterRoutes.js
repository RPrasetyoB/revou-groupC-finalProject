"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const waterController_1 = require("../controllers/waterController");
const todoRoutes = express_1.default.Router();
todoRoutes.get('/todos', waterController_1.getAllTodo);
todoRoutes.post('/todos', waterController_1.createTodo);
todoRoutes.put('/todos/:id', waterController_1.updateTodo);
todoRoutes.delete('/todos/:id', waterController_1.deleteTodo);
exports.default = todoRoutes;
