import prisma from "../prisma/prismaClient";

class CategoryService {
    static async listCategories() {
        const categories = await prisma.category.findMany({
            select: {
                id: true,
                name: true,
                tours: {
                    select: {
                        tour: {
                            select: {
                                title: true,
                                price: true,
                            }
                        }
                    }
                }
            },
        });

        return categories;
    }
}

export { CategoryService };
