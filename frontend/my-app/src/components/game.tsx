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
      <div className="overflow-hidden  transform transition-all hover:scale-110 rounded-xl ">
        <Image
          className=""
          src={imageUrl}
          alt="Jogo"
          width={200}
          height={100}
        />

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
