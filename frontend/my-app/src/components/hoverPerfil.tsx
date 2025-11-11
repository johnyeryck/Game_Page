import Usuario from "@public/icons/usuario.png";
import Image from "next/image";
import { useState } from "react";
import Login from "@/components/Login";
import Create from "@/components/SignUp";
interface HoverPerfil {
  username?: string;
}
export default function HoverPerfil({ username }: HoverPerfil) {
  const [login, setHidden] = useState<string | undefined>();

  return (
    <>
      <nav className="flex  ml-auto m-auto ">
        <button
          onClick={() => setHidden("login")}
          className="flex mr-3 text-white "
        >
          Entrar
        </button>
        <button
          onClick={() => setHidden("create")}
          className="flex mr-3 text-white "
        >
          Registrar
        </button>
      </nav>

      {login === "login" ? (
        <Login
          onClick={() => setHidden("")}
          SignUp={() => setHidden("create")}
        />
      ) : null}
      {login === "create" ? (
        <Create
          onClick={() => setHidden("")}
          Signin={() => setHidden("login")}
        />
      ) : null}

      {username && (
        <div className="flex ">
          <p className="text-white mt-12 font-bold">{username}</p>
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
      )}
    </>
  );
}
