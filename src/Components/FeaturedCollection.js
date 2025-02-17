import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import ProductCard from '../Cards/ProductCard'
import 'swiper/css'

import 'swiper/css/autoplay'
import { Link } from 'react-router-dom'

const FeaturedCollection = (props) => {
  return (
    <div className=''>
      
      <div>
        <Swiper className=' mx-6'
          slidesPerView={2}
          freeMode={true}
          spaceBetween={10}
          breakpoints={{
            1200:{
              slidesPerView: (6),
              spaceBetween:20
            },
            950:{
              slidesPerView: (4),
              spaceBetween:20
            },
            750:{
              slidesPerView: (3),
              spaceBetween:20
            },
            500:{
              slidesPerView: (2),
              spaceBetween:20,
            },
          }}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl:` .swiper-button-next-${props.cName}`,
            prevEl:` .swiper-button-prev-${props.cName}`
          }}
        >
          
          <SwiperSlide><ProductCard /></SwiperSlide>
          <SwiperSlide><ProductCard /></SwiperSlide>
          <SwiperSlide><ProductCard /></SwiperSlide>
          <SwiperSlide><ProductCard /></SwiperSlide>
          <SwiperSlide><ProductCard /></SwiperSlide>
          <SwiperSlide><ProductCard /></SwiperSlide>
          <SwiperSlide><ProductCard /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default FeaturedCollection