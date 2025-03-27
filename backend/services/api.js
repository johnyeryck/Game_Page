import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors({
   origin: 'http://localhost:5173',
   methods: ['GET', 'POST', 'PUT', 'DELETE'],
   credentials: true
}));

app.use(express.json())


let data = {
   
}
app.post('/',(req , res)=>{
   data = req.body;
  
})

app.get('/',(req,res)=>{
   res.status(200).json(data) 
})
app.listen(3000 , ()=>{
   console.log('rodando')
})