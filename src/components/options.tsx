import Carrinho from "../assets/logo/carrinho-de-compras.png";
import { FunctionComponent } from "react";
interface CartInterface{
  imageUrl : string | undefined,
  gameID? : number 
}
const  Options : FunctionComponent<CartInterface>=({imageUrl , gameID})=> {
      const CartFunction = ()=>{
        alert("adicionado ao carinho")
      }
      return(
          <div className="h-60  w-48 transform transition-all hover:scale-110 rounded-xl  ">
              <img className=" rounded-2xl size-full" src={imageUrl}/>
              <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full size-8 cursor-pointer"  onClick={()=>CartFunction()} ><img src={Carrinho} alt="Adicionar ao carrinho" /></button>
          </div>
      )
}

export default Options;
