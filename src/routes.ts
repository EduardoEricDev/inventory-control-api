import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthRequestController } from "./controllers/auth/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";

const router = Router();

// Rota de teste
// router.get("/teste", (request: Request, response: Response) => {
// 	return response.json({ ok: true });
// });

// Rota de teste de middleware de erro
// router.get("/teste", (request: Request, response: Response) => {
// 	throw new Error("teste de middleware");
// });

// ** USER ROUTES **
// Cadastro de usuário
router.post("/users", new CreateUserController().handle);
// Autenticação de usuário
router.post("/session", new AuthRequestController().handle);
// Buscar os dados do usuário logado
router.get("/me", isAuthenticated, new DetailUserController().handle);
// Remover usuário
router.delete("/remove", isAuthenticated, new RemoveUserController().handle);

// ** CATEGORY ROUTES **
// Criar categoria
router.post("/category", isAuthenticated, new CreateCategoryController().handle);

export { router };
