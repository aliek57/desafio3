import { Request, Response } from "express";
import { TourService } from "../services/tourServices";

class TourController{
    static async listToursController(req: Request, res: Response) {
        try {
            const tours = await TourService.listTours();
            return res.status(200).json(tours);
        } catch (error) {
            return res.status(500).json({ error: "Error listing tours" });
        }
    }

    static async getTourByIdController(req: Request, res: Response){
        const tour_id = parseInt(req.params.id);

        if (!tour_id) {
            return res.status(400).json({ error: "Tour ID must be not null" });
        }

        try {
            const tour = await TourService.getTourById(tour_id);
            return res.status(200).json(tour);
        } catch (error) {
            return res.status(500).json({ error: "Error getting tour" });
        }
    }

    static async getToursByCategoryController(req: Request, res: Response){
        const categoryName = req.params.category;

        if (!categoryName) {
            return res.status(400).json({ error: "Category name must be provided" });
        }

        try {
            const tours = await TourService.getToursByCategory(categoryName);
            return res.status(200).json(tours);
        } catch (error) {
            return res.status(500).json({ error: "Category not found" });
        }
    }
}

export { TourController };