import { Router } from 'express';
import tokenController from '../controllers/TokenController';
import adminController from '../controllers/AdminController';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', tokenController.store);
router.post('/', adminController.store);
router.post('/', userController.store);

export default router;
