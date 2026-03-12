import { Request, Response } from "express";
import { RemoveUserService } from "../../services/user/RemoveUserService";
import { RemoveUserSchema } from "../../schemas";

class RemoveUserController {
	async handle(req: Request, res: Response) {
		const { user_id } = RemoveUserSchema.parse({user_id: req.params.user_id});
        const loggedUserId = req.user_id;
        //Só pode deletar a própria conta
        if (user_id !== loggedUserId) {
            return res.status(401).json({ error: "Operação não permitida. Você só pode excluir sua própria conta." });
        }

		const removeUserService = new RemoveUserService();
		const removeUser = await removeUserService.execute({ user_id });

		return res.json({
			message: `Usuário ${removeUser.name} foi removido com sucesso!`,
		});
	}
}

export { RemoveUserController };
