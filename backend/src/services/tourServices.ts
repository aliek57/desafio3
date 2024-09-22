import prisma from "../prisma/prismaClient";

class TourService {
    static async listTours() {
        const tours = await prisma.tour.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                price: true,
                durationDays: true,
                availableFrom: true,
                availableTo: true,
                destinationId: true,
                createdAt: true,
                destination: {
                    select: {
                        name: true,
                        city: true,
                        country: true,
                    }
                },
                tourCategories: {
                    select: {
                        category: {
                            select: {
                                name: true
                            }
                        }
                    }
                } 
            },
        });

        return tours;
    }

    static async getTourById(tour_id: number) {
        if (!tour_id) {
            throw new Error("Tour ID must be provided");
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
                durationDays: true,
                availableFrom: true,
                availableTo: true,
                destinationId: true,
                createdAt: true,
                destination: {
                    select: {
                        name: true,
                        city: true,
                        country: true,
                    }
                },
                tourCategories: {
                    select: {
                        category: {
                            select: {
                                name: true
                            }
                        }
                    }
                } 
            },
        });

        if (!tour) {
            throw new Error(`Tour with ID ${tour_id} not found`);
        }

        return tour;
    }

    static async getToursByCategory(categoryName: string) {
        if(!categoryName) {
            throw new Error("Category name must be provided");
        }

        const tours = await prisma.tour.findMany({
            where: {
                tourCategories: {
                    some: {
                        category: {
                            name: categoryName
                        }
                    }
                }
            },
            select: {
                id: true,
                title: true,
                description: true,
                price: true,
                durationDays: true,
                availableFrom: true,
                availableTo: true,
                destinationId: true,
                createdAt: true,
                destination: {
                    select: {
                        name: true,
                        city: true,
                        country: true,
                    }
                },
                tourCategories: {
                    select: {
                        category: {
                            select: {
                                name: true
                            }
                        }
                    }
                } 
            },
        });

        if (tours.length === 0) {
            throw new Error(`No tours found for category ${categoryName}`);
        }

        return tours;
    }
}

export { TourService };