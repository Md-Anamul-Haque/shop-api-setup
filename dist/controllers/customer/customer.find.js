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
const db_1 = require("../../config/db");
const sendError_1 = __importDefault(require("../../lib/responses/sendError"));
const sendSuccess_1 = __importDefault(require("../../lib/responses/sendSuccess"));
const customerFind = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('hello');
    try {
        db_1.connection.query('SELECT * FROM `customers` where ', function (err, results, fields) {
            console.log(fields); // fields contains extra meta data about results, if available
            (0, sendSuccess_1.default)({
                res,
                data: results
            });
            // console.log(results); // results contains rows returned by server
        });
    }
    catch (err) {
        (0, sendError_1.default)({ res, message: err.message });
    }
});
exports.default = customerFind;
