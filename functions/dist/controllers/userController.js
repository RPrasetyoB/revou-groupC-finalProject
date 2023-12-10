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
exports.editUser = exports.logoutUser = exports.login = exports.regUser = exports.getAllUsers = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_1 = require("../config/auth/jwt");
const getToken_1 = require("../utils/getToken");
const userService_1 = require("../services/userService");
//------ Login user ------
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const result = yield (0, userService_1.loginUser)({ username, password });
        console.log('user', result.data.username);
        if (result.success) {
            const token = jsonwebtoken_1.default.sign({ id: result.data.id, username: result.data.username }, jwt_1.JWT_Sign);
            return res.status(200).json({
                message: result.message,
                user: result.data,
                token: token
            });
        }
    }
    catch (error) {
        next(error);
    }
});
exports.login = login;
//------ Create user ------
const regUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const result = yield (0, userService_1.registerUser)({ username, email, password });
        if (result.success) {
            res.status(201).json({
                success: true,
                message: 'Registration success',
            });
        }
    }
    catch (error) {
        next(error);
    }
});
exports.regUser = regUser;
//------ Update user -------
const editUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const decodeToken = (0, getToken_1.getToken)(req);
    const { username } = (0, getToken_1.loggedUser)(decodeToken);
    try {
        const { nickname, weight, height, gender, age, activeness, category } = req.body;
        const result = yield (0, userService_1.updateUser)(username, { nickname, weight, height, gender, age, activeness, category });
        if (result.success) {
            res.status(200).json({
                success: true,
                message: 'User updated successfully',
                data: result.data,
            });
        }
    }
    catch (error) {
        next(error);
    }
});
exports.editUser = editUser;
// //------ Password reset -------
// const resetPassReq = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//       const { email } = req.body;
//       const result = await passResetReq(email);
//       if (result.success) {
//           return res.status(200).json({
//               success: true,
//               message: 'Password reset link sent',
//               data: result.data,
//           });
//       } else {
//           return res.status(404).json({
//               success: false,
//               message: result.message,
//           });
//       }
//   } catch (error) {
//       next(error);
//   }
// }
// const resetPass = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//       const  key  = req.query.key as string
//       const { password } = req.body;
//       const result = await passwordReset(key, password);
//       if (result.success) {
//           return res.status(200).json({
//               success: true,
//               message: 'Password reset successful',
//           });
//       } else {
//           return res.status(401).json({
//               success: false,
//               message: result.message,
//           });
//       }
//   } catch (error) {
//       next(error);
//   }
// }
//------ log out ------
const logoutUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.clearCookie('accessToken', {
            httpOnly: true,
            path: '/'
        });
        res.clearCookie('refreshToken', {
            httpOnly: true,
            path: '/'
        });
        return res.status(200).json({
            success: true,
            message: 'Successfully logout'
        });
    }
    catch (error) {
        next(error);
    }
});
exports.logoutUser = logoutUser;
//------ Get all users ------
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, userService_1.getUsers)();
        if (result.success) {
            res.status(200).json({
                success: true,
                message: 'Success get all users',
                data: result.data,
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: "failed to get all users"
        });
    }
});
exports.getAllUsers = getAllUsers;
