"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleMiddleware = void 0;
const express_session_1 = __importDefault(require("express-session"));
const googleAuth_1 = __importDefault(require("../config/auth/googleAuth"));
const googleMiddleware = (app) => {
    app.use((0, express_session_1.default)({
        secret: 'sessionSecret',
        resave: false,
        saveUninitialized: false,
    }));
    app.use(googleAuth_1.default.initialize());
    app.use(googleAuth_1.default.session());
};
exports.googleMiddleware = googleMiddleware;
