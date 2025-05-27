import { useQuery } from "@tanstack/react-query"
import Options from "./options"
import DataGames from "@/interfaces"
function Layout (){
    const { data} = useQuery<DataGames[] | undefined>({
    queryKey: ['games'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/games', {
        method : "GET"
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      
      return response.json()
    }
  })
  console.log(data)
    return (
        <main className="ml-auto mr-auto w-[85%] ">
          <h5 className="text-white pl-4 mb-6 font-extrabold">Jogos De Tirar O fôlego</h5>
              
             <section className="flex justify-evenly">
              {  
                data && (
                  data.map((game)=>(
                    <div className="ml-3 ">
                        <Options  imageUrl={game.imagem_url}  />
                        <p className="text-white font-bold mt-6 ml-2 " >{game.titulo}</p>
                        <p className="text-white text-left font-bold ml-3 " >{game.preco}</p>
                    </div>

                  ))
              )}
            </section>
              
            </main> 
    )

}

export default Layout