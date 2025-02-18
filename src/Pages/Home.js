import React from "react";
import HomeSection1Date from "../Data/HomeSection1Data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeSection2 from "../Data/HomeSection2";
import { Link } from "react-router-dom";
import HomeSection3 from "../Data/HomeSection3";
import LatestNews from "../Components/LatestNews";
import FeaturedCollection from "../Components/FeaturedCollection";
import Marque from "../Components/Marque";
import FeaturedCollection2 from "../Components/FeaturedCollection2";
import SpecialProduct from "../Components/SpecialProduct";
import PopularProduct from "../Components/PopularProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Grid } from "swiper/modules";
import "swiper/css";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 grid grid-cols-2 gap-5 px-5 py-12 bg-white">
        <Carousel
          className="content-crousel-container relative overflow-hidden  rounded-xl"
          autoPlay
          infiniteLoop
          stopOnHover={true}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
        >
          <div className="content-crousel h-full w-full  inline-block relative whitespace-nowrap rounded-xl overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="./images/main-banner.jpg"
              alt=""
            />
            <div className="crousel-headings absolute top-0 left-0 m-12 w-1/3 flex flex-col justify-start">
              <p className=" text-catBannerText text-lg leading-9 uppercase ">
                SUPERCHARGED FOR PROS.
              </p>
              <h1 className=" text-5xl my-4 ">iPad S13+ Pro.</h1>
              <p className="text-lg leading-7 capitalize">
                From $999.00 or $41.62/mo.
                <br /> for 24 mo. Footnote*
              </p>
              <button className=" uppercase w-min my-6 bg-nav-color text-white py-3 px-8 hover:bg-hover hover:text-black rounded-3xl">
                Buy now
              </button>
            </div>
          </div>
          <div className="content-crousel h-full w-full inline-block relative whitespace-nowrap rounded-xl overflow-hidden ">
            <img
              className="h-full w-full object-cover"
              src="./images/main-banner-1.jpg"
              alt=""
            />
            <div className="crousel-headings absolute top-0 left-0 m-12 w-1/3 flex flex-col justify-start">
              <p className=" text-catBannerText text-lg leading-9 uppercase">
                SUPERCHARGED FOR PROS.
              </p>
              <h1 className=" text-5xl my-4 capitalize">Special sale</h1>
              <p className="text-lg leading-7 capitalize">
                From $999.00 or $41.62/mo.
                <br /> for 24 mo. Footnote*
              </p>
              <button className="my-6 uppercase w-min bg-nav-color text-white py-3 px-8 hover:bg-hover hover:text-black rounded-3xl">
                Buy now
              </button>
            </div>
          </div>
        </Carousel>

        <div className="content-cards grid grid-rows-2 grid-cols-2 gap-6">
          {HomeSection1Date.map((items, indes) => {
            return (
              <div className="item-box  inline-block relative rounded-xl overflow-hidden ">
                <div className="catbanner-heading absolute z-10 top-0 left-0 m-8 w-1/2 whitespace-nowrap">
                  <p className=" text-catBannerText text-sm leading-5 uppercase">
                    {items.p1}
                  </p>
                  <h2 className=" text-2xl my-4 capitalize">{items.h2}</h2>
                  <p className="text-sm leading-7 capitalize whitespace-normal">
                    {items.p2}
                  </p>
                </div>
                <img
                  className=" hover:scale-105 h-full w-full object-cover transition-all duration-200"
                  src={items.image}
                  alt={items.h2}
                />
              </div>
            );
          })}
        </div>
      </section>
      <section className="home-wrapper-2 py-12 px-12">
        <Swiper
          modules={[FreeMode,Autoplay]}
          slidesPerView={1}
          breakpoints={{
            1200: {
              slidesPerView: 5,
            },
            950:{
              slidesPerView:4
            },
            750:{
              slidesPerView:3
            },
            500:{
              slidesPerView:2,
            //   loop:true,
            //   autoplay:{
            //     delay:5000,
            //     pauseOnMouseEnter:true,
            //     disableOnInteraction:false
            // }
            }
          }}
          freeMode={true}
        >
          {HomeSection2.map((items) => {
            return (
              <SwiperSlide>
                <Link className="flex gap-6 justify-center items-center rotate">
                  <img
                    className=" object-none transition-all duration-500"
                    src={items.img}
                    alt={items.h4}
                  />
                  <div>
                    <h4 className=" capitalize text-lg leading-6">
                      {items.h4}
                    </h4>
                    <p className=" text-gray-500 leading-5">{items.p}</p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <section className="home-wrapper-3 p-6">
        <Swiper
          className="content-center bg-white mx-6 rounded-lg p-4 swiper-grid"
          modules={[Grid,FreeMode]}
          freeMode={true}
          slidesPerView={1}
          grid={{
            rows:2,
            fill:'row',
          }}
          
          breakpoints={{
            1250:{
              slidesPerView:5,
              grid:{
                rows:2,
                fill:'row',
              }
            },
            900:{
              slidesPerView:4,
              grid:{
                rows:2,
                fill:'row'
              }
            },
            750:{
              slidesPerView:3,
              grid:{
                rows:2,
                fill:'row'
              }
            },
            500:{
              slidesPerView:2,
              grid:{
                rows:2,
                fill:'row'
              }
            },
          }}
        >
          {HomeSection3.map((items, index) => {
            return (
              <SwiperSlide>
                <li className=" inline-block w-full h-full">
                  <Link className="flex items-center w-full  justify-between  p-4 ">
                    <div className="w-4/5">
                      <h4 className="capitalize hover:underline">{items.h4}</h4>
                      <p className=" text-gray-400">{items.number} items</p>
                    </div>
                    <img
                      className="h-full  object-contain flex-end"
                      src={items.img}
                      alt=""
                    />
                  </Link>
                </li>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <section className="product-card py-10 px-6">
        <div className="product-card-header flex items-center justify-between mx-8 my-12">
          <h1 className=" text-3xl font-medium">Featured Collection</h1>
          <div className=" text-gray-400">
            <i class="fa-solid swiper-button-prev-1 cursor-pointer hover:text-black fa-chevron-left mr-3"></i>
            <i class="fa-solid swiper-button-next-1 cursor-pointer hover:text-black fa-chevron-right"></i>
          </div>
        </div>
        <FeaturedCollection value={6} cName={1} />
      </section>
      <section className="other-featured-collection gap-6 h-max  px-4 py-10">
        <Swiper
          slidesPerView={1}
          modules={FreeMode}
          spaceBetween={30}
          freeMode={true}
          breakpoints={{

            1200:{
              slidesPerView:4,
            },
            950:{
              slidesPerView:3,
            },
            750:{
              slidesPerView:3,
            },
            450:{
              slidesPerView:2,
            },
          }}
        >
          <SwiperSlide><FeaturedCollection2/></SwiperSlide>
          <SwiperSlide><FeaturedCollection2/></SwiperSlide>
          <SwiperSlide><FeaturedCollection2/></SwiperSlide>
          <SwiperSlide><FeaturedCollection2/></SwiperSlide>
        </Swiper>
      </section>
      <section className="special-product py-10 px-6">
        <SpecialProduct />
      </section>
      <section className="our-popular-product">
        <div className="flex items-center justify-between mx-8 my-12">
          <h1 className=" text-3xl font-medium">Our Popular Produts</h1>
          <div className=" text-gray-400">
            <i class="fa-solid swiper-button-prev-2 cursor-pointer hover:text-black fa-chevron-left mr-3"></i>
            <i class="fa-solid swiper-button-next-2 cursor-pointer hover:text-black fa-chevron-right"></i>
          </div>
        </div>
        <PopularProduct cName={2}/>
      </section>
      <section className="bg-white rounded-lg mx-6 overflow-hidden my-12 px-4">
        <Marque />
      </section>
      <section className="blogs p-4">
        <LatestNews />
      </section>
    </>
  );
};

export default Home;
