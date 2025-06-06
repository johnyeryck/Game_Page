import { useContext } from "react"
import MyContext from "@/context/gamesContext"
import Options from "./options"

function Rpg (){
    const data = useContext(MyContext)
    return(
    <main className=" mt-60 mb-20">
        <h5 className="text-white font-extrabold ml-40 ">Historias Incríveis para se aventurar</h5>
        <section className="flex w-[76%] ml-auto mr-auto justify-evenly">

                { data && data.length > 0 ?(
                data.map((game)=>(
                    game.categoria === "RPG" ?(
                        
                        <div className="ml-3   " key={game.id}>
                            <Options  imageUrl={game.imagem_url} game={game.titulo}/>
                                <div className=" h-16 ">
                                    <p className="text-white font-bold mt-2 ml-2 " >{game.titulo}</p>
                                </div>
                            <p className="text-white text-left font-medium ml-2 " >{game.preco}</p>

                        </div>
                        ) : null
                    ))
                ): (null)
                }
        </section>
    </main>
    )
}

export default Rpg