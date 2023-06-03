"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import handleBlogs from "./blogs"
// import handleCards from "./cards"
// import handleDocs from "./docs"
const images_1 = __importDefault(require("./images"));
const products_1 = __importDefault(require("./products"));
// import handleTexts from "./texts"
// import handleUsers from "./users"
// import handleVideos from "./videos"
const apiHandler = {
    // user:{...handleUsers},
    image: Object.assign({}, images_1.default),
    product: Object.assign({}, products_1.default)
    // card:{...handleCards},
    // doc:{...handleDocs},
    // text:{...handleTexts},
    // video:{...handleVideos},
    // blog:{...handleBlogs}
};
exports.default = apiHandler;
