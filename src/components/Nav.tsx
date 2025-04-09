import Hub from '../assets/logo/hub.png'
import Gamers from '../assets/logo/gamers.png'
import Carrinho from '../assets/logo/carrinho-de-compras.png'
import {Link } from 'react-router-dom'
import Usuario from '../assets/logo/usuario.png'
import { useEffect, useState } from 'react'
function Nav() {
    const [isLoged ,setlogin] = useState <Boolean>(false)
    const [isVisible, setVisible] = useState <Boolean>(false)
    const [user ,setUser]= useState<string>("Algostinho")
    
    

    return (
        
        <nav className="w-full bg-black h-20 flex z-10 top-0 fixed ">
            <div className='flex'>
            <Link to="/" className='flex cursor-pointer'>
                <img className='w-36 h-9 mt-10 ml-5' src={Gamers} alt="Gamers Logo"/>
                <img src={Hub} className='h-9 mt-10' alt="Hub Logo"/>
            </Link>

            </div>
            
            <Link to="/cart" className='size-8 ml-auto mt-11 mr-3 cursor-pointer '>
                <img src={Carrinho}  alt="Shopping Cart"/>
            </Link>
            <div onMouseEnter={()=> setVisible(true)} onMouseLeave={()=> setVisible(false)} className="relative group">
                {
                    isLoged &&(
                        <div className='flex mr-3 '>
                            <img className='size-11 mt-9   cursor-pointer ' src={Usuario}></img>
                            <p className='text-white mt-12 font-bold'>{user}</p>
                        </div>

                    )
                }
                {
                isVisible && (
                    <ul className="absolute left-0 group-hover:block bg-gray-300 text-black shadow-lg rounded-md w-24 font-semibold">
                        <li className="py-2 px-4 hover:bg-purple-600 hover:rounded-md cursor-pointer">Perfil</li>
                        <li className="py-2 px-4 hover:bg-purple-600 hover:rounded-md cursor-pointer ">Config</li>
                        <li className="py-2 px-4 hover:bg-purple-600 hover:rounded-md cursor-pointer" onClick={()=>{
                            setUser("")
                        }}>Sair</li>                        
                    </ul>

                )
                }
            </div>
        </nav>
    )
}

export default Nav
