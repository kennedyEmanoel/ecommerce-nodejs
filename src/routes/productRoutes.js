import { Router } from 'express';
import productController from '../controllers/ProductController';
import userAuth from '../middlewares/userAuth';
import adminAuth from '../middlewares/adminAuth';

const router = new Router();

// create product
router.post('/', adminAuth, productController.store);

router.get('/', userAuth, productController.index);

router.put('/:id', adminAuth, productController.update);
router.delete('/:id', adminAuth, productController.delete);

export default router;
