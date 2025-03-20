import express from 'express'

const app = express()
app.use(express.json());

app.get('/',(req,res)=>{
   res.status(200).json("hello world") 
})
app.listen(3000)