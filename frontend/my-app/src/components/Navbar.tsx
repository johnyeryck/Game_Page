import Image from "next/image";
import Link from "next/link";
import Logo from "@public/logo2.png";
import Carrinho from "@public/carrinho.png";
// import HoverPerfil from "./hoverPerfil";
function Nav() {
  return (
    <header className="w-full bg-black h-20 flex  top-0 fixed z-10 shadow-2xl shadow-black">
      <nav className="flex w-full h-1/2  m-auto">
        <Link href="/" className="flex  pl-2 cursor-pointer w-1/6">
          <Image className="" src={Logo} alt="Gamers Logo" />
        </Link>
        <input
          type="search"
          className="bg-[#0D0E1C] px-3 rounded-2xl mx-auto border-purple-800 border w-1/3"
          placeholder="Search"
        />
        <div className="flex  ml-auto w-[15%]">
          <Link href="/cart" className=" w-1/5">
            <Image className="" src={Carrinho} alt="Gamers Logo" />
          </Link>
          {/* <HoverPerfil /> */}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
