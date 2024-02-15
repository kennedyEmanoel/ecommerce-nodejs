import { Router } from 'express';
import CartController from '../controllers/CartController';
// import userAuth from '../middlewares/userAuth';
// import adminAuth from '../middlewares/adminAuth';

const router = new Router();

// create Cart
router.post('/', CartController.store);

router.get('/', CartController.index);

router.put('/:id', CartController.update);
router.delete('/:id', CartController.delete);

export default router;
