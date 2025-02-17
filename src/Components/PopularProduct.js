import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../Cards/ProductCard'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'


const PopularProduct = (props) => {
    return (
    <div>
        <div className='popular-product-header rounded-lg pop-prod-2  px-6 pb-6 hidden'>
                <ul className='flex gap-12 whitespace-nowrap overflow-auto'>
                    <li className='inline-block mr-6'>
                        <Link className='flex items-center gap-6'>
                            <img src="/images/cat-icon-01.png" alt="" />
                            <h4>Speaker</h4>
                        </Link>
                    </li>
                    <li className='inline-block mr-6'>
                        <Link className='flex items-center gap-6'>
                            <img src="/images/cat-icon-02.png" alt="" />
                            <h4>Laptops</h4>
                        </Link>
                    </li>
                    <li className='inline-block mr-6'>
                        <Link className='flex items-center gap-6'>
                            <img src="/images/cat-icon-03.png" alt="" />
                            <h4>Smart Watch</h4>
                        </Link>
                    </li>
                </ul>
            </div>
        <div className='popular-product grid gap-5 mx-6'>
            <div className='product-list rounded-lg pop-prod-2'>
                <ul>
                    <li>
                        <Link>
                            <img src="/images/cat-icon-01.png" alt="" />
                            <h4>Speaker</h4>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src="/images/cat-icon-02.png" alt="" />
                            <h4>Laptops</h4>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src="/images/cat-icon-03.png" alt="" />
                            <h4>Smart Watch</h4>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='pop-prod-2 '>
                <img className='h-full rounded-lg w-full object-cover' src="/images/cat-product-banner.jpg" alt="" />
            </div>
            <div>
            <Swiper className=' mx-6'
          slidesPerView={1}
          freeMode={true}
          spaceBetween={10}
          breakpoints={{
            1200:{
              slidesPerView: (4),
              spaceBetween:20
            },
            950:{
              slidesPerView: (3),
              spaceBetween:20
            },
            500:{
              slidesPerView: (2),
              spaceBetween:20
            },
          }}
          modules={[Navigation]}
          navigation={{
            nextEl:` .swiper-button-next-${props.cName}`,
            prevEl:` .swiper-button-prev-${props.cName}`
          }}
        >
          
          <SwiperSlide><Link to="/products"><ProductCard /></Link></SwiperSlide>
          <SwiperSlide><ProductCard /></SwiperSlide>
          <SwiperSlide><ProductCard /></SwiperSlide>
          <SwiperSlide><ProductCard /></SwiperSlide>
          <SwiperSlide><ProductCard /></SwiperSlide>
          <SwiperSlide><ProductCard /></SwiperSlide>
          <SwiperSlide><ProductCard /></SwiperSlide>
        </Swiper>
            </div>
        </div>
    </div>

    )
}

export default PopularProduct