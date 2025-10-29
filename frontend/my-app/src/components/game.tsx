"use client";
import Carrinho from "@public/carrinho.png";
import { FunctionComponent, useState } from "react";
import slugify from "../slugify";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
interface CartInterface {
  imageUrl: string;
  name?: string;
  isInvisible?: boolean;
  gameid?: number;
}
const Options = ({ imageUrl, name, isInvisible, gameid }: CartInterface) => {
  const CartFunction = async () => {
    // const db = await dbPromise;
    // await db.put("jogos", {
    //   id: gameid,
    //   gamename: game,
    // });
  };
  return (
    <Link href={`/app/${slugify(name!)}/${gameid}`}>
      <div className="overflow-hidden h-60 w-50 scale-90  transform transition-all hover:brightness-50 rounded-xl">
        <img className="rounded-lg size-full" src={imageUrl} alt="Jogo" />
        <button
          className="absolute bottom-4 right-4 bg-white p-2 rounded-full size-8 cursor-pointer border border-purple-600"
          hidden={isInvisible}
          onClick={() => CartFunction()}
        >
          <Image src={Carrinho} alt="Adicionar ao carrinho" />
        </button>
      </div>
    </Link>
  );
};

export default Options;
