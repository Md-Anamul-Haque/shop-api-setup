"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = exports.connection = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const promise_1 = __importDefault(require("mysql2/promise"));
const dbName = 'shop', dbPassword = 'password';
const config = {
    host: 'localhost',
    user: 'root',
    password: dbPassword,
    database: dbName
};
exports.connection = mysql2_1.default.createConnection(Object.assign({}, config));
exports.pool = promise_1.default.createPool(Object.assign({}, config));
