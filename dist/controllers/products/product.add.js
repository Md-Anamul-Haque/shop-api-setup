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
const findMaxIdPlusOne_1 = __importDefault(require("../../lib/actions/findMaxIdPlusOne"));
const insertData_1 = __importDefault(require("../../lib/actions/insertData"));
const sendError_1 = __importDefault(require("../../lib/responses/sendError"));
const sendSuccess_1 = __importDefault(require("../../lib/responses/sendSuccess"));
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        console.log({ user });
        const table = 'product_mt';
        const pd_image = '', pd_id = `pd-${(0, findMaxIdPlusOne_1.default)({ table, colName: 'pd_id' })}`;
        const { org_code, user_id } = user;
        console.log(req.body);
        // from user to send in body
        const { pd_name, pd_brand, pd_model, pd_price, pd_type, pd_category, sale_margin_price, uom, color, feature, pd_desc } = req.body;
        let data = {
            org_code,
            pd_id,
            pd_name,
            pd_model,
            pd_type,
            pd_brand,
            pd_category,
            pd_price,
            feature,
            pd_image,
            sale_margin_price,
            uom,
            createBy: user_id,
            pd_desc,
            color,
        };
        const { err, fields, rows } = yield (0, insertData_1.default)({ table, data });
        if (err) {
            (0, sendError_1.default)({
                res,
                message: err.message,
            });
        }
        else {
            (0, sendSuccess_1.default)({
                res,
                data: Object.assign(Object.assign({}, data), { pd_id, org_code }),
                message: 'add success'
            });
        }
    }
    catch (err) {
        (0, sendError_1.default)({
            res,
            message: err.message,
        });
    }
});
exports.default = addProduct;
