import pool from "../db.js";
import jwt from "jsonwebtoken";
import { emaildata } from "../middleware/nodemailerConfig/emailData.js";
import dotenv from "dotenv";
import type { Request, Response } from "express";
import { transporte } from "../middleware/nodemailerConfig/transporte.js";
import { EmailAlreadyExist } from "../middleware/errorHandle/handleErros.js";
import bcrypt from "bcrypt";
import { NotFound } from "../middleware/errorHandle/errorsDefault.js";
import GenerateCode from "../generateCode.js";

dotenv.config();

const createUser = async (req: Request, res: Response) => {
  const { email, senha, username } = req.body;
  const verification = await pool.query(
    "SELECT email FROM usuarios WHERE email = $1",
    [email]
  );
  if (verification.rowsCount > 0)
    throw new EmailAlreadyExist("Email já cadastrado");

  console.log(verification);
  const hash = bcrypt.hash(senha, 10);
  console.log(hash);
  console.log(GenerateCode);

  transporte.sendMail(
    emaildata(email, GenerateCode()),
    (error: any, info: any) => {
      if (error) throw new NotFound("Email não encontrado");
      res.status(200).send("Email de confirmação enviado");
    }
  );
};

export default createUser;
