import Options from "./options";
import MyContext from "@/context/gamesContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
function Layout() {
  const data = useContext(MyContext);
  return (
    <main className="ml-auto mr-auto w-[76%] ">
      <h5 className="text-white pl-4 mb-6 font-extrabold">
        Jogos De Tirar O fôlego
      </h5>

      <section className="flex justify-evenly">
        <Swiper
          slidesPerView={5}
          navigation
          modules={[Navigation]}
          className="myStyle"
        >
          {data && data.length > 0
            ? data.map((game) =>
                game.categoria === "Ação" ? (
                  <SwiperSlide>
                    <Link to={`/app/${slugify(game.titulo)}`}>
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
                    </Link>
                  </SwiperSlide>
                ) : null,
              )
            : null}
        </Swiper>
      </section>
    </main>
  );
}

export default Layout;
