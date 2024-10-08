import prisma from "../prisma/prismaClient";
import { Review } from "../models/reviewModel";

class ReviewService {
    static async listReviews() {
        return await prisma.review.findMany({
            select: {
                id: true,
                servicesRating: true,
                locationsRating: true,
                amenitiesRating: true,
                pricesRating: true,
                roomRating: true,
                comment: true,
                isAnonymous: true,
                user: {
                    select: {
                        firebaseUid: true,
                        name: true,
                        email: true,
                    }
                },
                tour: {
                    select: {
                        id: true,
                        title: true,
                    }
                }
            }
        });
    }

    static async getReviewById(review_id: number) {
        if (!review_id) {
            throw new Error("Review ID must be provided");
        }

        const review = await prisma.review.findUnique({
            where: {
                id: review_id
            },
            select: {
                id: true,
                servicesRating: true,
                locationsRating: true,
                amenitiesRating: true,
                pricesRating: true,
                roomRating: true,
                comment: true,
                isAnonymous: true,
                user: {
                    select: {
                        firebaseUid: true,
                        name: true,
                        email: true,
                    }
                },
                tour: {
                    select: {
                        id: true,
                        title: true,
                    }
                }
            }
        });

        if (!review) {
            throw new Error(`Review with ID ${review_id} not found`);
        }

        return review;
    }

    static async getReviewByTour(tourId: number) {
        if(!tourId) {
            throw new Error("Tour ID must be provided");
        }
        
        const reviews = await prisma.review.findMany({
            where: { tourId },
            select: {
                id: true,
                servicesRating: true,
                locationsRating: true,
                amenitiesRating: true,
                pricesRating: true,
                roomRating: true,
                comment: true,
                isAnonymous: true,
                user: {
                    select: {
                        firebaseUid: true,
                        name: true,
                        email: true,
                    }
                },
                tour: {
                    select: {
                        id: true,
                        title: true,
                    }
                }
            }
        })
        return reviews;
    }
}

export { ReviewService };