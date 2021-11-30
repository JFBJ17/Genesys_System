import { Router } from "express";
const router = Router();

import * as ctrlCriterio from '../../controllers/admin/criterio.controller'

router.post('/criterio', ctrlCriterio.addCriterio);
router.get('/criterio', ctrlCriterio.allCriterio);
router.delete('/criterio/:id', ctrlCriterio.deleteCriterio);
router.put('/criterio/:id', ctrlCriterio.editCriterio)

export default router;