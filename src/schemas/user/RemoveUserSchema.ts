import { z } from "zod";

export const RemoveUserSchema = z.object({
	user_id: z.uuid("Id inválido"),
});