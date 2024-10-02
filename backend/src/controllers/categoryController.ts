import { Request, Response } from "express";
import { CategoryService } from "../services/categoryServices";

class CategoryController{
    static async listCategoriesController(req: Request, res: Response) {
        try {
            const categories = await CategoryService.listCategories();
            return res.status(200).json(categories);
        } catch (error) {
            return res.status(500).json({ error: "Error listing categories" });
        }
    }
}

export { CategoryController };