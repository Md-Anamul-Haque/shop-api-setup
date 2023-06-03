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
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const findMaxId_1 = __importDefault(require("./lib/actions/findMaxId"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const pd_id = (yield (0, findMaxId_1.default)({ table: 'product_mt', colName: 'pd_id' })) || `pd-1${new Int8Array(11).join('')}`;
    console.log({ pd_id });
}))();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// app.options('*', cors()); // enable pre-flight request for all routes
// app.use(cors({ credentials: true, origin: process.env.CLINT_URL })); // only CLINT_URL credentials
app.use(express_1.default.static("public"));
app.use((0, cookie_parser_1.default)());
// all routes have this router
app.use(routes_1.default);
exports.default = app;
