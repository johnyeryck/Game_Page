import Usuario from "@/assets/logo/usuario.png";
import Link from "next/link";
import Image from "next/image";
interface HoverPerfil {
  UserisLoged?: boolean;
}
export default function HoverPerfil({}: HoverPerfil) {
  return (
    <>
      <nav className="flex  ml-auto m-auto ">
        <Link href="/login" className="flex mr-3 text-white ">
          Entrar
        </Link>
        <Link href="/criarconta" className="flex mr-3 text-white">
          | Registrar
        </Link>
      </nav>
      <div className="flex ">
        <p className="text-white mt-12 font-bold">Username</p>
        <Image
          className="size-11 mt-9 cursor-pointer "
          src={Usuario}
          alt="Foto de usuario"
        />

        <ul className="absolute right-0 top-20 group-hover:block bg-gray-300 text-black shadow-lg rounded-md w-24 font-semibold">
          <li className="py-2 px-4 hover:bg-purple-600 hover:rounded-md cursor-pointer">
            Perfil
          </li>
          <li className="py-2 px-4 hover:bg-purple-600 hover:rounded-md cursor-pointer ">
            Config
          </li>
          <li className="py-2 px-4 hover:bg-purple-600 hover:rounded-md cursor-pointer">
            Sair
          </li>
        </ul>
      </div>
    </>
  );
}
