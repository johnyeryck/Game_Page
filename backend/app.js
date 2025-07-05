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
  res.status(200).send("hello");
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
app.post("/confirmar",async  (req,res)=>{
             const { token } = req.query; 
             console.log(token)
                const decode = jwt.decode(token, process.env.KEY_TOKEN);
                
                const { email, senha, user } = decode;
                console.log(senha)
                 const result =  await pool.query(
                      "INSERT INTO usuarios (email,senhar,usuario) VALUES ($1,$2,$3) RETURNING *",
                      [email, senha, user],
                      );
        res.status(200).send("Usuario cadastrado")
        console.log(result.rows)
        
})
app.get("/confirmar", (req, res) => {
  res.status(200).send("teste");
});

//
let data = [];
app.post("/games", async (req, res) => {
  const { descrição, GameName, Url, genero, valor, lançamento, logo, trailer } = req.body;
  data = req.body;
  await pool.query(
    "INSERT INTO jogos (titulo,descricao,imagem_url,categoria,criado_em,preco,trailer,logo) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)",
    [GameName, descrição, Url, genero, lançamento,valor,trailer,logo],
  );
});

app.get("/games", async (req, res) => {
    const response = await pool.query("SELECT * FROM jogos");
    res.status(200).json(response.rows);
});

export default app;
