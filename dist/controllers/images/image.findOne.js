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
const sharp_1 = __importDefault(require("sharp"));
const sendError_1 = __importDefault(require("../../lib/responses/sendError"));
// error.jpg
const findOneImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const hostname: string = req.hostname
        const { imageName } = req.params;
        // image.svg
        const imagePath = `asset/images/${imageName}`;
        const width = Number(req.query.w) || 500;
        const height = Number(req.query.h) || 500;
        (0, sharp_1.default)(imagePath)
            .resize(width, height)
            .toBuffer()
            .then((data) => {
            res.set('Content-Type', 'image/webp');
            res.send(data);
        })
            .catch((err) => {
            (0, sharp_1.default)('asset/images/error.jpg')
                .resize(width, height)
                .toBuffer()
                .then((data) => {
                res.set('Content-Type', 'image/webp');
                res.send(data);
            })
                .catch((err2) => {
                console.log(err2);
                (0, sendError_1.default)({ res, message: 'Internal Server Error' });
            });
            console.log(err);
        });
    }
    catch (err) {
        return ((0, sendError_1.default)({ res, message: 'Internal Server Error' }));
    }
});
exports.default = findOneImage;
