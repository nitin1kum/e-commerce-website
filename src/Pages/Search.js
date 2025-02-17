import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
const Search = () => {
  return (
    <div>
      <BreadCrumb name={"Search"} />
      <div className="m-6 bg-white shadow-lg p-6 h-96">
        <h1 className=" text-center text-2xl text-gray-600">
          Search Product Here...
        </h1>
        <div className="w-full">
          <div class="relative inline-block w-1/3 left-1/2 -translate-x-1/2 mt-6">
            <input
              type="text"
              id="floating_filled"
              className="block search-page  px-1 pb-1 pt-4 w-full text-sm text-gray-600 bg-gray-100 outline-none   appearance-none dark:text-gray-700    peer"
              placeholder=" "
            />
            <Link><i className="fa-magnifying-glass fa-solid absolute top-1/2 right-2 text-gray-600 fa-thin fa-xl"></i></Link>
            <label
              for="floating_filled"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-90 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-4"
            >
              Search Product Here
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
