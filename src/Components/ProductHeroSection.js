import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Policies from './Policies';
import ReactStars from 'react-stars';

const ProductHeroSection = () => {
    const [num, setNum] = useState(1);
    const [expand, setExpand] = useState({
      shipping: false,
      materials: false,
      care: false,
      faq: false,
    });
    const [outline, setOutline] = useState(0);
    const [productColor, setProductColor] = useState(0);
    const [click, setClick] = useState({
      wish: false,
      compare: false,
    });
    
  
    const itemNum = (e) => {
      e === "add" ? setNum(num + 1) : num > 1 ? setNum(num - 1) : setNum(num);
    };
  return (
        <>
            <h1 className="border-b border-gray-200 py-3 text-xl font-medium">
              Olmpus Pen E-PL9 Kit With 14-42, EZ Lens, Camera
            </h1>
            <div className="border-b border-gray-200 py-3">
              <div>
                <span className=" line-through font-medium">$35.00 </span>
                <span className=" text-catBannerText font-medium"> $26.00</span>
                <div className="bg-hover rounded-full w-min px-2 py-0.5 text-xs">
                  Sale
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <ReactStars value={3.5} />
                <p className="text-gray-600">(1 review)</p>
              </div>
              <p
                className="text-gray-600 cursor-pointer underline"
                onClick={() => {
                  let position = document
                    .getElementById("review-section")
                    .getBoundingClientRect();
                  window.scrollTo(0, position.top);
                }}
              >
                Write a review
              </p>
            </div>
            <div className="py-3 flex flex-col gap-3 product-quality-details">
              <div className="">
                <span className="text-sm text-gray-600 mr-2">557 Days</span>
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
              <div className=" flex gap-3 items-end">
                <h4>Brand : </h4>
                <span className="text-gray-600 text-sm">Sony</span>
              </div>
              <div className=" flex gap-3 items-end">
                <h4>Tags:</h4>
                <span className="text-gray-600 text-sm">Mobile</span>
                <span className="text-gray-600 text-sm">Mobile</span>
                <span className="text-gray-600 text-sm">Mobile</span>
              </div>
              <div className=" my-2">
                <h4>Size</h4>
                <div className="flex justify-start items-center mt-3 cursor-pointer">
                  <p
                    className={
                      outline === 0
                        ? "text-gray-600 outline outline-1 outline-black border flex items-center justify-center border-gray-400 w-14 h-8 mr-1"
                        : "text-gray-600  border flex items-center hover:outline hover:outline-1 hover:outline-black justify-center border-gray-400 w-14 h-8 mr-1"
                    }
                    key={0}
                    onClick={() => {
                      setOutline(0);
                    }}
                  >
                    L
                  </p>
                  <p
                    className={
                      outline === 1
                        ? "text-gray-600 outline outline-1 outline-black border flex items-center justify-center border-gray-400 w-14 h-8 mr-1"
                        : "text-gray-600  border flex items-center hover:outline hover:outline-1 hover:outline-black justify-center border-gray-400 w-14 h-8 mr-1"
                    }
                    key={1}
                    onClick={() => {
                      setOutline(1);
                    }}
                  >
                    M
                  </p>
                </div>
              </div>
              <div className="my-2">
                <h4>Color</h4>
                <div className="flex mt-3 gap-2">
                  <div
                    className={
                      productColor === 0
                        ? "bg-red-500 h-8 w-8 rounded-full outline-1 outline-black outline border-4 border-white"
                        : "bg-red-500 h-8 w-8 rounded-full hover:outline-1 hover:outline-black hover:outline hover:border-4 border-white "
                    }
                    onClick={() => {
                      setProductColor(0);
                    }}
                  ></div>
                  <div
                    className={
                      productColor === 1
                        ? "bg-red-500 h-8 w-8 rounded-full outline-1 outline-black outline border-4 border-white"
                        : "bg-red-500 h-8 w-8 rounded-full hover:outline-1 hover:outline-black hover:outline hover:border-4 border-white "
                    }
                    onClick={() => {
                      setProductColor(1);
                    }}
                  ></div>
                  <div
                    className={
                      productColor === 2
                        ? "bg-red-500 h-8 w-8 rounded-full outline-1 outline-black outline border-4 border-white"
                        : "bg-red-500 h-8 w-8 rounded-full hover:outline-1 hover:outline-black hover:outline hover:border-4 border-white "
                    }
                    onClick={() => {
                      setProductColor(2);
                    }}
                  ></div>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <h4>Quantity</h4>
                <div className=" flex flex-row-reverse border h-10 w-16 bg-white border-gray-300 text-gray-500 justify-center items-center">
                  <div className="flex flex-col flex-grow-0 justify-center ">
                    <div className="w-8 h-5 flex border-b border-gray-200 justify-center items-center">
                      <i
                        className="fa-solid  fa-plus fa-xs"
                        onClick={(e) => itemNum("add")}
                      ></i>
                    </div>
                    <div className="w-8 h-5 flex justify-center items-center">
                      <i
                        className="fa-solid  fa-minus fa-xs"
                        onClick={(e) => itemNum("minus")}
                      ></i>
                    </div>
                  </div>
                  <div className="w-8 h-10 flex justify-center items-center">
                    {num}
                  </div>
                </div>
                <div>
                  <Link to="/account/register">
                    <button className="py-2 px-4 bg-nav-color text-white hover:bg-hover hover:text-black rounded-full">
                      Add to cart
                    </button>
                  </Link>
                  <button className="hidden py-2 relative  overflow-hidden px-4 bg-hover text-black rounded-full cursor-not-allowed">
                    Unavailable
                    <div className="absolute bg-white opacity-30 h-full w-full top-0 left-0"></div>
                  </button>
                </div>
              </div>
              <div className="flex gap-6  text-sm whitespace-nowrap my-3">
                <div
                  className="flex gap-1 items-center"
                  onClick={() => {
                    setClick((prevState) => {
                      return {
                        ...prevState,
                        wish: !prevState.wish,
                      };
                    });
                  }}
                >
                  <div className="relative">
                    <img src="./images/wish.svg" alt="" />
                    <img
                      className={
                        click.wish
                          ? "h-4 w-4 object-cover absolute top-0 left-0"
                          : "hidden"
                      }
                      src="./images/wish-black.svg"
                      alt=""
                    />
                  </div>
                  Add to wishlist
                </div>
                <div
                  className="flex gap-1"
                  onClick={() => {
                    setClick((prevState) => {
                      return {
                        ...prevState,
                        compare: !prevState.compare,
                      };
                    });
                  }}
                >
                  <img
                    className={click.compare ? "rotate-180" : " "}
                    src="./images/prodcompare.svg"
                    alt=""
                  />
                  Add to compare
                </div>
              </div>
            </div>
            <ul>
              <li>
                <div>
                  <span>Shipping & Returns</span>
                  <span>
                    <i
                      className="fa-chevron-down fa-xs fa-solid"
                      onClick={() => {
                        setExpand((prevState) => {
                          return {
                            ...prevState,
                            shipping: !prevState.shipping,
                          };
                        });
                      }}
                    ></i>
                  </span>
                </div>
                <p className={expand.shipping ? "" : "hidden"}>
                  Free shipping and returns available on all orders! We ship all
                  US domestic orders within 5-10 business days!
                </p>
              </li>
              <li>
                <div>
                  <span>Materials</span>
                  <span>
                    <i
                      className="fa-chevron-down fa-xs fa-solid"
                      onClick={() => {
                        setExpand((prevState) => {
                          return {
                            ...prevState,
                            materials: !prevState.materials,
                          };
                        });
                      }}
                    ></i>
                  </span>
                </div>
                <p className={expand.materials ? "" : "hidden"}>
                  Running Shoes cushions your stride with soft foam to keep you
                  running in comfort. Lightweight knit material wraps your foot
                  in breathable support, while a minimalist design fits in just
                  about anywhere your day takes you.
                </p>
              </li>
              <li>
                <div>
                  <span>Care Instructions</span>
                  <span>
                    <i
                      className="fa-chevron-down fa-xs fa-solid"
                      onClick={() => {
                        setExpand((prevState) => {
                          return {
                            ...prevState,
                            care: !prevState.care,
                          };
                        });
                      }}
                    ></i>
                  </span>
                </div>
                <p className={expand.care ? "" : "hidden"}>
                  Use a soft damp cloth and a drop of mild soap to remove any
                  haze. Air dry.
                </p>
              </li>
              <li>
                <span>Share</span>
                <div className="share-container">
                  <h4>Payment Methods</h4>
                  <div className="flex gap-4 flex-grow-0">
                    <img
                      className=" h-6 w-9 rounded"
                      src="https://1000logos.net/wp-content/uploads/2017/06/VISA-symbol.jpg"
                      alt=""
                    />
                    <img
                      className=" h-6 w-9 rounded"
                      src="https://cdn.vox-cdn.com/thumbor/FtAV-Waa1rTPheAkxv3o4i0MVf0=/0x0:1000x1000/1200x800/filters:focal(421x430:581x590)/cdn.vox-cdn.com/uploads/chorus_image/image/62800797/Mastercard_logo.0.jpg"
                      alt=""
                    />
                    <img
                      className=" h-6 w-9 rounded"
                      src="https://user-images.githubusercontent.com/454095/41261786-3d9fbf88-6d92-11e8-9c64-46f9ce91611a.png"
                      alt=""
                    />
                    <img
                      className=" h-6 w-9 rounded"
                      src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/bc/c7/ab/bcc7ab9d-4f5a-21cb-d64a-a0ad8bcd061e/AppIcon-1x_U007emarketing-0-7-0-0-GLES2_U002c0-85-220.png/1200x630wa.png"
                      alt=""
                    />
                    <img
                      className=" h-6 w-9 rounded"
                      src="https://repository-images.githubusercontent.com/501235926/7c9cab01-c311-4606-87f5-6df76fe6bbbf"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <span>FAQ's</span>
                  <span>
                    <i
                      className="fa-chevron-down fa-xs fa-solid"
                      onClick={() => {
                        setExpand((prevState) => {
                          return {
                            ...prevState,
                            faq: !prevState.faq,
                          };
                        });
                      }}
                    ></i>
                  </span>
                </div>
                <div className={expand.faq ? "faq-active" : "hidden"}>
                  <Policies />
                  <Policies />
                  <Policies />
                  <Policies />
                  <Policies />
                </div>
              </li>
            </ul>
        </>
  )
}

export default ProductHeroSection