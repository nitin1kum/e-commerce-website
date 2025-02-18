import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-stars";

const Sidebar = (props) => {
  const location = useLocation();
  console.log(location);
  const [homeExtend, setHomeExtend] = useState(false);
  const [collectionExtend, setCollectionExtend] = useState(false);
  const homeExtender = () => {
    setHomeExtend(!homeExtend);
    if (collectionExtend) {
      setCollectionExtend(!collectionExtend);
    }
  };
  const collectionExtender = () => {
    setCollectionExtend(!collectionExtend);
  };


  return (
    <>
      <div className=" w-72 flex-shrink-0 big-sidebar">
        <div className="bg-white rounded-lg  shadow-lg p-4 w-full h-min capitalize category-container inline-block">
          <h3 className=" font-medium text-lg">shop by categories</h3>
          <ul className=" text-sm text-gray-500 mt-6">
            <li>
              <Link>
                <div className="flex justify-between items-center">
                  <Link to="/">
                    <span>home</span>
                  </Link>
                  <div onClick={homeExtender}>
                    <i
                      className={
                        homeExtend
                          ? "fa-minus  fa-solid fa-xs "
                          : "fa-plus  fa-solid fa-xs "
                      }
                    ></i>
                  </div>
                </div>
              </Link>
              <ul
                className={
                  homeExtend
                    ? "show overflow-hidden category-transition"
                    : "hide overflow-hidden category-transition"
                }
              >
                <li>
                  <Link>
                    <div className="flex justify-between items-center">
                      <Link to="/collections">
                        <span>all collection</span>
                      </Link>
                      <div onClick={collectionExtender}>
                        <i
                          className={
                            collectionExtend
                              ? "fa-minus  fa-solid fa-xs "
                              : "fa-plus  fa-solid fa-xs "
                          }
                        ></i>
                      </div>
                    </div>
                  </Link>
                  <ul
                    className={
                      collectionExtend
                        ? "show overflow-hidden category-transition"
                        : "hide overflow-hidden category-transition"
                    }
                  >
                    <li>
                      <Link to="/collections/cameras">camera</Link>
                    </li>
                    <li>
                      <Link to="/collections/laptops">laptop</Link>
                    </li>
                    <li>
                      <Link to="/collections/portable-speakers">speaker</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/collections/ourstore">our store</Link>
            </li>
            <li>
              <Link to="/blogs">blogs</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
        <div className={props.filter ? "block" : "hidden"}>
          <div className="bg-white rounded-lg shadow-lg p-6 w-full h-min capitalize category-container inline-block mt-6">
            <h3 className="font-medium text-lg">filter by</h3>
            <div className=" my-6">
              <h4 className=" font-medium text-base my-2">Availablity</h4>
              <div className="flex gap-3 my-1">
                <input type="checkbox" name="inStock" id="inStock-checkbox" />
                <label className="text-sm text-gray-500" htmlFor="inStock">
                  In Stock (21)
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  name="outStock"
                  id="outStock-checkbox "
                />
                <label className="text-sm text-gray-500" htmlFor="outStock">
                  Out Stock (1)
                </label>
              </div>
            </div>
            <div className="">
              <h4 className=" font-medium text-base my-2">price</h4>
              <div className="grid grid-cols-2 gap-6 w-11/12">
                <div className=" whitespace-nowrap">
                  <span className="text-sm text-gray-400">$ </span>
                  <div class="relative inline-block">
                    <input
                      type="text"
                      id="floating_filled"
                      class="block  px-1 pb-1 pt-4 w-full text-sm text-gray-600 bg-gray-100 outline-none   appearance-none dark:text-gray-700    peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_filled"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-90 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-4"
                    >
                      From
                    </label>
                  </div>
                </div>
                <div className=" whitespace-nowrap">
                  <span className="text-sm text-gray-400">$ </span>
                  <div class="relative inline-block">
                    <input
                      type="text"
                      id="floating_filled"
                      class="block  px-1 pb-1 pt-4 w-full text-sm text-gray-600 bg-gray-100    appearance-none dark:text-gray-700 outline-none  focus:outline-none focus:ring-0  peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_filled"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-4"
                    >
                      To
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-base mt-6 my-2 ">color</h4>
              <div className="grid grid-cols-7 gap-2">
                <div className="colors-filter"></div>
                <div className="colors-filter"></div>
                <div className="colors-filter"></div>
                <div className="colors-filter"></div>
                <div className="colors-filter"></div>
                <div className="colors-filter"></div>
                <div className="colors-filter"></div>
                <div className="colors-filter"></div>
                <div className="colors-filter"></div>
                <div className="colors-filter"></div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-base mt-6 my-2 ">Size</h4>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    name="outStock"
                    id="outStock-checkbox "
                  />
                  <label className="text-sm text-gray-500" htmlFor="outStock">
                    S (1)
                  </label>
                </div>
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    name="outStock"
                    id="outStock-checkbox "
                  />
                  <label className="text-sm text-gray-500" htmlFor="outStock">
                    M (1)
                  </label>
                </div>
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    name="outStock"
                    id="outStock-checkbox "
                  />
                  <label className="text-sm text-gray-500" htmlFor="outStock">
                    L (1)
                  </label>
                </div>
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    name="outStock"
                    id="outStock-checkbox "
                  />
                  <label className="text-sm text-gray-500" htmlFor="outStock">
                    XL (1)
                  </label>
                </div>
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    name="outStock"
                    id="outStock-checkbox "
                  />
                  <label className="text-sm text-gray-500" htmlFor="outStock">
                    XXL (1)
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 w-full h-min capitalize category-container inline-block mt-6">
            <h3 className=" font-medium text-lg mb-4">Product Tag</h3>
            <div className="flex gap-2 flex-wrap">
              <span className="text-sm text-gray-400 bg-gray-200 p-2 rounded-md">
                Headphones
              </span>
              <span className="text-sm text-gray-400 bg-gray-200 p-2 rounded-md">
                Laptop
              </span>
              <span className="text-sm text-gray-400 bg-gray-200 p-2 rounded-md">
                Mobile
              </span>
              <span className="text-sm text-gray-400 bg-gray-200 p-2 rounded-md">
                Speaker
              </span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 w-full h-min capitalize category-container inline-block mt-6">
            <h3 className=" font-medium text-lg mb-4">Random Products</h3>
            <ul>
              <li className="flex items-center border-b-2 gap-2">
                <Link>
                  <img
                    className=" w-40 object-contain"
                    src="./images/tab.jpg"
                    alt=""
                  />
                </Link>
                <div className=" flex-grow">
                  <Link>
                    <h4 className="capitalize my-1 text-sm">
                      Kids Headphones Bulk 10 pack Multi colored for..
                    </h4>
                  </Link>
                  <ReactStars value={3.5} />
                  <p className="my-1">$100.00</p>
                </div>
              </li>
              <li className="flex items-center  gap-2">
                <Link>
                  <img
                    className=" w-40 object-contain"
                    src="./images/tab.jpg"
                    alt=""
                  />
                </Link>
                <div className=" flex-grow">
                  <Link>
                    <h4 className="capitalize my-1 text-sm">
                      Kids Headphones Bulk 10 pack Multi colored for..
                    </h4>
                  </Link>
                  <ReactStars value={3.5} />
                  <p className="my-1">$100.00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
