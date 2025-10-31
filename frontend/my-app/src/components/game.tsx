"use client";
import Carrinho from "@public/carrinho.png";
import { FunctionComponent, useState } from "react";
import slugify from "../slugify";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
interface CartInterface {
  imageUrl: string | Blob | undefined;
  name?: string;
  isInvisible?: boolean;
  gameid?: number;
  width?: string;
  height?: string;
}
const Options = ({
  imageUrl,
  name,
  isInvisible,
  gameid,
  width,
  height,
}: CartInterface) => {
  const CartFunction = async () => {
    // const db = await dbPromise;
    // await db.put("jogos", {
    //   id: gameid,
    //   gamename: game,
    // });
  };
  return (
    <Link href={`/game/${slugify(name!)}/${gameid}`}>
      <div
        className="overflow-hidden scale-90  transform transition-all hover:brightness-50 rounded-xl"
        style={{ width: `${width}`, height: `${height}` }}
      >
        <img className="rounded-lg  size-full" src={imageUrl} alt="Jogo" />
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
