import { Router } from "express";
import createUser from "../controllers/cadastroController.js";
import emailVerification from "../controllers/verifyEmail.js";
const router = Router();

router.post("/", createUser);

export default router;
