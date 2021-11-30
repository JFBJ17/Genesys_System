import { Router } from "express";
const router = Router();

import * as ctrlCategory from '../../controllers/admin/category.controller'

router.post('/category', ctrlCategory.addCategory);
router.get('/category', ctrlCategory.allCategory);
router.delete('/category/:id', ctrlCategory.deleteCategory);
router.put('/category/:id', ctrlCategory.editCategory)

export default router;