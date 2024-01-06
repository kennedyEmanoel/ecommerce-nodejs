import { Router } from 'express';
import user from '../controllers/User';

const router = new Router();

router.get('/', user.index);

export default router;
