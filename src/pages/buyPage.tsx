import Options from "@/components/options";
import MyContext from "@/context/gamesContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

function BuyPage(){
   const { slug } =  useParams();
   const slugComp = slug?.replace(/-/g," ")
   const data = useContext(MyContext)
    return(
        <div className="border">
            {
                data && data.length > 0 ?(
                    data.map((item)=>(
                        item.titulo === slugComp ? (
                            <div>
                                <Options imageUrl={item.imagem_url} isInvisible={true}/>

                            </div>
                        ): null
                    ))
                ): null
            }
        
        </div>
        
    )
}

export default BuyPage;