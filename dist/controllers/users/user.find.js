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
const responses_1 = require("../../../lib/responses");
const findUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hostname = req.hostname;
        const category = req.params.category;
        return ((0, responses_1.sendSuccess)({
            res,
            data: { abc: 'abc' },
            message: "find success"
        }));
    }
    catch (err) {
        return ((0, responses_1.sendError)({ res, message: err.message }));
    }
});
exports.default = findUser;
