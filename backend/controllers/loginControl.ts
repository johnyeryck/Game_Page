import type { Request, Response } from "express";
import pool from "../db.js";

const loginSys = async (req: Request, res: Response) => {
  const { email, senha } = req.body;
  const result = await pool.query(
    "SELECT * FROM usuarios WHERE email = $1 AND senhar = $2",
    [email, senha]
  );
  if (result.rows.length > 0) {
    res.status(200).json({
      message: "Login bem-sucedido",

      data: result.rows[0].usuario,
    });
  }
};

export default loginSys;
