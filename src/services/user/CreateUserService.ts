import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
import { UserRequest } from "../../models/interfaces/user/UserRequest";

class CreateUserService {
	async execute({ name, email, password }: UserRequest) {
		//Verifica se o usuário já existe
		const userAlreadyExists = await prismaClient.user.findFirst({
			where: {
				email: email,
			},
		});

		if (userAlreadyExists) {
			throw new Error("User already exists!");
		}

		//Encripta a senha
		const passwordHash = await hash(password, 8);

		//Cria o usuário no banco
		const user = await prismaClient.user.create({
			data: {
				name: name,
				email: email,
				password: passwordHash,
			},
			select: {
				id: true,
				name: true,
				email: true,
			},
		});

        return user;
	}
}

export { CreateUserService };
