import { SwiperSlide, Swiper } from 'swiper/react'
import Games from '../listimg'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
function Main (){
    return (
        <main className='mb-52'>
            <Swiper pagination={{clickable: true}} slidesPerView={1} className='flex mt-16 ' loop={true} modules={[Navigation , Pagination , Autoplay]} 
            autoplay={{  
                delay:3000 ,
                disableOnInteraction : false
            }}>
                {Games.map((img,i)=>(
                    <SwiperSlide className='transform hover:scale-110 transition-all duration-2000 ease-in-out' key={i} >
                        <div className="">
                            <img src={img} className='border-2 border-purple-600 rounded-xl ml-auto mr-auto  max-w-4xl mt-14 ' ></img>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </main>
    )
}
export default Main
