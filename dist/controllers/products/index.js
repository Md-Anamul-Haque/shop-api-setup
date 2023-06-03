"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_add_1 = __importDefault(require("./product.add"));
const product_find_1 = __importDefault(require("./product.find"));
const product_findOne_1 = __importDefault(require("./product.findOne"));
const productHandlers = {
    add: product_add_1.default,
    find: product_find_1.default,
    findOne: product_findOne_1.default,
    // update:update
};
exports.default = productHandlers;
