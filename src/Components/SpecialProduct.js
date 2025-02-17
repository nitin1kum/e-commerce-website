import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import SpecialProductCard from '../Cards/SpecialProductCard'
import {Navigation,Grid,Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/grid'

const SpecialProduct = () => {
    const index=[1,2,3,4,5,6,7,8]
  return (
    <div>
        <div className='flex items-center justify-between mx-4 my-6'>
          <h1 className=' text-3xl font-medium'>Special product</h1>
          <div className=' text-gray-400'>
            <i class="fa-solid prev-button cursor-pointer hover:text-black fa-chevron-left mr-3" ></i>
            <i class="fa-solid next-button cursor-pointer hover:text-black fa-chevron-right" ></i>
          </div>
        </div>
        <Swiper className='special-product-swiper '
        modules={[Grid,Navigation]}
            slidesPerView={1}
            spaceBetween={25}
            grid={{
                rows:2,
                fill:'row'
            }}
            navigation={{
                nextEl:".next-button",
                prevEl:".prev-button"
            }}
            breakpoints={{
              1200:{
                slidesPerView:3,
                grid:{
                  rows:2,
                  fill:'row',
                }
              },
              950:{
                slidesPerView:2,
                grid:{
                  rows:2,
                  fill:'row',
                }
              },
              750:{
                slidesPerView:1,
                grid:{
                  rows:2,
                  fill:'row',
                }
              },
              500:{
                slidesPerView:1,
                grid:{
                  rows:2,
                  fill:'row',
                }
              },
            }}
        >
            {index.map((items,ind)=>{
                return(
                    <SwiperSlide ><SpecialProductCard value={ind}/></SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default SpecialProduct