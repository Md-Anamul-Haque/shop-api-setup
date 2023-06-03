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
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../config/db");
const insertData = ({ table, data }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const connection = await pool.getConnection();
        // const sql = `INSERT INTO ${table} SET ?`;
        const sql = `INSERT INTO ${table} SET ?`;
        // const [rows, fields] = await connection.execute(sql, [data]);
        const [rows, fields] = yield db_1.connection.execute(sql, [data]);
        console.log(sql);
        // connection.release();
        console.log('Data inserted successfully!');
        return { rows, fields };
    }
    catch (err) {
        console.log(err);
        return { err };
    }
});
exports.default = insertData;
