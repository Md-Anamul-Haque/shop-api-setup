"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_find_1 = __importDefault(require("./image.find"));
const image_findOne_1 = __importDefault(require("./image.findOne"));
const handleImages = {
    find: image_find_1.default,
    findOne: image_findOne_1.default,
};
exports.default = handleImages;
