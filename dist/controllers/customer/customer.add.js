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
const customerAdd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        const { org_code, user_id, username, role, status } = user;
        const createBy = user_id;
        const { cust_id, cust_name, cust_phone, cust_address, cust_image, cust_email, cust_Desc } = req.body;
        db_1.connection.query(`INSERT INTO customers (
                org_code,
                cust_id,
                cust_name,
                cust_phone,
                cust_address,
                cust_image,
                cust_email,
                cust_Desc,
                createBy,
            ) VALUES(
                ${org_code},
                ${cust_id},
                ${cust_name},
                ${cust_phone},
                ${cust_address},
                ${cust_image},
                ${cust_email},
                ${cust_Desc},
                ${createBy},
            )
            
            `);
    }
    catch (err) {
        (0, sendError_1.default)({ res, message: err.message });
    }
});
console.log();
exports.default = customerAdd;
