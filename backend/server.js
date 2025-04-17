import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
const port = process.env.PORT || 3000;
const app = express()

app.use(cors({
   origin: 'http://localhost:5173',
   methods: ['GET', 'POST', 'PUT', 'DELETE'],
   credentials: true
}));

app.use(express.json())

app.listen(port , ()=>{
   console.log('rodando')
})

let data = []
   // Middleware para processar o corpo da requisição
app.post('/',(req , res)=>{

   data = [...data, req.body]
   

   res.status(200).json({
      message: 'Dados recebidos com sucesso',
      data: data
  
})})


 
app.get('/DataGames',(req , res)=>{
   res.status(200).json("cucabeludo")
})

app.get('/',(req,res)=>{
   res.status(200).json(data) 
})
