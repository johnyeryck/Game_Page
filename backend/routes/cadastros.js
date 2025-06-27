import { Router } from "express";
import createUser from "../controllers/cadastroController.js";
import emailVerification from "../controllers/verifyEmail.js";
import ratelimit from 'express-rate-limit'
const limit = ratelimit({
  windowMs : 1 * 60 * 1000,
  max : 1,
  message: "Espere"
 })
const router = Router();

router.post("/",limit,createUser);

export default router;
