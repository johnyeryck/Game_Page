import express, { Router } from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/cadastros.js";
import LoginRouter from "./routes/loginRouter.js";
import Verification from "./routes/verifyEmailrouter.js";
import pool from "./db.js";
import jwt from "jsonwebtoken";
import routerEmail from "./routes/verifyEmailrouter.js";
dotenv.config();

const app = express();
app.use(express.json());
// Configuração do CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.status(200).send("hewllo");
});

//
app.use("/cadastros", router);
app.get("/cadastros", (req, res) => {
  res.status(200).send("Cadastros de usuarios");
});
//
app.use("/login", LoginRouter);
app.get("/login", (req, res) => {
  res.status(200).send("Login System");
});
//
app.use("/confirmar", routerEmail)
app.get("/confirmar", (req, res) => {
  res.status(200).send("teste");
});

//
let data = [];
app.post("/games", async (req, res) => {
  const { descrição, GameName, Url, genero, valor, lançamento } = req.body;
  data = req.body;
  await pool.query(
    "INSERT INTO jogos (titulo,descricao,imagem_url,categoria,criado_em,preco) VALUES ($1,$2,$3,$4,$5,$6)",
    [GameName, descrição, Url, genero, lançamento, valor],
  );
});

app.get("/games", async (req, res) => {
    const response = await pool.query("SELECT * FROM jogos");
    res.status(200).json(response.rows);
});

export default app;
