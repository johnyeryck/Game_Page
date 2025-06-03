import Nav from "@/components/Nav";
import Options from "@/components/options";
import MyContext from "@/context/gamesContext";
import { useContext } from "react";

function Cart() {
  let isLoged = localStorage.getItem("isLoged")
  const gameStorage = localStorage.getItem("idgame")
  const data = useContext(MyContext)
  return (
      
    <main>
      <Nav/>
      {
          data && (
            data.map((game)=>(
              game.titulo === gameStorage ? (
              <div className="" >
                <Options imageUrl={game.imagem_url} />
                <h1 className="text-white">{game.titulo}</h1>
              </div>
  
              ):null

          )

          )) 
      }
    </main>
      
    
  )
}

export default Cart;
