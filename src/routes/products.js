import { Router } from 'express';
import productController from '../controllers/ProductController';

import loginAdmin from '../middlewares/loginAdmin';

const router = new Router();

router.get('/', productController.index);
router.post('/', loginAdmin, productController.store);
router.get('/:id', productController.show);
router.put('/:id', loginAdmin, productController.update);
router.delete('/:id', loginAdmin, productController.delete);

export default router;
