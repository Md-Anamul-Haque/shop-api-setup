"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_create_1 = __importDefault(require("./user.create"));
const user_delete_1 = __importDefault(require("./user.delete"));
const user_find_1 = __importDefault(require("./user.find"));
const user_findOne_1 = __importDefault(require("./user.findOne"));
const user_update_1 = __importDefault(require("./user.update"));
const handleUsers = {
    create: user_create_1.default,
    find: user_find_1.default,
    findOne: user_findOne_1.default,
    update: user_update_1.default,
    delete: user_delete_1.default
};
exports.default = handleUsers;
