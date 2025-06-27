import Router from "express";
import emailVerification from "../controllers/verifyEmail.js";
const routerEmail = Router();
routerEmail.post("/", emailVerification);

export default routerEmail;
