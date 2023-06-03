"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = __importDefault(require("./auth"));
const db_1 = __importDefault(require("./db"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3302;
const app_config = {
    PORT,
    db: db_1.default,
    auth: auth_1.default
};
exports.default = app_config;
