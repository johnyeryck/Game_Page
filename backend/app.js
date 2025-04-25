const express = require('express');
const cors = require('cors');
const Pool = require('./db')
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

   data = [...data,req.body]
   try{
   const result = await Pool.query('INSERT INTO usuarios (email,senha, usuario) VALUES ($1, $2, $3) RETURNING *', [data.email, data.senha, data.usuario])
   console.log(result.rows[0])
   }catch{

   }

   res.status(200).json({
      message: 'Dados recebidos com sucesso',
      data: data
  
})})
   

app.get('/',(req,res)=>{
   res.status(200).json(data) 
})

module.exports = app