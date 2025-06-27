import Options from "@/components/options";
import MyContext from "@/context/gamesContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Years18 from '../assets/classification/numero-18.png'
function BuyPage(){
   const { slug } =  useParams();
   const slugComp = slug?.replace(/-/g," ")
   const data = useContext(MyContext)
    return(
        <header className="border">
            {
                data && data.length > 0 ?(
                    data.map((item)=>(
                        item.titulo === slugComp ? (
                           <div className="w-1/2 mr-auto text-white ml-10 mt-10" >
                                <div className="flex">
                                        <Options imageUrl={item.imagem_url} isInvisible/>
                                        <div className="ml-3">
                                        <h1 className="mt-2 text-white font-extrabold ml-2 prettierFONT">{item.titulo}</h1>
                                        <img src={Years18} className="size-8 border rounded-2xl bg-white ml-2" />
                                        </div>
                                </div>


                                <video src="" controls width="full" height={500} autoPlay={true} className="border-2  rounded-2xl mt-20">
                                    <source src="https://assets.ign.com/videos/zencoder/2025/05/06/1920/7278459c-d7f6-491f-b1fc-1b7bc487e4b5-1746538785.mp4" />
                                </video>
                                <p className="font-sans mt-6">{item.descricao}</p>
                            </div>
                        ): null
                    ))
                ): null
            }
        
        </header>
        
    )
}

export default BuyPage;