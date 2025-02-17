
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import AboutData from '../Data/AboutData';
import Blog from '../Cards/Blog';
const LatestNews = () => {
  return (
    
    <div>
        <div className='flex items-center justify-between mx-4 my-6'>
          <h1 className=' text-2xl '>Our Latest News</h1>
          <div className=' text-gray-400'>
            <i class="fa-solid swiper-button-prev cursor-pointer hover:text-black fa-chevron-left mr-3" ></i>
            <i class="fa-solid swiper-button-next cursor-pointer hover:text-black fa-chevron-right" ></i>
          </div>
        </div>
        <Swiper
          modules={[Navigation,Autoplay,Pagination]}
          navigation={{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev",
            clickable:true
          }}
          spaceBetween={10}
          freeMode={true}
          slidesPerView={1}
          breakpoints={{
            1200:{
              slidesPerView:4
            },
            950:{
              slidesPerView:4
            },
            750:{
              slidesPerView:3
            },
            500:{
              slidesPerView:2
            },
          }}
          autoplay={{
            delay:8000,
            disableOnInteraction:false,
            pauseOnMouseEnter:true,
            stopOnLastSlide:true
          }}
        >
          {AboutData.map((items, index) => {
            return (
              <SwiperSlide key={index}>
                <Blog value={items} />
              </SwiperSlide>
            )
          })
          }
          
        </Swiper>
    </div>
  )
}

export default LatestNews