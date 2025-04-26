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
   data.push(req.body)
   const { email, senha, usuario } = req.body
   try{
    await Pool.query('INSERT INTO usuarios (email,senhar,usuario) VALUES ($1, $2, $3) RETURNING *', [email,senha,usuario])
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