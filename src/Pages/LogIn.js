import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="">
      <BreadCrumb name={"Account"} />
      <div className="w-full  h-full flex justify-center items-center my-48">
        <div className="w-96 log-in bg-white shadow-lg rounded-lg p-6 gap-6 flex flex-col">
          <h1 className=" text-center text-xl font-semibold">LOG IN</h1>
          <div>
            <h1 className="text-xl warning"> Please Adjust The Following</h1>
            <p className=" text-gray-600">Incorrect email or password</p>
          </div>
          <form action="" className="gap-6 flex flex-col">
            <div class="relative inline-block">
              <input
                type="email"
                id="floating_filled"
                class="block  px-1 pb-1 pt-4 w-full text-sm text-gray-600 bg-gray-100 outline-none   appearance-none dark:text-gray-700    peer"
                placeholder=" "
              />
              <label
                for="floating_filled"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-90 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-4"
              >
                Email
              </label>
            </div>
            <div class="relative inline-block">
              <input
                type="password"
                id="floating_filled"
                value={""}
                class="block  px-1 pb-1 pt-4 w-full text-sm text-gray-600 bg-gray-100 outline-none   appearance-none dark:text-gray-700    peer"
                placeholder=" "
              />
              <label
                for="floating_filled"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-90 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-4"
              >
                Password
              </label>
            </div>
          </form>
          <Link className="text-sm" to="recover">Forget your password?</Link>
          <div className="flex justify-center items-center gap-6">
            <button
              className="py-2 px-6 bg-nav-color text-white rounded-full  hover:bg-hover hover:text-black"
              type="submit"
            >
              Login
            </button>
            <Link to="/account/register">
              <button className="py-2 px-4 bg-hover text-black hover:bg-nav-color hover:text-white rounded-full">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
