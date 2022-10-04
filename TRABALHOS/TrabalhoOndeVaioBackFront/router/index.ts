import cors from 'cors';
import { Router } from 'express';
const router = Router();

import { users } from './users';
import { pix } from './pix';

router.use(cors());

router.use(users);
router.use(pix);

export default router;