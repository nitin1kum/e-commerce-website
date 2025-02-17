import React from "react";
import { useState } from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";

const ViewProject = () => {
  const [filter, setFilter] = useState({
    availablity: false,
    price: false,
    color: false,
    size: false,
  });
  return (
    <div className="w-screen h-screen flex z-50">
      <div className="w-80 relative  flex-shrink-0 bg-white z-50 ">
        <div className=" filters-container h-full flex flex-col">
          <div className="sidebar-header px-4 py-3 flex items-center gap-16 border-b border-gray-200">
            <i className="fa-xmark fa-solid fa-xl"></i>
            <span>
              <p className="text-gray-600 leading-6">Filter And Sort</p>
              <p className="text-gray-600 leading-6">5 of 21 products</p>
            </span>
          </div>
          <div className="relative h-full">
            <div className="sidebar-body  p-6 text-gray-600">
              <ul>
                <li>
                  <p>Availablity</p>
                  <i
                    className="fa-arrow-right fa-solid cursor-pointer"
                    onClick={() => {
                      setFilter((prev) => {
                        return {
                          ...prev,
                          availablity: true,
                        };
                      });
                    }}
                  ></i>
                </li>
                <li>
                  <p>Price</p>
                  <i
                    className="fa-arrow-right fa-solid cursor-pointer"
                    onClick={() => {
                      setFilter((prev) => {
                        return {
                          ...prev,
                          price: true,
                        };
                      });
                    }}
                  ></i>
                </li>
                <li>
                  <p>Color</p>
                  <i
                    className="fa-arrow-right fa-solid cursor-pointer"
                    onClick={() => {
                      setFilter((prev) => {
                        return {
                          ...prev,
                          color: true,
                        };
                      });
                    }}
                  ></i>
                </li>
                <li>
                  <p>Size</p>
                  <i
                    className="fa-arrow-right fa-solid cursor-pointer"
                    onClick={() => {
                      setFilter((prev) => {
                        return {
                          ...prev,
                          size: true,
                        };
                      });
                    }}
                  ></i>
                </li>
                <li>
                  <span className="mr-6">
                    <p>Sort By:</p>
                  </span>
                  <select
                    className="bg-gray-100 rounded-lg p-2 outline-none text-sm text-gray-700"
                    name="out-store-select"
                    id="out-store-select"
                  >
                    <option value="Featured">Featured</option>
                    <option value="Best Selling" selected>
                      Best Selling
                    </option>
                    <option value="Alphabetically : A to Z">
                      Alphabetically : A to Z
                    </option>
                    <option value="Alphabetically : Z to A">
                      Alphabetically : Z to A
                    </option>
                    <option value="Price: Low to High">
                      Price: Low to High
                    </option>
                    <option value="Price: High to Low">
                      Price: High to Low
                    </option>
                    <option value="Date: Old to New">Date: Old to New</option>
                    <option value="Date: New to Old">Date: New to Old</option>
                  </select>
                </li>
              </ul>
            </div>
            <div className="sidebar-footer border-t border-gray-200 px-3 py-3 flex justify-center gap-4 absolute bottom-0 w-full">
              <button className="py-2.5 w-full  bg-nav-color text-white hover:bg-hover hover:text-black rounded-full">
                Clear
              </button>
              <button className="py-2.5 w-full bg-hover text-black rounded-full hover:bg-nav-color hover:text-white">
                Apply
              </button>
            </div>
            <div
              className={
                filter.availablity
                  ? "bg-white origin-right scale-x-100 h-full w-full overflow-hidden transition-all duration-500 absolute top-0 left-0"
                  : "bg-white origin-right scale-x-0 overflow-hidden h-full w-full transition-all duration-500 absolute top-0 left-0 "
              }
            >
              <div className="p-6">
                <div className="flex gap-3 items-center mb-6 text-gray-600">
                  <i
                    className="fa-arrow-left fa-solid text-black cursor-pointer"
                    onClick={(event) =>
                      setFilter((prev) => {
                        return {
                          ...prev,
                          availablity: false,
                        };
                      })
                    }
                  ></i>
                  <p className="text-sm">Availablity</p>
                </div>
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
            </div>
            <div
              className={
                filter.price
                  ? "bg-white origin-right scale-x-100 h-full w-full transition-all duration-500 overflow-hidden absolute top-0 left-0"
                  : "bg-white origin-right scale-x-0 overflow-hidden h-full w-full transition-all duration-500 absolute top-0 left-0 "
              }
            >
              <div className="p-6">
                <div className="flex gap-3 items-center mb-6 text-gray-600">
                  <i
                    className="fa-arrow-left fa-solid text-black cursor-pointer"
                    onClick={() => {
                      setFilter((prev) => {
                        return {
                          ...prev,
                          price: !true,
                        };
                      });
                    }}
                  ></i>
                  <p className="text-sm">Price</p>
                </div>
                <p className="text-gray-600 left-10 mb-3">
                  The Highest price Is $500
                </p>
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
            </div>
            <div
              className={
                filter.color
                  ? "bg-white origin-right h-full w-full overflow-hidden scale-x-100 transition-all duration-500 absolute top-0 left-0"
                  : "bg-white origin-right overflow-hidden h-full w-full scale-x-0 transition-all duration-500 absolute top-0 left-0 "
              }
            >
              <div className="p-6">
                <div className="flex gap-3 items-center mb-6 text-gray-600">
                  <i
                    className="fa-arrow-left fa-solid text-black cursor-pointer"
                    onClick={() => {
                      setFilter((prev) => {
                        return {
                          ...prev,
                          color: false,
                        };
                      });
                    }}
                  ></i>
                  <p className="text-sm">Color</p>
                </div>
                <div className="grid grid-cols-3 gap-6">
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
            </div>
            <div>
              <div
                className={
                  filter.size
                    ? "bg-white origin-right h-full w-full overflow-hidden scale-x-100 transition-all duration-500 absolute top-0 left-0"
                    : "bg-white origin-right overflow-hidden h-full w-full scale-x-0 transition-all duration-500 absolute top-0 left-0 "
                }
              >
                <div className="p-6">
                  <div className="flex gap-3 items-center mb-6 text-gray-600">
                    <i
                      className="fa-arrow-left fa-solid text-black  cursor-pointer"
                      onClick={() => {
                        setFilter((prev) => {
                          return {
                            ...prev,
                            size: false,
                          };
                        });
                      }}
                    ></i>
                    <p className="text-sm">Size</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-3">
                      <input
                        type="checkbox"
                        name="outStock"
                        id="outStock-checkbox "
                      />
                      <label
                        className="text-sm text-gray-500"
                        htmlFor="outStock"
                      >
                        S (1)
                      </label>
                    </div>
                    <div className="flex gap-3">
                      <input
                        type="checkbox"
                        name="outStock"
                        id="outStock-checkbox "
                      />
                      <label
                        className="text-sm text-gray-500"
                        htmlFor="outStock"
                      >
                        M (1)
                      </label>
                    </div>
                    <div className="flex gap-3">
                      <input
                        type="checkbox"
                        name="outStock"
                        id="outStock-checkbox "
                      />
                      <label
                        className="text-sm text-gray-500"
                        htmlFor="outStock"
                      >
                        L (1)
                      </label>
                    </div>
                    <div className="flex gap-3">
                      <input
                        type="checkbox"
                        name="outStock"
                        id="outStock-checkbox "
                      />
                      <label
                        className="text-sm text-gray-500"
                        htmlFor="outStock"
                      >
                        XL (1)
                      </label>
                    </div>
                    <div className="flex gap-3">
                      <input
                        type="checkbox"
                        name="outStock"
                        id="outStock-checkbox "
                      />
                      <label
                        className="text-sm text-gray-500"
                        htmlFor="outStock"
                      >
                        XXL (1)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-400 w-full h-full"></div>
    </div>
  );
};

export default ViewProject;
