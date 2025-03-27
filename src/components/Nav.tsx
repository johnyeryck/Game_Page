import Hub from '../assets/logo/hub.png'
import Gamers from '../assets/logo/gamers.png'
import Carrinho from '../assets/logo/carrinho-de-compras.png'
import {Link } from 'react-router-dom'
import Usuario from '../assets/logo/usuario.png'
function Nav() {
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
                <img className='size-11 mt-9  mr-24 cursor- ' src={Usuario}></img>
        </nav>
    )
}

export default Nav
