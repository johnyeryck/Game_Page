import { SwiperSlide, Swiper } from 'swiper/react'
import Games from '../listimg'
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
function Main (){
    return (
        <main className='mb-52'>
            <Swiper pagination={{clickable: true}} slidesPerView={1} className='flex mt-16  mb-28' loop={true} modules={[Navigation , Pagination , Autoplay , EffectCoverflow]} 
            autoplay={{  
                delay:3000 ,
                disableOnInteraction : false
            }}effect='coverflow' coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 1 ,
                modifier: 1,
                slideShadows: true,
              }}>
                {Games.map((img,i)=>(
                    <SwiperSlide className='transform transition-all   mt-14 mb-10' key={i} >
                            <img src={img} className='border-2 border-purple-600 rounded-xl ml-auto mr-auto  max-w-4xl hover:brightness-90 ' ></img>
                            <button className=' font-bold  cursor-pointer absolute bottom-4 left-1/4 transform -translate-x-1/2 bg-white px-6 py-2 rounded-2xl hover:bg-purple-600 hover:text-white transition-colors duration-300 ' >Comprar Agora</button>
                    </SwiperSlide>

                ))}
            </Swiper>
        </main>
    )
}
export default Main
