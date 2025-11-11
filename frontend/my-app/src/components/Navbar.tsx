import Image from "next/image";
import Link from "next/link";
import Logo from "@public/logo2.png";
import Carrinho from "@public/carrinho.png";
import { dataInterface } from "@/context/context";

import {  useState } from "react";
import Game from "@components/game";
import slugify from "@/slugify";
import HoverPerfil from "./hoverPerfil";

type dataProps = Omit<dataInterface , "tags">
interface NavProps {
  data : dataProps[]
}
function Nav({data}:NavProps) {
  const [res, setRes] = useState<
    | { titulo: string; statics: { imagem_url: string }; id: number }[]
    | undefined
  >();

  const searchGames = (e: any) => {
    const value = e.target.value;

    const tituloLower = value.toLowerCase();

    const list = data?.filter((item) => {
      const verify = item.titulo.toLocaleLowerCase().includes(tituloLower);
      if (value.length > 0) {
        if (verify)
          return [item.titulo, item.statics.imagem_url, item.valor, item.id];
      }
    });
    const limit = list?.splice(0, 5);

    setRes(limit);
  };

  return (
    <header className="w-full bg-black h-20 flex  top-0 fixed z-10 shadow-2xl shadow-black">
      <nav className="flex w-full h-1/2  m-auto">
        <Link href="/" className="flex  pl-2 cursor-pointer w-1/6">
          <Image className="" src={Logo} alt="Gamers Logo" />
        </Link>
        <div className="w-1/3  mx-auto">
          <input
            type="search"
            onChange={searchGames}
            className="bg-[#0D0E1C] outline-0  px-3 rounded-2xl mx-auto border-purple-800 border size-full"
            placeholder="Search"
          />
          <section className="backdrop-blur-lg rounded-2xl mt-2">
            {res &&
              res.map((item) => (
                <Link
                  href={`/game/${slugify(item.titulo)}/${item.id}`}
                  className="pl-4 h-20 flex   pt-2 hover:border from-black to-transparent rounded-2xl  cursor-pointer"
                  key={item.id}
                >
                  <Game
                    imageUrl={item.statics.imagem_url}
                    height="60px"
                    width="50px"
                    HiddenCart
                  />
                  <p className="pl-2 my-auto">{item.titulo}</p>
                </Link>
              ))}
          </section>
        </div>
        <div className="flex  ml-auto w-[15%]">
          <Link href="/cart" className=" w-1/5 mr-2">
            <Image className="" src={Carrinho} alt="Gamers Logo" />
          </Link>
          <HoverPerfil />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
