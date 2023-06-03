"use strict";
// await (await findOne({ sql: }))?.row?.pd_id
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
function findMax_id({ table, colName, length = 12 }) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield db_1.pool.getConnection();
            const sql = `SELECT LPAD(MAX(SUBSTR(${colName},2)+1),${length},0) as max_id from ${table} LIMIT 1`;
            const [rows] = yield connection.execute(sql);
            connection.release();
            // return rows.length ? rows[0] : null;
            return (((_a = rows === null || rows === void 0 ? void 0 : rows[0]) === null || _a === void 0 ? void 0 : _a.max_id) || null);
        }
        catch (err) {
            return ({ err });
        }
    });
}
exports.default = findMax_id;
