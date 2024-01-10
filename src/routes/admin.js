import { Router } from 'express';
import adminController from '../controllers/AdminController';

import loginAdmin from '../middlewares/loginAdmin';

const router = new Router();

// router.get('/:id', adminController.show);
// router.get('/', loginAdmin, adminController.index);

router.post('/', adminController.store);
router.put('/:id', loginAdmin, adminController.update);
router.delete('/:id', loginAdmin, adminController.delete);

export default router;
