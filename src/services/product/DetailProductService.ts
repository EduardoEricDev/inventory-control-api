import prismaClient from "../../prisma";

interface DetailProductRequest {
	product_id: string;
}

class DetailProductService {
	async execute({ product_id }: DetailProductRequest) {
		const product = await prismaClient.product.findFirst({
			where: {
				id: product_id,
			},
			select: {
                id: true,
                name: true,
                price: true,
                description: true,
                banner: true,
                amount: true,
                category_id: true,
            },
		});

        return product
	}
}

export { DetailProductService };