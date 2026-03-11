import { Request, Response } from "express";
import { RemoveUserService } from "../../services/user/RemoveUserService";
import { RemoveUserSchema } from "../../schemas";

class RemoveUserController {
	async handle(req: Request, res: Response) {
		const { user_id } = RemoveUserSchema.parse(req.query);
		const removeUserService = new RemoveUserService();
		const removeUser = await removeUserService.execute({ user_id });

		return res.json({
			message: `Usuário ${removeUser.name} foi removido com sucesso!`,
		});
	}
}

export { RemoveUserController };
