import { Request, Response } from "express";
import { ReviewService } from "../services/reviewService";

class ReviewController{
    static async listReviewsController(req: Request, res: Response) {
        try {
            const reviews = await ReviewService.listReviews();
            return res.status(200).json(reviews);
        } catch (error) {
            return res.status(500).json({ error: "Error listing reviews" });
        }
    }

    static async getReviewByIdController(req: Request, res: Response){
        const review_id = Number(req.params.id);

        try {
            const review = await ReviewService.getReviewById(review_id);
            return res.status(200).json(review);
        } catch (error) {
            return res.status(500).json({ error: "Error getting review" });
        }
    }

    static async getReviewByTourController(req: Request, res: Response){
        const tourId = Number(req.params.tourId);

        try {
            const reviews = await ReviewService.getReviewByTour(tourId);
            return res.status(200).json(reviews);
        } catch (error) {
            return res.status(500).json({ error: "Tour not found" });
        }
    }
}

export { ReviewController };