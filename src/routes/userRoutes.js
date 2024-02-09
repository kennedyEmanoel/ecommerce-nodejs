import { Router } from 'express';
import userController from '../controllers/UserController';
// import userAuth from '../middlewares/userAuth';
import adminAuth from '../middlewares/adminAuth';

const router = new Router();

router.get('/', adminAuth, userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;
