import Hub from '../img/logo/hub.png'
import Gamers from '../img/logo/gamers.png'
import Carrinho from '../img/logo/carrinho-de-compras.png'
function Nav (){
    return(
      <nav className="w-full bg-black h-20 flex backdrop-blur-lg ">
        <img className='w-36 h-9 mt-10 ml-5' src={Gamers}/>
        <img src={Hub} className='h-9 mt-10 '/>
        <button className='size-8 ml-auto mt-11 mr-28'>
          <img src={Carrinho} className='size'/>
        </button>
      </nav>
    )
}
export default Nav