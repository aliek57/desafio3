import { Router } from 'express';
import { getTours, getTour } from '../controllers/tourController.ts';
const router = Router();
router.get('/tours', getTours);
router.get('/tours/:id', getTour);
export default router;
