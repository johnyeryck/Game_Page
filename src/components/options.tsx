import { OptionsGames } from '@/listimg'
import Carrinho from '../assets/logo/carrinho-de-compras.png'


function Options(){
    
    return(
        
    <section className="mt-auto ml-10 ">
        <button className='text-white font-bold flex ml-16' >Explorar</button>
            { OptionsGames.map((img , i)=>(
                <div  key={i}  className="h-72 mb-20 inline-flex  transform transition-all hover:scale-110 rounded-xl mt-12  ml-9">
                    <img src={img} className=" rounded-sm"></img>
                    <button className='absolute bottom-4 right-4 bg-white p-2 rounded-full size-8 cursor-pointer  ' > 
                        <img src={Carrinho} alt='Adicionar ao carrinho'/>
                    </button>
                </div>
            )

            )

            }

    </section>
    )
}

export default Options