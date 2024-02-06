import { Router } from 'express';
import productController from '../controllers/ProductController';

const router = new Router();

// create product
router.post('/', productController.store);

router.get('/', productController.index);

router.put('/:id', productController.update);
router.delete('/:id', productController.delete);

export default router;
