import Carrinho from "../assets/logo/carrinho-de-compras.png";

function Options({ imageUrl }: { imageUrl: string | undefined }) {
      return(

    <section className="h-72  w-52 transform transition-all hover:scale-110 rounded-xl  ">
      <img className=" rounded-2xl size-full" src={imageUrl}></img>
      <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full size-8 cursor-pointer  ">
        <img src={Carrinho} alt="Adicionar ao carrinho" />
      </button>
    </section>
      )
}

export default Options;
