"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../config/auth"));
const controllers_1 = __importDefault(require("../controllers"));
const customer_add_1 = __importDefault(require("../controllers/customer/customer.add"));
const customer_find_1 = __importDefault(require("../controllers/customer/customer.find"));
const router = express_1.default.Router();
// handle image apis
// image api handler start hear
router.get('/image/:imageName', controllers_1.default.image.findOne);
// image api handler end hear
router.get('/product', auth_1.default, controllers_1.default.product.find);
router.get('/product/:id', auth_1.default, controllers_1.default.product.findOne);
router.post('/product', auth_1.default, controllers_1.default.product.add);
// router.post('/product', apiHandler.product.update)
router.get('/customer', auth_1.default, customer_find_1.default);
router.post('/customer', auth_1.default, customer_add_1.default);
exports.default = router;
