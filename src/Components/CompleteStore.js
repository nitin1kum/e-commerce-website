import React, { useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Sidebar from "../Components/Sidebar";
import ProductCard from "../Cards/ProductCard";
import PageSlider from "./PageSlider";

const CompleteStore = (props) => {
  const [grid, setGrid] = useState(5);
  const [showSidebar, setShowSidebar] = useState(false);

  const gridChanger = (e) => {
    if (e === "gr") {
      setGrid(1);
    } else if (e === "gr2") {
      setGrid(2);
    } else if (e === "gr3") {
      setGrid(3);
    } else if (e === "gr4") {
      setGrid(5);
    }
  };
  const [filter, setFilter] = useState({
    availablity: false,
    price: false,
    color: false,
    size: false,
  });

  return (
    <div className="bg-gray-100 store">
      <BreadCrumb name={props.value} />
      <div className="flex p-6 gap-6 bg-gray-50">
        <Sidebar filter={props.filter} />
        <div className={showSidebar?"w-screen h-screen flex z-50 small-sidebar fixed left-0 scroll-up top-0 ":"hidden"}>
          <div className="w-80 relative  flex-shrink-0 bg-white z-50 ">
            <div className=" filters-container h-full flex flex-col">
              <div className="sidebar-header px-4 py-3 flex items-center gap-16 border-b border-gray-200">
                <i className="fa-xmark fa-solid fa-xl" onClick={event=>setShowSidebar(false)}></i>
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
                        <option value="Date: Old to New">
                          Date: Old to New
                        </option>
                        <option value="Date: New to Old">
                          Date: New to Old
                        </option>
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
                      <input
                        type="checkbox"
                        name="inStock"
                        id="inStock-checkbox"
                      />
                      <label
                        className="text-sm text-gray-500"
                        htmlFor="inStock"
                      >
                        In Stock (21)
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
          <div className=" bg-gray-400 w-full h-full bg-opacity-50" onClick={event=>setShowSidebar(false)}></div>
        </div>
        <div className="main w-full">
          <div className="main-navbar bg-white shadow-lg mb-6 rounded-lg p-2">
            <div className="flex justify-between mb-6">
              <div className="laptop-nav">
                <span className=" text-sm ml-3 mr-6">Sort By:</span>
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
                  <option value="Price: Low to High">Price: Low to High</option>
                  <option value="Price: High to Low">Price: High to Low</option>
                  <option value="Date: Old to New">Date: Old to New</option>
                  <option value="Date: New to Old">Date: New to Old</option>
                </select>
              </div>
              <button
                className="py-2.5 w-fit px-6 bg-hover text-black text-sm rounded-lg hover:bg-nav-color mobile-nav hover:text-white"
                onClick={(event) => setShowSidebar(true)}
              >
                Filter And Sort
              </button>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-400 ">21 products</span>
                <div className="grid-designer flex align-middle gap-2">
                  <span
                    className={
                      grid === 5
                        ? `p-2 bg-gray-600 rounded-lg cursor-pointer`
                        : `p-2 bg-gray-100 rounded-lg cursor-pointer`
                    }
                    onClick={(event) => gridChanger("gr4")}
                  >
                    <img className="" src="/images/gr4.svg" alt="" />
                  </span>
                  <span
                    className={
                      grid === 3
                        ? `p-2 bg-gray-600 rounded-lg cursor-pointer`
                        : `p-2 bg-gray-100 rounded-lg cursor-pointer`
                    }
                    onClick={(event) => gridChanger("gr3")}
                  >
                    <img className="" src="/images/gr3.svg" alt="" />
                  </span>
                  <span
                    className={
                      grid === 2
                        ? `p-2 bg-gray-600 rounded-lg cursor-pointer`
                        : `p-2 bg-gray-100 rounded-lg cursor-pointer`
                    }
                    onClick={(event) => gridChanger("gr2")}
                  >
                    <img className="" src="/images/gr2.svg" alt="" />
                  </span>
                  <span
                    className={
                      grid === 1
                        ? `p-2 bg-gray-600 rounded-lg cursor-pointer`
                        : `p-2 bg-gray-100 rounded-lg cursor-pointer`
                    }
                    onClick={(event) => gridChanger("gr")}
                  >
                    <img className="" src="/images/gr.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex flex-wrap gap-4">
              <span className="px-5 py-2 bg-black text-white rounded-full">
                Clear
              </span>
              <span className="px-5 py-2 bg-gray-100 text-sm text-black rounded-full">
                In Stock <i className="fa-xmark ml-2 fa-solid fa-sm"></i>
              </span>
            </div>
          </div>
          <div className={`grid  grid-cols-${grid} h-min gap-6 main-store `}>
            <ProductCard gridNum={grid} />
            <ProductCard gridNum={grid} />
            <ProductCard gridNum={grid} />
            <ProductCard gridNum={grid} />
            <ProductCard gridNum={grid} />
            <ProductCard gridNum={grid} />
            <ProductCard gridNum={grid} />
            <ProductCard gridNum={grid} />
            <ProductCard gridNum={grid} />
            <ProductCard gridNum={grid} />
            <ProductCard gridNum={grid} />
          </div>
          <PageSlider />
        </div>
      </div>
    </div>
  );
};

export default CompleteStore;
