"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sendError_1 = __importDefault(require("../lib/responses/sendError"));
const auth = (req, res, next) => {
    try {
        // ... write your authentication or authorization code.
        // success -->
        req.user = {
            org_code: 'org-10001',
            user_id: 'userId-10009',
            username: 'Rajon',
            role: 'admin',
            status: 'A', //varchar(1)
        };
        next();
    }
    catch (err) {
        (0, sendError_1.default)({
            res,
            message: err.message,
        });
    }
};
exports.default = auth;
