import Options from "./options"
import MyContext from "@/context/gamesContext"
import { useContext } from "react"
function Layout (){
    const data = useContext(MyContext)
    console.log( typeof localStorage.getItem("idgame"))
    return (
        <main className="ml-auto mr-auto w-[80%] ">
          <h5 className="text-white pl-4 mb-6 font-extrabold">Jogos De Tirar O fôlego</h5>
              
             <section className="flex justify-evenly">
              {  
                data &&  (
                  data.map((game)=>(
                    game.categoria === "Ação" ? (
                        <div className="ml-3 " key={game.id}>
                            <Options  imageUrl={game.imagem_url} gameName={game.titulo}/>
                            <p className="text-white font-bold mt-6 ml-2 " >{game.titulo}</p>
                            <p className="text-white text-left font-bold ml-3 " >{game.preco}</p>
                        </div>
                    ): null
                  ))
                )}
              
            </section>
              
            </main> 
    )

}

export default Layout