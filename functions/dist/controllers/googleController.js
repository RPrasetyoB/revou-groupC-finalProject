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
exports.googleLogin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_1 = require("../config/auth/jwt");
const googleService_1 = require("../services/googleService");
//------ Login google user ------
const googleLogin = (profile) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, googleService_1.findOrCreateGoogleUser)(profile);
        if (result.success) {
            const token = jsonwebtoken_1.default.sign({ id: result.data.id, username: result.data.username }, jwt_1.JWT_Sign);
            return {
                success: true,
                status: 200,
                message: result.message,
                user: result.data,
                token: token
            };
        }
    }
    catch (error) {
        console.error(error);
        throw { success: false, message: error.message, status: error.status || 500 };
    }
});
exports.googleLogin = googleLogin;
