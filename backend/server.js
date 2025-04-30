import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.VITE_DB_USER)
const port = process.env.PORT || 3000;


app.listen(port , ()=>{
   console.log('rodando')
})


