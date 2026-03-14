import prismaClient from "../../prisma";

interface RemoveUserRequest {
	user_id: string;
}

class RemoveUserService {
	async execute({ user_id }: RemoveUserRequest) {
		const userRemoved = await prismaClient.user.delete({
			where: {
				id: user_id,
			},
			select: {
				name: true,
			},
		});

		return userRemoved;
	}
}

export { RemoveUserService };
