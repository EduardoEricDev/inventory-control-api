import prismaClient from "../../prisma";
import { RemoveUserRequest } from "../../schemas";

class RemoveUserService {
	async execute({ user_id }: RemoveUserRequest) {
		const removeUser = await prismaClient.user.delete({
			where: {
				id: user_id,
			},
			select: {
				name: true,
			},
		});

		return removeUser;
	}
}

export { RemoveUserService };
