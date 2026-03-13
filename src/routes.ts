import { Router, Request, Response } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthRequestController } from "./controllers/auth/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { EditCategoryController } from "./controllers/category/EditCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { RemoveCategoryController } from "./controllers/category/RemoveCategoryController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

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
router.post("/user", new CreateUserController().handle);
// Autenticação de usuário
router.post("/session", new AuthRequestController().handle);
// Buscar os dados do usuário logado
router.get("/me", isAuthenticated, new DetailUserController().handle);
// Remover usuário
router.delete("/user/:user_id", isAuthenticated, new RemoveUserController().handle);

// ** CATEGORY ROUTES **
// Criar categoria
router.post("/category", isAuthenticated, new CreateCategoryController().handle);
// Atualizar Categoria
router.put("/category/:category_id", isAuthenticated, new EditCategoryController().handle);
// Listar todas as categorias
router.get("/category", isAuthenticated, new ListCategoryController().handle);
// Remover categoria
router.delete("/category/:category_id", isAuthenticated, new RemoveCategoryController(). handle);

export { router };
