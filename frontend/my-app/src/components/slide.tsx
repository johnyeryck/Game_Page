import { SwiperSlide, Swiper } from "swiper/react";
import { useContext } from "react";
interface jogoint {
  name: string;
}
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Mycontext } from "@/context/context";
function Slide() {
  const destaques: jogoint[] = [
    { name: "Grand Theft Auto VI" },
    { name: "Ghost of Tsushima Director's Cut" },
    { name: "Cyberpunk 2077" },
    { name: " DRAGON BALL: Sparking! ZERO" },
  ];
  const data = useContext(Mycontext);
  return (
    <header className=" ">
      <Swiper
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="flex mt-16  mb-28"
        loop={true}
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 1,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {data && data.length > 0
          ? data.map((game) =>
              destaques.find((p) => p.name == game.titulo) ? (
                <SwiperSlide className="mt-14 mb-10 ">
                  <main className=" w-2/3 ml-auto border-2 border-purple-600 mr-auto rounded-2xl hover:brightness-90 relative ">
                    <div className="absolute w-1/2 h-full rounded-2xl bg-linear-to-r from-purple-600 to-transparent "></div>
                    <div className="absolute right-0 w-full h-full rounded-2xl bg-linear-to-l  from-black to-transparent "></div>
                    <img
                      src={game.fullhd_img}
                      className="  rounded-xl ml-auto mr-auto  size-full "
                    />
                    <img
                      src={game.logo}
                      className="absolute bottom-1/3 ml-4 w-56 "
                    />
                    <button className=" font-bold  bg-white border border-black text-black shadow-2xl inset-shadow-amber-700 bottom-4 cursor-pointer  absolute ml-6  px-6 py-2 rounded-2xl   transition-colors duration-300 ">
                      Comprar Agora
                    </button>
                  </main>
                </SwiperSlide>
              ) : null
            )
          : null}
      </Swiper>
    </header>
  );
}
export default Slide;
