import type { Request, Response } from "express";
import pool from "../db.js";
export const GetGames = async (req: Request, res: Response) => {
  const fetch = await pool.query(
    "SELECT titulo , categoria , id ,imagem_url, preco FROM jogos"
  );
  const data: {
    titulo: string;
    id: number;
    categoria: string;
    preco: string;
    image_url: string;
  }[] = fetch.rows;
  res.status(200).json(data);
};
