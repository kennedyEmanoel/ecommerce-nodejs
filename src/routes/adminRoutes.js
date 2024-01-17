import { Router } from 'express';
import adminController from '../controllers/AdminController';

const router = new Router();

router.get('/', adminController.index);

router.post('/', adminController.store);
router.put('/:id', adminController.update);
router.delete('/:id', adminController.delete);

export default router;
