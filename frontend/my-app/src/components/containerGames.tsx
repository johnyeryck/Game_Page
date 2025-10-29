import { Mycontext } from "@/context/context";
import Game from "@components/game";
import { useContext } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

interface containerProps {
  categoria?: "RPG" | "Ação" | "Luta";
}
function Layout({ categoria }: containerProps) {
  const data = useContext(Mycontext);
  console.log(data);

  return (
    <header className=" mt-20 ">
      <Swiper slidesPerView={5} className=" w-[80%] ">
        {data &&
          data.map((game) =>
            game.categoria === categoria ? (
              <SwiperSlide key={game.id} className="mt-2  ">
                <article className=" cursor-pointer ">
                  <Game
                    key={game.id}
                    imageUrl={game.imagem_url}
                    name={game.titulo}
                    gameid={game.id}
                  />

                  <section className=" ">
                    <div className=" w-full  px-2 text-white flex pb-5 h-20">
                      <p className="text-white font-bold mt-2 ml-2 ">
                        {game.titulo}
                      </p>
                    </div>
                    <div className="">
                      <p className="text-white text-left font-medium ml-4 ">
                        R${game.preco}
                      </p>
                    </div>
                  </section>
                </article>
              </SwiperSlide>
            ) : null
          )}
      </Swiper>
    </header>
  );
}

export default Layout;
