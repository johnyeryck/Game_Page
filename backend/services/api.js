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
   jogo : "sekiro",
   description : "Jogo do Ano - The Game Awards 2019 Melhor Jogo de Ação de 2019 - IGN Trilhe seu próprio caminho de vingança nesta premiada aventura da FromSoftware, os criadores de Bloodborne e da franquia Dark Souls. Obtenha vingança. Retome sua honra. Mate astuciosamente. ",
   img : "https://www.wallpaperflare.com/video-game-sekiro-shadows-die-twice-wallpaper-glamc"

}


app.get('/',(req,res)=>{
   res.status(200).json(data) 
})
app.listen(3000 , ()=>{
   console.log('rodando')
})