"use client";
import Carrinho from "@public/carrinho.png";
import { FunctionComponent, useState } from "react";
import slugify from "../slugify";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { dbPromise } from "@/indexDb";
interface CartInterface {
  imageUrl: string | Blob | undefined;
  name?: string;
  HiddenCart?: boolean;
  gameid?: number;
  width?: string;
  height?: string;
}
const Options = ({
  imageUrl,
  name,
  HiddenCart,
  gameid,
  width,
  height,
}: CartInterface) => {
  const CartFunction = async () => {
    const db = await dbPromise;
    await db.put("jogos", {
      id: gameid,
      gamename: name,
    });
  };
  return (
    <Link href={`/game/${slugify(name || "")}/${gameid}`}>
      <div
        className="overflow-hidden scale-90  transform transition-all hover:brightness-50 rounded-xl"
        style={{ width: `${width}`, height: `${height}` }}
      >
        <img className="rounded-lg  size-full" src={imageUrl} alt="Jogo" />
        <button
          className="absolute bottom-4 right-4 bg-white p-2 rounded-full size-8 cursor-pointer border border-purple-600"
          hidden={HiddenCart}
          onClick={() => CartFunction()}
        >
          <Image src={Carrinho} alt="Adicionar ao carrinho" />
        </button>
      </div>
    </Link>
  );
};

export default Options;
