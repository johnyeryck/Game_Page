import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import pool from './db.js';
const app = express()

app.use(cors({
   origin: 'http://localhost:5173',
   methods: ['GET', 'POST', 'PUT', 'DELETE'],
   credentials: true
}));

app.use(express.json())

let data = []
// Middleware para processar o corpo da requisição
app.post('/',async (req , res)=>{
   data.push(req.body)
   const { email, senha, usuario } = req.body
   try{
    await pool.query( 'INSERT INTO usuarios (id,email,senhar,usuario) VALUES ($1, $2, $3) RETURNING *', [email,senha,usuario])
   }catch(err){
      console.error('Erro ao inserir dados no banco:', err);  // Mostra o erro completo
      return res.status(500).json({
         message: 'Erro ao salvar no banco de dados',
         error: err.message,  // Mostra o erro específico
         stack: err.stack,    // Exibe o stack trace para detalhamento
      });
   }

   

   res.status(200).json({
      message: 'Dados recebidos com sucesso',
      data: data
  
})})
   

app.get('/',(req,res)=>{
   res.status(200).json(data) 
})
export default app