import jwt from "jsonwebtoken";
import type { Request, Response } from "express";
import pool from "../db.js";
export const emailVerification = async (req: Request, res: Response) => {
  const { token } = req.query;
  const decode = jwt.decode(token, process.env.KEY_TOKEN);
  const { email, senha, user } = decode;
  const result = await pool.query(
    "INSERT INTO usuarios (email,senhar,usuario) VALUES ($1,$2,$3) RETURNING *",
    [email, senha, user]
  );
  res.status(201).send("Usuario cadastrado");
};
