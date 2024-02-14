import { Router } from 'express';
import userController from '../controllers/UserController';
import userAuth from '../middlewares/userAuth';
import adminAuth from '../middlewares/adminAuth';

const router = new Router();

router.get('/', userAuth, userController.index);

router.get('/:id', userAuth, userController.show);

router.post('/', userController.store);
router.put('/:id', adminAuth, userController.update);
router.delete('/:id', adminAuth, userController.delete);

export default router;
