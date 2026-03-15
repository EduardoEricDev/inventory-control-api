import prismaClient from "../../prisma";

interface EditProductRequest {
	product_id: string;
	name: string;
	price: number;
	description: string;
	banner?: string;
	amount: number;
    category_id: string;
}

class EditProductService {
	async execute({ product_id, name, price, description, banner, amount, }: EditProductRequest) {
        const productEdited = await prismaClient.product.update({
            where: {
                id: product_id,
            },
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                amount: amount,
            }
        });

        return productEdited;
    }
}

export { EditProductService };
