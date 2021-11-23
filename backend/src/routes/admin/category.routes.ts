import { Router } from "express";
const router = Router();

import * as ctrlCategory from '../../controllers/admin/category.controller'

router.post('/category', ctrlCategory.addCategory);
router.get('/category', ctrlCategory.allCategory);
router.delete('/category/:id', ctrlCategory.deleteCategory);

export default router;