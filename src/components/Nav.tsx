import Carrinho from '../assets/logo/carrinho-de-compras.png'
import {Link } from 'react-router-dom'
import Usuario from '../assets/logo/usuario.png'
import Newlogo from '../assets/logo/WhatsApp Image 2025-04-16 at 23.08.41.jpeg'
import {useState } from 'react'
import { useQuery } from '@tanstack/react-query'
function Nav() {
    const {data} = useQuery({
        queryKey : ["data"],
        queryFn : async () => {
        const res = await fetch('http://localhost:3000')
        const result = await res.json()
        console.log(result)
        if(result[0].user){
            setlogin(true)
        }
        return result
        
}})  
    const [isLoged ,setlogin] = useState <Boolean>(false)
    const [isVisible, setVisible] = useState <Boolean>(false)
    
    

    return (
        
        <nav className="w-full bg-black h-20 flex z-10 top-0 fixed">
            <Link to="/" className='flex cursor-pointer'>
                <img className='w-36 h-12 mt-6 ml-5' src={Newlogo} alt="Gamers Logo"/>
            </Link>

            
            <Link to="/cart" className='size-8 ml-auto mt-11 mr-3 cursor-pointer '>
                <img src={Carrinho}  alt="Shopping Cart"/>
            </Link>
            <div>
                {
                    isLoged == true ? (
                        <div className='flex mr-3 ' onMouseEnter={()=> setVisible(true)} onMouseLeave={()=> setVisible(false)} >
                            <img className='size-11 mt-9   cursor-pointer ' src={Usuario}></img>
                            <p className='text-white mt-12 font-bold'>{data[0].user}</p>
                            {
                            isVisible && (
                                <ul className="absolute top-20 group-hover:block bg-gray-300 text-black shadow-lg rounded-md w-24 font-semibold">
                                    <li className="py-2 px-4 hover:bg-purple-600 hover:rounded-md cursor-pointer">Perfil</li>
                                    <li className="py-2 px-4 hover:bg-purple-600 hover:rounded-md cursor-pointer ">Config</li>
                                    <li className="py-2 px-4 hover:bg-purple-600 hover:rounded-md cursor-pointer" onClick={()=> setlogin(false)}>Sair</li>                        
                                </ul>
                            
                            )
                            }
                        </div>

                    ) : (
                        <div className='flex mr-3 mt-12'>
                            <Link to="/login" className='flex mr-3 text-white '>Entrar    | </Link> 
                            <Link to="/createAccount" className='flex mr-3 text-white'>Registrar</Link>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}

export default Nav
