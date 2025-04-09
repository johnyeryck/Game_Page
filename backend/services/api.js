import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors({
   origin: 'http://localhost:5173',
   methods: ['GET', 'POST', 'PUT', 'DELETE'],
   credentials: true
}));

app.use(express.json())


let data = []
   // Middleware para processar o corpo da requisição
app.post('/',(req , res)=>{

   data = [...data, req.body]
   

   res.status(200).json({
      message: 'Dados recebidos com sucesso',
      data: data
  
})})

const games = [
   {
      nome: "Sekiro: Shadows Die Twice",
      descricao: "Sekiro é um jogo de ação e aventura desafiador, desenvolvido pela FromSoftware, onde o jogador assume o papel de um shinobi em busca de vingança no Japão feudal.",
      img : "https://images5.alphacoders.com/100/1004016.jpg"
  },
  {
      nome: "God of War",
      descricao: "God of War segue a jornada de Kratos e seu filho Atreus em uma mitologia nórdica, misturando combate brutal com uma narrativa profunda e emocionante.",
      img : "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/LsaRVLF2IU2L1FNtu9d3MKLq.jpg"
  },
  {
     nome: "The Last of Us Part II",
    descricao : "The Last of Us Part II é um jogo de ação e aventura que segue Ellie, agora com 19 anos, em uma jornada de vingança após uma tragédia devastadora. A história explora temas de perda, vingança e perdão em um mundo pós-apocalíptico.",
     img: "https://pixelz.cc/wp-content/uploads/2024/02/the-last-of-us-part-2-remastered-ellie-uhd-4k-wallpaper.jpg"
 },
  {
      nome: "Elden Ring",
      descricao: "Elden Ring, desenvolvido pela FromSoftware, oferece um vasto mundo aberto, misturando a exploração de ambientes abertos com a difícil mecânica de combate de seus predecessores.",
      img: 'https://c4.wallpaperflare.com/wallpaper/489/876/39/elden-ring-from-software-fromsoftware-hd-wallpaper-preview.jpg'
  },
  {
      nome: "Hollow Knight",
      descricao: "Hollow Knight é um jogo de ação e aventura estilo metroidvania, onde você explora um vasto mundo subterrâneo cheio de mistérios e inimigos desafiadores.",
      img : "https://c4.wallpaperflare.com/wallpaper/218/73/196/video-game-hollow-knight-hd-wallpaper-preview.jpg"
  },
  {
      nome: "Spider-Man",
      descricao: "Spider-Man é um jogo de ação em mundo aberto onde você controla o icônico herói, Peter Parker, enfrentando vilões e explorando a cidade de Nova York.",
      img : "https://c4.wallpaperflare.com/wallpaper/123/401/79/video-games-digital-art-spider-man-marvel-comics-wallpaper-preview.jpg"
  },
  {
      nome: "Ghost of Tsushima",
      descricao: "Ghost of Tsushima é um jogo de ação e aventura no Japão feudal, onde você interpreta Jin Sakai, um samurai em busca de proteger sua terra contra invasores mongóis.",
      img : "https://c4.wallpaperflare.com/wallpaper/139/265/83/video-game-ghost-of-tsushima-hd-wallpaper-preview.jpg"
  },
  {
      nome: "Red Dead Redemption 2",
      descricao: "Red Dead Redemption 2 é um épico de ação e aventura ambientado no final do século 19, onde você vive como Arthur Morgan, um fora da lei em busca de sobrevivência e redenção.",
      img : "https://c4.wallpaperflare.com/wallpaper/740/918/401/digital-art-artwork-red-dead-redemption-red-dead-redemption-2-arthur-morgan-hd-wallpaper-preview.jpg"
  }
]
 
app.get('/DataGames',(req , res)=>{
   res.status(200).json(games)
})

app.get('/',(req,res)=>{
   res.status(200).json(data) 
})
app.listen(3000 , ()=>{
   console.log('rodando')
})
