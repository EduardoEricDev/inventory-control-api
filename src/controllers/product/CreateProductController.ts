import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";
import { CreateProductSchema } from "../../schemas/product/ProductSchema";

class CreateProductController {
	async handle(req: Request, res: Response) {
		const { name, price, description, category_id, amount } = CreateProductSchema.parse(req.body);
		if (!req.file) {
			throw new Error("Erro ao fazer upload da imagem");
		}
		const { filename: banner } = req.file;
        const createProductService = new CreateProductService();
        const product = await createProductService.execute({
            name,
            price,
            description,
            banner,
            category_id,
            amount: parseInt(amount),
        });

        return res.json(product);
	}
}

export { CreateProductController };
