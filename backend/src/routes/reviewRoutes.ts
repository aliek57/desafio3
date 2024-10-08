import { Router } from "express";
import { ReviewController } from "../controllers/reviewController";

const router = Router();

router.get("/tour/:tourId", ReviewController.getReviewByTourController);
router.get("/", ReviewController.listReviewsController);
router.get("/:id", ReviewController.getReviewByIdController);

export default router;