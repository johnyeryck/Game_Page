import { useContext } from "react"
import MyContext from "@/context/gamesContext"
import Options from "./options"

function Rpg (){
    const data = useContext(MyContext)
    console.log(data)
    return(
    <main className=" mt-60">
        <h5 className="text-white font-extrabold ml-40 ">Historias Incríveis para se aventurar</h5>
        <section className="flex w-[80%] ml-auto mr-auto justify-evenly">

                { data && data.length > 0 ?(
                data.map((game)=>(
                    game.categoria === "RPG" ?(
                        
                        <div className="ml-3 " key={game.id}>
                            <Options  imageUrl={game.imagem_url}  gameID={game.id}/>
                            <p className="text-white font-bold mt-6 ml-2 " >{game.titulo}</p>
                            <p className="text-white text-left font-bold ml-3 " >{game.preco}</p>
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