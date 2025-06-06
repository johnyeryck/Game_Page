import { SwiperSlide } from "swiper/react"
import { Swiper } from "swiper/react"
import { Navigation,Autoplay } from "swiper/modules"


const Genders = ()=>{

    const list = {

        Gratis : "https://store.cloudflare.steamstatic.com/categories/homepageimage/freetoplay?cc=us&l=portuguese",
        Terror : "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/horror?cc=us&l=portuguese",
        Mundo_Aberto : "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/exploration_open_world?cc=us&l=portuguese",
        Anime: "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/anime?cc=us&l=portuguese",
        Luta : "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/fighting_martial_arts?cc=us&l=portuguese",
        Corrida : "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/racing?cc=us&l=portuguese",
        Esportes : "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/sports?cc=us&l=portuguese",
        Ação : "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/action?cc=us&l=portuguese"
        
    }


    return(
        <section className="flex  mt-60  ml-auto mr-auto  w-[76%]">
            <Swiper slidesPerView={4}
            // navigation
            autoplay={true}
            modules={[Autoplay]}
            loop={true }
            >

            {Object.entries(list).map(([key,v])=>(
                <SwiperSlide className="">
                        
                   <div className="border-2 size-56 rounded-lg overflow-hidden  border-purple-800 cursor-pointer"  >
                        <img src={v} className="" />
                            <div className="absolute shadow-amber-300 shadow-2xl bg-gradient-to-t from-black to-transparent 
                            w-55 bottom-0.5 rounded-lg h-full ">
                                <h1 className="text-white font-bold text-center mt-25">{key}</h1>
                            </div>
                    </div> 
                </SwiperSlide>
            ))}
            </Swiper>
        </section>
    )
}

export default Genders