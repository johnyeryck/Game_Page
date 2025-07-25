import Nav from "@/components/Nav";
import Options from "@/components/options";
import MyContext from "@/context/gamesContext";
import { dbPromise } from "@/indexDb";
import { useContext, useEffect, useState } from "react";
import Dumpster from "../assets/logo/excluir.png";
import LoginPage from "./login";
import Emoji from "../assets/logo/morto.png";
function Cart() {
  interface jogoInterface {
    id?: number;
    gamename?: string;
  }

  const isLoged = localStorage.getItem("isLoged");
  const [jogo, setjogo] = useState<jogoInterface[]>();

  const data = useContext(MyContext);
  useEffect(() => {
    const fetchIDB = async () => {
      const dbCall = await dbPromise;
      const id = await dbCall.getAll("jogos");
      setjogo(id);
      console.log(id);
    };
    fetchIDB();
  }, []);

  const Remove = async (game: any) => {
    const db = await dbPromise;
    await db.delete("jogos", game);
    window.location.reload();
  };

  console.log(typeof jogo);

  return (
    <header>
      <Nav />
      <main className="mt-40 mb-20 ">
        {
        isLoged != "true" ? (<LoginPage />) : null}

        {data && jogo && isLoged === "true"
          ? data.map((game) =>
              jogo.find((p) => p.id == game.id) ? (
                <section className=" rounded-lg w-2/4 mr-auto flex ml-auto mt-10 ">
                  <div className="border rounded-2xl shadow-2xl h-61 shadow-purple-600">
                    <Options imageUrl={game.imagem_url} isInvisible={true} />
                  </div>

                  <div className="flex-col border-b border-r border-t rounded-r-sm border-purple-600 w-full ">
                    <div className="flex ">
                      <h1 className="text-white font-medium mt-2 ml-3">
                        {game.titulo}
                      </h1>
                      <button
                        className="size-7 ml-auto mr-2 mt-2 cursor-pointer"
                        onClick={() => Remove(game.id)}
                      >
                        <img src={Dumpster} alt="" />
                      </button>
                    </div>
                    <p className="text-white mt-20 ml-4">{game.preco}</p>
                    <button className="bg-purple-800 cursor-pointer border-2 border-purple-600 mb-2 rounded-md text-white w-40 mt-18 ml-3 hover:bg-purple-600">
                      Finalizar Compra
                    </button>
                  </div>
                </section>
              ) : null,
            )
          : null}

        {isLoged === "true" && jogo && jogo?.length < 1 ? (
          <div
            className="border w-1/3 border-purple-600 ml-auto mr-auto
          h-60 rounded-lg "
          >
            <div className="mt-14">
              <img src={Emoji} className="size-15 ml-46" alt="" />
              <h1 className="text-white text-center ">
                Você ainda não adicionou nenhum jogo
              </h1>
              <button className="bg-purple-800 cursor-pointer border-2 border-purple-600 mb-2 rounded-md text-white w-40 mt-3 ml-35 hover:bg-purple-600 ">
                <a href="http://localhost:5173">Encontrar jogos</a>
              </button>
            </div>
          </div>
        ) : null}
      </main>
    </header>
  );
}

export default Cart;
