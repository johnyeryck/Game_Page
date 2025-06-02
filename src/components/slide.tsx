import { SwiperSlide, Swiper } from "swiper/react";
import gamesApi from "../listimg";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";





function Main() {
  return (
    <main className="mb-52">
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
        {gamesApi.map((img, i) => {
          return (
            <SwiperSlide
              className="transform transition-all   mt-14 mb-10"
              key={i}
            >
              <div className="border-2 border-purple-600 w-2/3 ml-auto mr-auto rounded-xl hover:brightness-90 relative ">
                <img
                  src={img.img}
                  className="  rounded-xl ml-auto mr-auto  size-full "
                ></img>
                <div className="bg-gradient-to-r w-3/4  from-black to-transparent rounded-xl  absolute top-0 h-full ">
                  <p className="text-white  leading-6 font-bold   w-sm  ml-7 mb-20 mt-72">
                    {img.descricao}
                  </p>
                  <div className="absolute bottom-4 ">
                    <p className="text-green-500   mb-3.5 font-bold   w-1/4 ml-7 ">
                      R${img.preço}
                    </p>
                    <button className=" font-bold  cursor-pointer    ml-6 bg-white px-6 py-2 rounded-2xl hover:bg-purple-600 hover:text-white transition-colors duration-300 ">
                      Comprar Agora
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
}
export default Main;
