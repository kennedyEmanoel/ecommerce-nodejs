import { Router } from 'express';
import product from '../controllers/Product';

const router = new Router();

router.get('/', product.index);

export default router;
