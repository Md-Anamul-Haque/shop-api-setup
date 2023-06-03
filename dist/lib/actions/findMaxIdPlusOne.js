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
const findMaxId_1 = __importDefault(require("./findMaxId"));
function findMaxId_PlusOne({ table, colName, length = 12 }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const maxId = (0, findMaxId_1.default)({ table, colName, length });
            return maxId ? Number(maxId) + 1 : new Int8Array(length).join('');
        }
        catch (err) {
            return ({ err });
        }
    });
}
exports.default = findMaxId_PlusOne;
