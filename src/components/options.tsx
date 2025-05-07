import Carrinho from "../assets/logo/carrinho-de-compras.png";

function Options({ imageUrl }: { imageUrl: string }) {
      return(

    <section className="h-72 mb-20 w-1/3  transform transition-all hover:scale-110 rounded-xl   border-2 border-purple-500">
      <img className=" rounded-2xl size-full" src={imageUrl}></img>
      <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full size-8 cursor-pointer  ">
        <img src={Carrinho} alt="Adicionar ao carrinho" />
      </button>
    </section>
      )
}

export default Options;
