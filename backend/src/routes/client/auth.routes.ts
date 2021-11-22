import { Router } from 'express';
const router = Router();

import * as auth from '../../controllers/client/auth.controller';

router.post('/signup', auth.register);
router.post('/signin', auth.login);
router.get('/whoami', auth.getUser);
router.get('/logout', auth.logout);

export default router;