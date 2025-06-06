import Options from "./options"
import MyContext from "@/context/gamesContext"
import { useContext } from "react"
function Layout (){
    const data = useContext(MyContext)

    return (
        <main className="ml-auto mr-auto w-[76%] ">
          <h5 className="text-white pl-4 mb-6 font-extrabold">Jogos De Tirar O fôlego</h5>
              
             <section className="flex justify-evenly">
              {  
                data &&  (
                  data.map((game)=>(
                    game.categoria === "Ação" ? (
                      
                        <div className="ml-3 " key={game.id}>
                            <Options 
                             imageUrl={game.imagem_url} game={game.titulo} gameid={game.id}/>
                            <div className=" h-16 ">
                                <p className="text-white font-bold mt-2 ml-2 " >{game.titulo}</p>
                            </div>
                            <p className="text-white text-left font-medium ml-2 " >{game.preco}</p>

                        </div>
                    ): null
                  ))
                )}
              
            </section>
              
            </main> 
    )

}

export default Layout