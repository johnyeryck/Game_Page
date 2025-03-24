import express from 'express'
import cors from 'cors'

// Habilita CORS para todas as origens
const app = express()
app.use(cors())
app.use(cors({
   origin: 'http://localhost:5173',
   methods: ['GET', 'POST', 'PUT', 'DELETE'],
   credentials: true
}));




const data = {
   

}


app.get('/',(req,res)=>{
   res.status(200).json(data) 
})
app.listen(3000 , ()=>{
   console.log('rodando')
})