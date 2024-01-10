import { Router } from 'express';
import tokenController from '../controllers/TokenController';
import adminController from '../controllers/AdminController';

const router = new Router();

router.post('/', tokenController.store);
router.post('/', adminController.store);

export default router;
