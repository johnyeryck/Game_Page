import Carrinho from "../assets/logo/carrinho-de-compras.png";
import { FunctionComponent } from "react";
import { dbPromise } from "@/indexDb";
interface CartInterface{
  imageUrl : string | undefined,
  game?: string,
  isInvisible? : boolean,
  gameid? : number 
}
const Options : FunctionComponent<CartInterface>=({imageUrl ,game, isInvisible , gameid })=> {
  
  const CartFunction = async()=>{
    alert("adicionado ao carinho")
    const db = await dbPromise
    await db.put('jogos',{
      id : gameid,
      gamename : game
    })
  }
      


      return(
          <div className="h-60  w-48 transform transition-all hover:scale-110 rounded-xl  ">
              <img className=" rounded-2xl size-full" src={imageUrl}/>
              <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full size-8 cursor-pointer "  hidden={isInvisible}  onClick={()=>CartFunction() } ><img src={Carrinho} alt="Adicionar ao carrinho" /></button>
          </div>
      )
}

export default Options;