import { Mycontext } from "@/context/context";
import Game from "@components/game";
import { useContext } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
function Layout() {
  const data = useContext(Mycontext);
  console.log(data);
  return (
    <header className="m-auto w-[76%]  mt-20">
      <h5 className="text-white pl-4 mb-6 font-extrabold">
        Jogos De Tirar O fôlego
      </h5>
      <main className="flex justify-between">
        {data &&
          data.map((game) =>
            game.categoria === "RPG" ? (
              <article className=" w-50">
                <div className=" cursor-pointer ">
                  <Game
                    key={game.id}
                    imageUrl={game.imagem_url}
                    name={game.titulo}
                    gameid={game.id}
                  />

                  <section className="">
                    <div className="border h-[90%] text-white">
                      <p className="text-white font-bold mt-2 ml-2 ">
                        {game.titulo}
                      </p>
                    </div>
                    <div className="">
                      <p className="text-white text-left font-medium ml-2 ">
                        R${game.preco}
                      </p>
                    </div>
                  </section>
                </div>
              </article>
            ) : null
          )}
      </main>
    </header>
  );
}

export default Layout;
