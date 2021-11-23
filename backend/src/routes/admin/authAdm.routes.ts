import { Router } from "express";
const router = Router();

import * as authAdm from '../../controllers/admin/authAdm.controller';

router.post('/signinAdm', authAdm.login);
router.get('/whoamiAdm', authAdm.getUser);
router.get('/logoutAdm', authAdm.logout);

export default router;