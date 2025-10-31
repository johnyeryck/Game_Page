import type { Request, Response } from "express";
import pool from "../db.js";
export const GetGames = async (req: Request, res: Response) => {
  const fetch = await pool.query(
    "SELECT titulo , categoria ,fullhd_img, logo , id ,imagem_url,valor FROM jogos"
  );
  const data: {
    titulo: string;
    id: number;
    categoria: string;
    valor: string;
    image_url: string;
    fullhd_img: string;
  }[] = fetch.rows;
  res.status(200).json(data);
};
