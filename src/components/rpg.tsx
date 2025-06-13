import { useContext } from "react";
import MyContext from "@/context/gamesContext";
import Options from "./options";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/modules";
import { Navigation } from "swiper/modules";
function Rpg() {
  const data = useContext(MyContext);
  return (
    <main className=" mt-60 mb-20 ">
      <h5 className="text-white font-extrabold ml-40 ">
        Historias Incríveis para se aventurar
      </h5>
      <section className="flex w-[76%] ml-auto mr-auto ">
        <Swiper
          slidesPerView={5}
          navigation
          modules={[Navigation]}
          className="myStyle"
        >
          {data && data.length > 0
            ? data.map((game) =>
                game.categoria === "RPG" ? (
                  <SwiperSlide>
                    <div className="ml-3  mt-10 cursor-pointer">
                      <Options
                        imageUrl={game.imagem_url}
                        game={game.titulo}
                        gameid={game.id}
                      />
                      <div className=" h-16 ">
                        <p className="text-white font-bold mt-2 ml-2 ">
                          {game.titulo}
                        </p>
                      </div>
                      <p className="text-white text-left font-medium ml-2 ">
                        {game.preco}
                      </p>
                    </div>
                  </SwiperSlide>
                ) : null,
              )
            : null}
        </Swiper>
      </section>
    </main>
  );
}

export default Rpg;
