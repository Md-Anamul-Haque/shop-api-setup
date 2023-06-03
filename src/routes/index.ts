import express, { Router } from 'express';
import auth from '../config/auth';
import apiHandler from '../controllers';
import customerAdd from '../controllers/customer/customer.add';
import customerFind from '../controllers/customer/customer.find';

const router: Router = express.Router();

// handle image apis
// image api handler start hear
router.get('/image/:imageName', apiHandler.image.findOne);
// image api handler end hear
router.get('/product', auth, apiHandler.product.find)
router.get('/product/:id', auth, apiHandler.product.findOne)
router.post('/product', auth, apiHandler.product.add)
// router.post('/product', apiHandler.product.update)
router.get('/customer', auth, customerFind);
router.post('/customer', auth, customerAdd)
export default router;
