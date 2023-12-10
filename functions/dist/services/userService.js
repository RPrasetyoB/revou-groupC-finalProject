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
exports.getUsers = exports.updateUser = exports.registerUser = exports.loginUser = void 0;
// import bcrypt from "bcrypt";
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const node_cache_1 = __importDefault(require("node-cache"));
const errorCatch_1 = __importDefault(require("../utils/errorCatch"));
const db_connection_1 = require("../config/db/db.connection");
const failedLogins = new node_cache_1.default({ stdTTL: 20 });
const cache = new node_cache_1.default({ stdTTL: 20 });
//------ login ------
const loginUser = ({ username, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield db_connection_1.prisma.user.findUnique({
            where: { username }
        });
        const loginAttempts = failedLogins.get(username) || 0;
        console.log("loginAttempts", loginAttempts);
        if (loginAttempts >= 4) {
            throw new errorCatch_1.default({
                success: false,
                message: "Too many failed login attempts. Please try again later",
                status: 429,
            });
        }
        if (!user) {
            failedLogins.set(username, loginAttempts + 1);
            throw new errorCatch_1.default({
                success: false,
                message: "Username or Password invalid",
                status: 401,
            });
        }
        const isPasswordCorrect = yield bcryptjs_1.default.compare(password, user.password);
        if (isPasswordCorrect) {
            yield failedLogins.del(username);
            return {
                success: true,
                message: "Login successfully",
                status: 200,
                data: {
                    id: user.id,
                    username: user.username,
                },
            };
        }
        else {
            failedLogins.set(username, loginAttempts + 1);
            throw new errorCatch_1.default({
                success: false,
                message: "Username or Password invalid",
                status: 401,
            });
        }
    }
    catch (error) {
        console.error(error);
        throw new errorCatch_1.default({
            success: false,
            message: error.message,
            status: error.status,
        });
    }
    finally {
        yield db_connection_1.prisma.$disconnect();
    }
});
exports.loginUser = loginUser;
//------ register ------
const registerUser = ({ username, email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!username) {
        throw new errorCatch_1.default({
            success: false,
            message: "Username cannot be empty",
            status: 400,
        });
    }
    if (password.length < 6) {
        throw new errorCatch_1.default({
            success: false,
            message: "Password must be at least 6 characters long",
            status: 400,
        });
    }
    if (!/(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)) {
        throw new errorCatch_1.default({
            success: false,
            message: "Password must contain both alphabetic and numeric characters",
            status: 400,
        });
    }
    const existUser = yield db_connection_1.prisma.user.findUnique({
        where: { username }
    });
    if (existUser) {
        throw new errorCatch_1.default({
            success: false,
            message: 'Username already exists',
            status: 409,
        });
    }
    const existEmail = yield db_connection_1.prisma.user.findUnique({
        where: { email }
    });
    if (existEmail) {
        throw new errorCatch_1.default({
            success: false,
            message: 'Email already registered, please use other email',
            status: 409,
        });
    }
    try {
        const hashedPass = yield bcryptjs_1.default.hash(password, 10);
        const newUser = yield db_connection_1.prisma.user.create({
            data: { username, email, password: hashedPass }
        });
        return {
            success: true,
            data: newUser,
        };
    }
    catch (error) {
        console.error(error);
        throw new errorCatch_1.default({
            success: false,
            message: error.message,
            status: error.status,
        });
    }
    finally {
        yield db_connection_1.prisma.$disconnect();
    }
});
exports.registerUser = registerUser;
//------ get all users ------
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield db_connection_1.prisma.user.findMany();
        return {
            success: true,
            message: "Users retrieved successfully",
            status: 200,
            data: users,
        };
    }
    catch (error) {
        console.error(error);
        throw new errorCatch_1.default({
            success: false,
            message: "Error retrieving users",
            status: 500,
        });
    }
    finally {
        yield db_connection_1.prisma.$disconnect();
    }
});
exports.getUsers = getUsers;
//------ update password -------
const updateUser = (username, { nickname, weight, height, gender, age, activeness, category }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingUser = yield db_connection_1.prisma.user.findUnique({
            where: { username: username },
        });
        if (!existingUser) {
            throw new errorCatch_1.default({
                success: false,
                message: "User not found",
                status: 404,
            });
        }
        const updatedUserData = {};
        if (nickname)
            updatedUserData.nickname = nickname;
        if (weight)
            updatedUserData.weight = parseInt(weight, 10);
        if (weight)
            updatedUserData.height = parseInt(height, 10);
        if (gender)
            updatedUserData.gender = gender;
        if (age)
            updatedUserData.age = age;
        if (activeness)
            updatedUserData.activeness = activeness;
        if (category)
            updatedUserData.category = category;
        const updatedUser = yield db_connection_1.prisma.user.update({
            where: { username: username },
            data: updatedUserData,
        });
        return {
            success: true,
            data: updatedUser,
        };
    }
    catch (error) {
        console.error(error);
        throw new errorCatch_1.default({
            success: false,
            message: error.message,
            status: error.status,
        });
    }
    finally {
        yield db_connection_1.prisma.$disconnect();
    }
});
exports.updateUser = updateUser;
