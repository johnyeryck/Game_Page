import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import pool from './db.js';
const app = express()
app.use(express.json())
// Configuração do CORS
app.use(cors({
   origin: 'http://localhost:5173',
   methods: ['GET', 'POST', 'PUT', 'DELETE'],
   credentials: true
}));

// Middleware para registrar os dados recebidos
app.post('cadastros/',async (req , res)=>{
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
   
   
   app.post('/login',async(req,res)=>{
      const { email, senha } = req.body
   if(req.method === 'POST'){
     const result = await pool.query('SELECT * FROM usuarios WHERE email = $1 AND senhar = $2', [email,senha]);
       if(result.rows.length > 0){
         res.status(200).json({
             message: 'Login bem-sucedido',
             data: result.rows
         })
   }}})
export default app