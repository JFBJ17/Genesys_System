import { Router } from 'express';
const router = Router();

import * as home from '../../controllers/client/home.controller';

router.post('/home', home.mixProducts)

export default router;