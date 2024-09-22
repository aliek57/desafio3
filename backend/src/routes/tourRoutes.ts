import { Router } from "express";
import { TourController } from "../controllers/tourController";

const router = Router();

router.get("/category/:category", TourController.getToursByCategoryController);
router.get("/", TourController.listToursController);
router.get("/:id", TourController.getTourByIdController);

export default router;