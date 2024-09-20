import prisma from "../prisma/prismaClient";
class TourService {
    static async createTour({ title, description, price, category }) {
        if (!title || !description || !price || !category) {
            throw new Error("All fields must be provided");
        }
        const tour = await prisma.tour.create({
            data: {
                title,
                description,
                price,
                category,
            },
            select: {
                id: true,
                title: true,
                description: true,
                price: true,
                category: true,
            }
        });
        return tour;
    }
    static async getTourById(tour_id) {
        if (!tour_id) {
            throw new Error("Tour ID is missing");
        }
        const tour = await prisma.tour.findFirst({
            where: {
                id: tour_id
            },
            select: {
                id: true,
                title: true,
                description: true,
                price: true,
                category: true,
            }
        });
        if (!tour) {
            throw new Error("Tour not found");
        }
        return tour;
    }
    static async getAllTours() {
        const tours = await prisma.tour.findMany();
        return tours;
    }
}
export { TourService };
