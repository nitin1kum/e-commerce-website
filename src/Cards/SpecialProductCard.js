import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useEffect } from "react";

const SpecialProductCard = (props) => {
  const [thumbSwiper, setThumbSwiper] = useState();
  const [hover1, setHover1] = useState(true);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const handleHover1 = () => {
    if (window.innerWidth > 500) {
      setHover1(!hover1);
    }
  };
  const wishClick1 = () => {
    setClick2(!click2);
  };
  const compareClick1 = () => {
    setClick3(!click3);
  };
  const [view, setView] = useState(false);
  const [quanValue, setQuanValue] = useState(1);
  const handleResize = () => {
    if (window.innerWidth < 500) {
      setHover1(false);
    }
  };
  useEffect(() => {
    handleResize();
  }, []);
  return (
    <div className="special-product-card">
      <div className={view ? "fixed" : "hidden"}>
        <div className="fixed translate w-screen h-screen bg-black bg-opacity-30 view-box">
          <div
            className="h-full w-full absolute top-0 left-0"
            onClick={() => {
              setView(!view);
            }}
          ></div>
          <div className="bg-white  gap-8 grid grid-cols-2 w-2/3 h-min rounded-lg shadow-lg p-10 relative translate-y-1/2 m-auto">
            <div
              className="absolute -top-2 -right-2 bg-black text-white border-2 border-white rounded-full h-7 w-7 cursor-pointer flex justify-center items-center shadow-cross"
              onClick={() => {
                setView(!view);
              }}
            >
              <i className="fa-xmark fa-solid"></i>
            </div>
            <div className="flex w-full h-full items-center">
              <i className="prev-view-slide fa-chevron-left fa-solid fa-2xl text-gray-400 cursor-pointer"></i>
              <Swiper
                modules={[FreeMode, Navigation]}
                freeMode={true}
                slidesPerView={1}
                loop={true}
                navigation={{
                  prevEl: ".prev-view-slide",
                  nextEl: ".next-view-slide",
                }}
              >
                <SwiperSlide>
                  <img src="/images/camera-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/camera.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/camera-2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/camera-3.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <i className="next-view-slide fa-chevron-right fa-solid fa-2xl text-gray-400 cursor-pointer"></i>
            </div>
            <div className="view-product-details">
              <h1 className="text-2xl font-normal ">
                Olympus Pen E-PL9 Kit With 14-42, EZ Lens, Camera
              </h1>
              <span className="text-xl font-normal leading-10">$10.00</span>
              <div>
                <label htmlFor="view-size">Size </label>
                <select name="view-size" id="view-size">
                  <option value="L" selected>
                    L
                  </option>
                  <option value="M">M</option>
                </select>
              </div>
              <div>
                <label htmlFor="view-color">Color</label>
                <select name="view-color" id="view-color">
                  <option value="#000000" selected>
                    #000000
                  </option>
                  <option value="#fff">#fff</option>
                </select>
              </div>
              <div>
                <label htmlFor="view-quantity">Quantity</label>
                <input
                  type="number"
                  value={quanValue}
                  step={1}
                  onChange={(e) => {
                    if (e.target.value > 0) {
                      setQuanValue(e.target.value);
                    }
                  }}
                />
              </div>
              <button className="px-6 py-2 rounded-full w-full bg-nav-color hover:bg-hover text-white hover:text-black">
                Add To Cart
              </button>
              <p className="underline cursor-pointer mt-6">
                View Full Product Details
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-2 gap-6 w-full  bg-white rounded-lg shadow-lg px-2 pt-4 pb-4 overflow-hidden "
        onMouseEnter={handleHover1}
        onMouseLeave={handleHover1}
      >
        <div className="relative ">
          <div
            className={
              !hover1
                ? "display"
                : "absolute left-2 top--2 bg-hover py-1 px-2 rounded-full z-50 text-xs"
            }
          >
            -33%
          </div>
          <div className="action-bar absolute right-0 top-0 z-50  overflow-hidden cursor-pointer">
            <div
              className={
                click2
                  ? "p-2 rounded-full hover:bg-hover display"
                  : "p-2 rounded-full hover:bg-hover"
              }
              onClick={wishClick1}
            >
              <img src="/images/wish.svg" alt="" />
            </div>
            <div
              className={
                click2
                  ? "p-2 rounded-full hover:bg-hover"
                  : "p-2 rounded-full hover:bg-hover display"
              }
              onClick={wishClick1}
            >
              <img
                className="heart-black"
                src="/images/wish-black.svg"
                alt=""
              />
            </div>
            <div
              className={
                hover1
                  ? " translate-x-full transition-all duration-300"
                  : " transition-all duration-300"
              }
            >
              <div
                className={
                  click3
                    ? "p-2 rounded-full hover:bg-hover display"
                    : "p-2 rounded-full hover:bg-hover"
                }
                onClick={compareClick1}
              >
                <img className=" m-auto" src="/images/prodcompare.svg" alt="" />
              </div>
              <div
                className={
                  click3
                    ? "p-2 rounded-full hover:bg-hover rotate-180"
                    : "p-2 rounded-full hover:bg-hover display w-6 "
                }
                onClick={compareClick1}
              >
                <img className=" m-auto" src="/images/prodcompare.svg" alt="" />
              </div>
              <div className="p-2 rounded-full hover:bg-hover">
                <img src="/images/add-cart.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="relative h-full w-full">
            <Swiper
              spaceBetween={20}
              thumbs={{ swiper: thumbSwiper }}
              modules={[Navigation, Thumbs]}
            >
              <SwiperSlide>
                <img id="swiper-img" src="/images/camera-3.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img id="swiper-img" src="/images/camera-1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img id="swiper-img" src="/images/camera-2.jpg" alt="" />
              </SwiperSlide>
            </Swiper>

            <div className="thumb-container w-full h-20 overflow-hidden flex items-center justify-between gap-2 self-end">
              <i
                className={
                  hover1
                    ? `text-white swipe-prev-${props.value} fa-chevron-left fa-solid transition-all duration-500`
                    : `swipe-prev-${props.value} fa-chevron-left fa-solid transition-all duration-500 cursor-pointer`
                }
              ></i>

              <Swiper
                onSwiper={setThumbSwiper}
                spaceBetween={10}
                slidesPerView={2}
                freeMode={true}
                breakpoints={{
                  500: {
                    slidesPerView: 2,
                  },
                }}
                modules={[Thumbs, Navigation]}
                navigation={{
                  nextEl: `.swipe-next-${props.value}`,
                  prevEl: `.swipe-prev-${props.value}`,
                  clickable: true,
                }}
                className="swiper-thumbs mx-5 cursor-pointer w-[80%] h-[90%]"
              >
                <SwiperSlide>
                  <img id="swiper-img" className="w-[90%] h-[90%] object-contain" src="/images/camera-3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img id="swiper-img" className="w-[90%] h-[90%] object-contain" src="/images/camera-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img id="swiper-img" className="w-[90%] h-[90%] object-contain" src="/images/camera-2.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <i
                className={
                  hover1
                    ? ` text-white swipe-next-${props.value} fa-chevron-right fa-solid transition-all duration-500 `
                    : `swipe-next-${props.value} fa-chevron-right fa-solid transition-all duration-500 cursor-pointer`
                }
              ></i>
            </div>
          </div>
        </div>


        <div className="special-product-details">
          <p className=" text-catBannerText text-sm">Bajaj</p>
          <Link>
            <p className="capitalize text-base font-medium w-full my-3 ">
              hero session action camera with 8MP
            </p>
          </Link>
          <ReactStars value={3.5} size={15} />
          <div className="my-2">
            <span className=" line-through">$30.00 </span>
            <span className=" text-catBannerText"> $16.00</span>
          </div>
          <div>
            <span className="text-sm product-days text-gray-600 mr-2">
              557 Days
            </span>
            <span className=" timer p-1.5 rounded-full m-1 text-white text-sm">
              23
            </span>
            :
            <span className=" timer p-1.5 rounded-full m-1 text-white text-sm">
              02
            </span>
            :
            <span className=" timer p-1.5 rounded-full m-1 text-white text-sm">
              22
            </span>
          </div>
          <button className=" bg-nav-color rounded-full py-2 px-4 text-white mt-4 hover:bg-hover hover:text-black transition-all">
            OPTION
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialProductCard;
