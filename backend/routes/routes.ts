import type { Request, Response } from "express";
import Router from "express";
import GameRegister from "../controllers/gamesRegister.js";
import { emailVerification } from "../controllers/confirmEmail.js";
import createUser from "../controllers/cadastroController.js";
import { GetGames } from "../controllers/getGames.js";

const router = Router();
router.get("/gameregister", GameRegister);
router.get("/confirmemail", emailVerification);
router.get("/", GetGames);
router.post("/createaccount", createUser);
export default router;
