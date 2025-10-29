import pool from "../db.js";
import type { Request, Response } from "express";
const gamesRegister = async (req: Request, res: Response) => {
  const { descrição, GameName, Url, genero, valor, lançamento, logo, trailer } =
    req.body;
  const data = await pool.query(
    "INSERT INTO jogos (titulo,descricao,imagem_url,categoria,criado_em,preco,trailer,logo) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)",
    [GameName, descrição, Url, genero, lançamento, valor, trailer, logo]
  );

  res.status(200).json(data);
};

export default gamesRegister;
