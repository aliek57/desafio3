import { Request, Response } from "express";
import { UserService } from "../services/userServices";
import { CustomRequest } from "../middleware/authenticate";
import admin from "../config/firebase";

class UserController{

    static async createUserController(req: Request, res: Response){
        const { id, email, name, last_name } = req.body;

        const user = await UserService.createUserService({id, email, name, last_name});

        return res.json(user);
    }

    static async getUserController(req: CustomRequest, res:Response){

        const user_id = req.user_id;

        if (!user_id) {
            return res.status(400).json({ error: "User Id undefined" });
        }

        const user = await UserService.getUserService(user_id);

        return res.json(user);
    }

    static async addMovieController(req: CustomRequest, res: Response) {
        const user_id = req.user_id;
        const { title, director, duration, release_year, category } = req.body;

        if (!user_id || !title || !director || !duration || !release_year || !category) {
            return res.status(400).json({ error: "All fields must be not null" });
        }

        try {
            const movie = await UserService.addMovie(user_id, { title, director, duration, release_year, category });
            return res.status(201).json(movie);
        } catch (error) {
            return res.status(500).json({ error: "Error adding movie" });
        }
    }

    static async listMoviesController(req: CustomRequest, res: Response) {
        const user_id = req.user_id;

        if (!user_id) {
            return res.status(400).json({ error: "User Id must be not null" });
        }

        try {
            const movies = await UserService.listMovies(user_id);
            return res.status(200).json(movies);
        } catch (error) {
            return res.status(500).json({ error: "Error listing movies" });
        }
    }

    static async deleteMovieController(req: CustomRequest, res: Response){
        const movie_id = parseInt(req.params.id);
        const user_id = req.user_id;

        if (!movie_id || !user_id) {
            return res.status(400).json({ error: "User or Movie Id must be not null" });
        }

        try {
            await UserService.deleteMovie(user_id, movie_id);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: "Error deleting movie" });
        }
    }

    static async updateMovieController(req: CustomRequest, res: Response){
        const movie_id = parseInt(req.params.id);
        const user_id = req.user_id;

        if (!movie_id || !user_id) {
            return res.status(400).json({ error: "User or Movie Id must be not null" });
        }

        const { title, director, duration, release_year, category } = req.body;

        if (!title || !director || !duration || !release_year || !category) {
            return res.status(400).json({ error: "All fields must be not null" });
        }

        try {
            const movie = await UserService.updateMovie(user_id, movie_id, { title, director, duration, release_year, category });
            return res.status(200).json(movie);
        } catch (error) {
            return res.status(500).json({ error: "Error updating movie" });
        }
    }

    static async getMovieByIdController(req: CustomRequest, res: Response){
        const movie_id = parseInt(req.params.id);
        const user_id = req.user_id;

        if (!movie_id || !user_id) {
            return res.status(400).json({ error: "User or Movie Id must be not null" });
        }

        try {
            const movie = await UserService.getMovieById(user_id, movie_id);
            return res.status(200).json(movie);
        } catch (error) {
            return res.status(500).json({ error: "Error getting movie" });
        }
    }

    static async revokeTokenController(req: CustomRequest, res: Response) {
        const user_id = req.user_id;
        if (!user_id) {
            return res.status(400).json({ error: "User Id must be not null" });
        }
        try {
            await admin.auth().revokeRefreshTokens(user_id);
            res.status(200).send("Token revoked successfully!!!");
        } catch (error) {
            res.status(500).send("Error revoking token: " + error);
        }
    }
}

export { UserController };