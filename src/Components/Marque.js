import React from 'react'
import { Link } from 'react-router-dom'

import {Swiper ,SwiperSlide } from 'swiper/react'
import {Navigation,Autoplay} from 'swiper/modules'

const Marque = () => {
  return (
    <div>
        <Swiper freeMode={true  }
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  1200:{
                    slidesPerView:7
                  },
                  950:{
                    slidesPerView:5
                  },
                  750:{
                    slidesPerView:3
                  },
                  500:{
                    slidesPerView:2
                  },

                }}
                modules={[Navigation,Autoplay]}
                autoplay={{
                    delay:5000,
                    pauseOnMouseEnter:true,
                    disableOnInteraction:false
                }}
                className='marque-swiper'
        >
            <SwiperSlide><Link className='rotate '><img className='transition-all duration-500' src="./images/brand-01.png" alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link className='rotate '><img className='transition-all duration-500' src="./images/brand-02.png" alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link className='rotate '><img className='transition-all duration-500' src="./images/brand-03.png" alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link className='rotate '><img className='transition-all duration-500' src="./images/brand-04.png" alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link className='rotate '><img className='transition-all duration-500' src="./images/brand-05.png" alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link className='rotate '><img className='transition-all duration-500' src="./images/brand-06.png" alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link className='rotate '><img className='transition-all duration-500' src="./images/brand-07.png" alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link className='rotate '><img className='transition-all duration-500' src="./images/brand-08.png" alt="" /></Link></SwiperSlide>

            {/*...... REEATING THE ABOVE TAGS TO MAKE INFINTE MARQUE TAG ........*/}

            <SwiperSlide><Link className='rotate '><img className='transition-all duration-500' src="./images/brand-01.png" alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link className='rotate '><img className='transition-all duration-500' src="./images/brand-02.png" alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link className='rotate '><img className='transition-all duration-500' src="./images/brand-03.png" alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link className='rotate '><img className='transition-all duration-500' src="./images/brand-04.png" alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link className='rotate '><img className='transition-all duration-500' src="./images/brand-05.png" alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link className='rotate '><img className='transition-all duration-500' src="./images/brand-06.png" alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link className='rotate '><img className='transition-all duration-500' src="./images/brand-07.png" alt="" /></Link></SwiperSlide>
            <SwiperSlide><Link className='rotate '><img className='transition-all duration-500' src="./images/brand-08.png" alt="" /></Link></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Marque