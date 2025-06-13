import Carrinho from "../assets/logo/carrinho-de-compras.png";
import { Link } from "react-router-dom";
import Usuario from "../assets/logo/usuario.png";
import Newlogo from "../assets/logo/WhatsApp Image 2025-04-16 at 23.08.41.jpeg";
import { useState } from "react";

function Nav() {
  const isLoged = window.localStorage.getItem("isLoged");
  const [isVisible, setVisible] = useState<Boolean>(false);
  const user = window.localStorage.getItem("user");
  console.log(isLoged);
  return (
    <header className="w-full bg-black h-20 flex  z-10 top-0 fixed">
      <nav className="flex">
        <Link to="/" className="flex cursor-pointer">
          <img
            className="w-36 h-12 mt-6 ml-5"
            src={Newlogo}
            alt="Gamers Logo"
          />
        </Link>

        <div className="flex  absolute right-0">
          <div className="size-8 ml-auto mt-11 mr-3 cursor-pointer ">
            <Link to="/cart">
              <img src={Carrinho} alt="Shopping Cart" />
            </Link>
          </div>

          {isLoged == "true" ? (
            <div
              className="flex "
              onMouseEnter={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}
            >
              <p className="text-white mt-12 font-bold">{user}</p>
              <img className="size-11 mt-9   cursor-pointer " src={Usuario} />
              {isVisible && (
                <ul className="absolute right-0 top-20 group-hover:block bg-gray-300 text-black shadow-lg rounded-md w-24 font-semibold">
                  <li className="py-2 px-4 hover:bg-purple-600 hover:rounded-md cursor-pointer">
                    Perfil
                  </li>
                  <li className="py-2 px-4 hover:bg-purple-600 hover:rounded-md cursor-pointer ">
                    Config
                  </li>
                  <li
                    className="py-2 px-4 hover:bg-purple-600 hover:rounded-md cursor-pointer"
                    onClick={() => window.localStorage.removeItem("isLoged")}
                  >
                    Sair
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <nav className="flex  mt-12 ml-auto  ">
              <Link to="/login" className="flex mr-3 text-white ">
                Entrar |{" "}
              </Link>
              <Link to="/createAccount" className="flex mr-3 text-white">
                Registrar
              </Link>
            </nav>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
