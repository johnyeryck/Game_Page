import Image from "next/image";
import Link from "next/link";
import Logo from "@public/logo2.png";
import Carrinho from "@public/carrinho.png";
// import HoverPerfil from "./hoverPerfil";
function Nav() {
  return (
    <header className="w-full bg-black h-20 flex  top-0 fixed ">
      <nav className="flex w-full h-1/2  m-auto">
        <Link href="/" className="flex  pl-2 cursor-pointer w-1/5">
          <Image className="" src={Logo} alt="Gamers Logo" />
        </Link>
        <article className="flex  ml-auto w-[15%]">
          <Link href="/cart" className=" w-1/5">
            <Image className="" src={Carrinho} alt="Gamers Logo" />
          </Link>
          {/* <HoverPerfil /> */}
        </article>
      </nav>
    </header>
  );
}

export default Nav;
