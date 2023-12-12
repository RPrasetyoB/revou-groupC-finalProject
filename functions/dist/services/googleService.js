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
exports.findOrCreateGoogleUser = void 0;
const db_connection_1 = require("../config/db/db.connection");
const errorCatch_1 = __importDefault(require("../utils/errorCatch"));
const findOrCreateGoogleUser = (profile) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield db_connection_1.prisma.user.findUnique({
            where: { googleId: profile.id },
        });
        if (user) {
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
            const newUser = yield db_connection_1.prisma.user.create({
                data: {
                    googleId: profile.id,
                    username: profile.displayName,
                    email: profile.emails[0].value,
                },
            });
            return {
                success: true,
                data: newUser,
            };
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
exports.findOrCreateGoogleUser = findOrCreateGoogleUser;
