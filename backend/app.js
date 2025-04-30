import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import pool from './db.js';
const app = express()

// Configuração do CORS
app.use(cors({
   origin: 'http://localhost:5173',
   methods: ['GET', 'POST', 'PUT', 'DELETE'],
   credentials: true
}));

app.use(express.json())

let data = []
// Middleware para registrar os dados recebidos
app.post('/',async (req , res)=>{
   data = req.body
   const { email, senha, user } = req.body

   try{
    await pool.query( 'INSERT INTO usuarios (email,senhar,usuario) VALUES ($1,$2,$3) RETURNING *', [email,senha,user])
   }
   catch(err){
      return res.status(500).json({
         message: 'Erro ao salvar no banco de dados',
         error: err.message, 
         stack: err.stack,    
      });
   }

   res.status(200).json({
      message: 'Dados recebidos com sucesso',
      data: data
  
})})

app.get('/',async(req,res)=>{
   res.status(200).json(data);
   if(req.method === 'GET'){
   //   await pool.query('SELECT * FROM usuarios WHERE email = $1', [])
   }
})
export default app