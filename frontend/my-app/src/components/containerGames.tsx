import { Mycontext } from "@/context/context";
import Game from "@components/game";
import { useContext } from "react";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface containerProps {
  categoria?: "RPG" | "Ação" | "Luta";
  ContainerTitle?: string;
}
function Layout({ categoria, ContainerTitle }: containerProps) {
  const data = useContext(Mycontext);
  return (
    <header className=" mt-20 ">
      <Swiper slidesPerView={5} className=" w-[80%] ">
        <div className="px-4 w-full flex justify-center absolute top-1 right-0 ">
          <h2 className="mr-auto my-auto">{ContainerTitle}</h2>
          <button className=" cursor-pointer bg-purple-950 size-8 rounded-full ">
            <GoChevronLeft className="m-auto" size="50%" />
          </button>
          <button className="cursor-pointer size-8 rounded-full  bg-purple-950  ml-1">
            <GoChevronRight size="50%" className="m-auto" />
          </button>
        </div>
        {data &&
          data.map((game) =>
            game.tags[0] === categoria ? (
              <SwiperSlide key={game.id} className="mt-10 ">
                <article className=" cursor-pointer   ">
                  <Game
                    key={game.id}
                    imageUrl={game.statics.imagem_url}
                    name={game.titulo}
                    gameid={game.id}
                    height="240px"
                    width="200"
                  />

                  <section className=" ">
                    <div className=" w-full  px-2 text-white flex pb-5 h-20">
                      <p className="text-white font-bold mt-2 ml-2 ">
                        {game.titulo}
                      </p>
                    </div>
                    <div className="">
                      <p className="text-white text-left font-medium ml-4 ">
                        R${game.valor}
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
