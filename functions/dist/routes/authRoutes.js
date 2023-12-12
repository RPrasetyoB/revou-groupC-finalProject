"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const googleAuth_1 = __importDefault(require("../config/auth/googleAuth"));
const authRoutes = express_1.default.Router();
authRoutes.post('/auth/register', userController_1.regUser);
authRoutes.post('/auth/login', userController_1.login);
authRoutes.post('/logout', userController_1.logoutUser);
authRoutes.get('/auth/google', googleAuth_1.default.authenticate('google', { scope: ['profile', 'email'] }));
authRoutes.get('/auth/google/callback', googleAuth_1.default.authenticate('google', { failureRedirect: '/login' }), (req, res) => { res.redirect('/'); });
exports.default = authRoutes;
