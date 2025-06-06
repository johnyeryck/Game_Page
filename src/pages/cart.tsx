import Nav from "@/components/Nav";
import Options from "@/components/options";
import MyContext from "@/context/gamesContext";
import { dbPromise } from "@/indexDb";
import { useContext, useEffect, useState } from "react";

 function Cart() {
  interface jogoInterface {
    id? : number,
    gamename? : string
  }

  let isLoged = localStorage.getItem("isLoged")
  const [jogo , setjogo] = useState<jogoInterface[]>()
  const data = useContext(MyContext)
  useEffect(()=>{
   const fetchIDB = async()=>{
    const dbCall = await dbPromise
    const id= await dbCall.getAll('jogos')
    setjogo(id)
    console.log(id)
    }
    fetchIDB()
  },[])

  console.log(jogo)
  return (
      
    <header>
      <Nav/>
       <main className="mt-40 mb-20">

      {
        data && jogo && (
          data.map((game)=>(
             jogo.find((p) => p.id == game.id)?(
              <div className="border-2 rounded-lg w-2/4 mr-auto flex ml-10 border-purple-700 mt-10" >
                <Options imageUrl={game.imagem_url} isInvisible={true}/>
                <div className="flex-col">
                    <h1 className="text-white font-medium mt-2 ml-3">{game.titulo}</h1>
                    <p className="text-white mt-20 ml-3">{game.preco}</p>
                    
                </div>
              </div>
  
              ):null

          )

        ))
       }
          </main>
    </header>
      
    
  )
}

export default Cart;
