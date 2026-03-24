import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma";
import { AppError } from "../../errors/AppError";

interface AuthRequest {
	email: string;
	password: string;
}

class AuthRequestService {
	async execute({ email, password }: AuthRequest) {
		//Verifica se o email existe
		const user = await prismaClient.user.findFirst({
			where: {
				email: email,
			},
		});

		if (!user) {
			throw new AppError("Email or password incorrect!", 401);
		}

		//Comparar senha digitada com a do banco
		const passwordMatch = await compare(password, user.password);

		if (!passwordMatch) {
			throw new AppError("Email or password incorrect!", 401);
		}

		//Gerar token JWT
		const token = sign(
			{
				name: user.name,
				email: user.email,
			},
			process.env.JWT_SECRET as string,
			{
				subject: user.id,
				expiresIn: "30d",
			},
		);

		return {
			id: user.id,
			name: user.name,
			email: user.email,
			token: token,
		};
	}
}

export { AuthRequestService };
