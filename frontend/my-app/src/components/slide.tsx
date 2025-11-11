import { SwiperSlide, Swiper } from "swiper/react";
import { dataInterface } from "@/context/context";

type slideTypes = Pick<dataInterface , "id" | "statics" >
interface jogoint {
  name?: string;
  id?: number[];
  data : slideTypes[]
}
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
function Slide({ id , data }: jogoint) {
  
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
        {data && id && data.length > 0
          ? data.map((game) =>
              id.find((item) => item === game.id) ? (
                <SwiperSlide className="mt-14 mb-10">
                  <main className=" w-2/3 mx-auto   overflow-hidden rounded-2xl hover:brightness-90 relative ">
                    <div className="absolute w-1/2 h-full rounded-2xl bg-linear-to-r from-purple-600 to-transparent "></div>
                    <div className="absolute right-0 w-full h-full rounded-2xl bg-linear-to-l  from-black to-transparent "></div>
                    <img src={game.statics.fullhd_img} className=" size-full" />
                    <img
                      src={game.statics.logo}
                      className="absolute bottom-1/3 ml-4 w-[20%] "
                    />
                    <button className=" font-bold  bg-white border border-black text-black shadow-2xl inset-shadow-amber-700 bottom-4 cursor-pointer  absolute ml-6  px-6 py-2 rounded-2xl   transition-colors duration-300 hover:bg-purple-600 hover:border-2 hover:border-white hover:shadow-2xl hover:shadow-purple-600 hover:text-white">
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
