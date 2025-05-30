import { SwiperSlide } from "swiper/react"
import { Swiper } from "swiper/react"
import { Navigation,Autoplay } from "swiper/modules"


const Genders = ()=>{

    const list = {

        Jogos_Gratis : "https://store.cloudflare.steamstatic.com/categories/homepageimage/freetoplay?cc=us&l=portuguese",
        Terror : "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/horror?cc=us&l=portuguese",
        Mundo_Aberto : "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/exploration_open_world?cc=us&l=portuguese",
        Anime: "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/anime?cc=us&l=portuguese",
        Luta : "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/fighting_martial_arts?cc=us&l=portuguese",
        Corrida : "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/racing?cc=us&l=portuguese",
        Esportes : "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/sports?cc=us&l=portuguese",
        Ação : "https://store.cloudflare.steamstatic.com/categories/homepageimage/category/action?cc=us&l=portuguese"
        
    }


    return(
        <section className="flex  mt-20  ml-auto mr-auto  w-[80%]  justify-evenly">
            <Swiper slidesPerView={4}
            // navigation
            autoplay={true}
            modules={[Autoplay]}
            loop={true }
            >

            {Object.entries(list).map(([key,v])=>(
                <SwiperSlide className="">
                        
                   <div className="border-2 size-56 rounded-lg overflow-hidden  border-purple-800" >
                        <img src={v} className="" />
                        <div className="absolute  bg-gradient-to-t from-purple-400 to-transparent 
                        w-56 bottom-0.5 rounded-lg h-full ">
                        <h1 className="text-white font-bold text-center ">{key}</h1>
                        </div>
                    </div> 
                </SwiperSlide>
            ))}
            </Swiper>
        </section>
    )
}

export default Genders