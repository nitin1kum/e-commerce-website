import React, { useState } from "react";
import ReactStars from "react-stars";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const [hover, setHover] = useState(true);
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const [location1, setLocation1] = useState("");

  const wishClick = () => {
    setClick(!click);
  };
  const compareClick = () => {
    setClick1(!click1);
  };

  const [view, setView] = useState(false);
  const [quanValue, setQuanValue] = useState(1);
  let location = useLocation();

  useEffect(() => {
    setLocation1(location.pathname);
  }, []);

  return (
    <div>
      <div className={view ? "" : "hidden"}>
        <div className=" fixed flex left-0 bottom-0 translate w-screen h-screen bg-black bg-opacity-30 view-box">
          <div
            className="h-full w-full absolute top-0 left-0"
            onClick={() => {
              setView(!view);
            }}
          />

          <div className="bg-white view-page  gap-8 grid grid-cols-2 w-2/3 max-h-[500px] rounded-lg shadow-lg p-10 relative m-auto">
            <div
              className="absolute -top-2 -right-2 bg-black text-white border-2 border-white rounded-full h-7 w-7 cursor-pointer flex justify-center items-center shadow-cross"
              onClick={() => {
                setView(!view);
              }}
            >
              <i className="fa-xmark fa-solid"></i>
            </div>

            <div className="flex relative w-full h-full items-center">
              <i className="prev-view-slide absolute left-0 z-10 fa-chevron-left fa-solid fa-2xl text-gray-400 cursor-pointer"></i>
              <i className="next-view-slide absolute right-0 z-10 fa-chevron-right fa-solid fa-2xl text-gray-400 cursor-pointer"></i>
              <Swiper
                modules={[FreeMode, Navigation]}
                freeMode={true}
                slidesPerView={1}
                loop={true}
                navigation={{
                  prevEl: ".prev-view-slide",
                  nextEl: ".next-view-slide",
                }}
                className="w-full h-full"
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
        className={
          props.gridNum === 1
            ? "relative product-card-design bg-white shadow-lg rounded-lg overflow-hidden p-4 cursor-pointer w-full h-min flex gap-6"
            : "relative product-card-design bg-white shadow-lg rounded-lg overflow-hidden p-4 cursor-pointer w-full h-min "
        }
        onMouseEnter={() => (setHover(true))}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className={
            props.gridNum === 1
              ? "relative w-56 shrink-0 product-card-img"
              : "relative "
          }
        >
          <div
            className={
              `absolute left-0 top-0 bg-hover py-1 px-2 rounded-full z-40 text-xs duration-700 transition-all ${hover ? "opacity-1" : "lg:opacity-0"}`
            }
          >
            -33%
          </div>
          <div className="absolute action-bar right-0 top-0 z-50  overflow-hidden cursor-pointer">
            <div
              className={
                click
                  ? "p-2 rounded-full hover:bg-hover display"
                  : "p-2 rounded-full hover:bg-hover"
              }
              onClick={wishClick}
            >
              <img src="images/wish.svg" alt="" />
            </div>
            <div
              className={
                click
                  ? "p-2 rounded-full hover:bg-hover"
                  : "p-2 rounded-full hover:bg-hover display"
              }
              onClick={wishClick}
            >
              <img
                className="heart-black"
                src="/images/wish-black.svg"
                alt=""
              />
            </div>
            <div
              className={
                `transition-all duration-300 ${hover ? "translate-x-0" : "lg:translate-x-full"}`
              }
            >
              <div
                className={
                  click1
                    ? "p-2 rounded-full hover:bg-hover display"
                    : "p-2 rounded-full hover:bg-hover"
                }
                onClick={compareClick}
              >
                <img className=" m-auto" src="/images/prodcompare.svg" alt="" />
              </div>
              <div
                className={
                  click1
                    ? "p-2 rounded-full hover:bg-hover rotate-180"
                    : "p-2 rounded-full hover:bg-hover display w-6 "
                }
                onClick={compareClick}
              >
                <img className=" m-auto" src="/images/prodcompare.svg" alt="" />
              </div>
              <div
                className={
                  !(location1 === "/")
                    ? "p-2 rounded-full hover:bg-hover"
                    : "hidden"
                }
                onClick={() => {
                  setView(!view);
                }}
              >
                <img src="/images/view.svg" alt="" />
              </div>
              <div className="p-2 rounded-full hover:bg-hover">
                <img src="/images/add-cart.svg" alt="" />
              </div>
            </div>
          </div>
          <Link to="/products">
            <div>
              <img
                className={
                  hover
                    ? " transition-all duration-1000 ease-in-out"
                    : "opacity-0 transition-all ease-in-out duration-1000"
                }
                src="/images/tab.jpg"
                alt=""
              />
              <img
                className={
                  hover
                    ? "opacity-0 absolute top-0 left-0 transition-all duration-1000 ease-in-out"
                    : "ease-in-out absolute top-0 left-0 transition-all duration-1000"
                }
                src="/images/tab1.jpg"
                alt=""
              />
            </div>
          </Link>
        </div>
        <div className=" product-card-details">
          <p className=" text-catBannerText capitalize">Havells</p>
          <Link to="/products">
            <h4 className="capitalize my-2 text-sm">
              Kids Headphones Bulk 10 pack Multi colored for..
            </h4>
          </Link>
          <ReactStars value={3.5} />
          <p
            className={
              props.gridNum === 1
                ? "text-gray-600 h-20 overflow-hidden"
                : "hidden"
            }
          >
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt.."
          </p>
          <p className="my-2 text-lg font-light">$100.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
