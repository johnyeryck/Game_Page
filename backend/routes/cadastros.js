import { Router } from "express";
import createUser from "../controllers/cadastroController.js";
const router = Router();

router.post("/" , createUser);

export default router;