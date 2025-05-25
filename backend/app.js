import express, { Router } from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/cadastros.js";
import LoginRouter from "./routes/loginRouter.js"
import pool from "./db.js";
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


app.get("/", (req, res)=>{
  res.status(200).send('hewllo')
})

// 
app.use("/cadastros" , router)
app.get("/cadastros" , (req , res)=>{
   res.status(200).send("Cadastros de usuarios")
})
// 
app.use("/login" , LoginRouter)
app.get("/login" , (req , res)=>{
  res.status(200).send("Login System")
})
//
let data = []
app.post("/games" , async(req , res)=>{
  const {descrição , GameName ,Url ,genero , valor , lançamento} = req.body;
  data = req.body
  await pool.query("INSERT INTO jogos (titulo,descricao,imagem_url,categoria,criado_em,preco) VALUES ($1,$2,$3,$4,$5,$6)" ,
    [GameName ,descrição , Url , genero , lançamento,valor] 
  )

})

app.get("/games" ,async (req, res)=>{
  console.log(req.method)
  if(req.method == "GET"){
    const response = await pool.query("SELECT * FROM jogos WHERE categoria = $1",["Ação"]
    )
    res.status(200).json(response.rows)
  }
})



export default app;
