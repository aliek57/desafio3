import prisma from "../prisma/prismaClient";
import { UserRegister } from "../models/userModel";
import { MovieRegister, MovieUpdate } from "../models/movieModel";


class UserService{
    static async createUserService({id, email, name, last_name}: UserRegister){
        if(!id || !email){
            throw new Error("ID Or Email is missing");
        }

        const userAlreadyExists = await prisma.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            return;
        }

        const user = await prisma.user.create({
            data:{
                id,
                email,
                name,
                last_name
            },
            select:{
                id: true,
                email: true,
                name: true,
                last_name: true
            }
        })
        
        return user;
    }

    static async getUserService(user_id: string){

        if (!user_id) {
            throw new Error("User ID is missing");
        }

        const user = await prisma.user.findFirst({
            where:{
                id: user_id
            },
            select:{
                id: true,
                email: true,
                name: true,
                last_name: true
            }
        })

        if(!user){
            throw new Error("User not found");
        }

        return user
    }

    static async addMovie(user_id: string, { title, director, duration, release_year, category }: MovieRegister) {
        if (!user_id || !title || !director || !duration || !release_year || !category) {
            throw new Error("All fields must be not null");
        }

        const movie = await prisma.movie.create({
            data: {
                title,
                director,
                duration,
                release_year,
                category,
                userId: user_id,
            },
        });

        return movie;
    }

    static async listMovies(user_id: string) {
        if (!user_id) {
            throw new Error("User Id must be not null");
        }

        const movies = await prisma.movie.findMany({
            where: {
                userId: user_id, 
            },
        });

        return movies;
    }

    static async deleteMovie(user_id: string, movie_id: number) {
        if(!user_id || !movie_id){
            throw new Error("User or Movie Id must be not null");
        }

        const movie = await prisma.movie.delete({
            where:{
                id: movie_id
            }
        })
    }

    static async updateMovie(user_id: string, movie_id: number, { title, director, duration, release_year, category }: MovieUpdate) {
        if (!user_id || !movie_id) {
            throw new Error("User or Movie Id must be not null");
        }

        const movie = await prisma.movie.update({
            where: {
                id: movie_id,
            },
            data: {
                title,
                director,
                duration,
                release_year,
                category,
            },
        });

        return movie;
    }

    static async getMovieById(user_id: string, movie_id: number) {
        if (!user_id || !movie_id) {
            throw new Error("User or Movie Id must be not null");
        }

        const movie = await prisma.movie.findFirst({
            where: {
                id: movie_id,
                userId: user_id,
            },
        });

        return movie;
    }
}

export { UserService };