import { Router, Request, Response } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";

// --- Imports de Controllers ---
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthRequestController } from "./controllers/auth/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { EditCategoryController } from "./controllers/category/EditCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { DetailCategoryController } from "./controllers/category/DetailCategoryController";
import { RemoveCategoryController } from "./controllers/category/RemoveCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { EditProductController } from "./controllers/product/EditProductController";
import { ListProductByCategoryIdController } from "./controllers/product/ListProductByCategoryIdController";
import { ListProductController } from "./controllers/product/ListProductController";
import { RemoveProductController } from "./controllers/product/RemoveProductController";
import { DetailProductController } from "./controllers/product/DetailProductController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

// --- [GET] LEITURA E CONSULTAS ---
router.get("/me", isAuthenticated, new DetailUserController().handle); // Detalhes do usuário
router.get("/category", isAuthenticated, new ListCategoryController().handle); // Listar categorias

// Atenção à prioridade: Rota estática antes da dinâmica
router.get("/category/product", isAuthenticated, new ListProductByCategoryIdController().handle); // Produtos por categoria
router.get("/category/:category_id", isAuthenticated, new DetailCategoryController().handle); // Detalhes da categoria
router.get("/product", isAuthenticated, new ListProductController().handle); // Listar produtos
router.get("/product/:product_id", isAuthenticated, new DetailProductController().handle); // Detalhes do produto

// --- [POST] CRIAÇÃO E PROCESSAMENTO ---
router.post("/user", new CreateUserController().handle); // Cadastro de usuário
router.post("/session", new AuthRequestController().handle); // Login
router.post("/category", isAuthenticated, new CreateCategoryController().handle); // Nova categoria
router.post("/product", isAuthenticated, upload.single("file"), new CreateProductController().handle); // Novo produto

// --- [PUT] ATUALIZAÇÃO ---
router.put("/category/:category_id", isAuthenticated, new EditCategoryController().handle); // Editar categoria
router.put("/product/:product_id", isAuthenticated, upload.single("file"), new EditProductController().handle); // Editar produto

// --- [DELETE] REMOÇÃO ---
router.delete("/user/:user_id", isAuthenticated, new RemoveUserController().handle); // Remover usuário
router.delete("/category/:category_id", isAuthenticated, new RemoveCategoryController().handle); // Remover categoria
router.delete("/product/:product_id", isAuthenticated, new RemoveProductController().handle); // Remover produto

export { router };