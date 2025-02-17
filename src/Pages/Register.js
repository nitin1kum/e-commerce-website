import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="">
      <BreadCrumb name={"Create Account"} />
      <div className="w-full h-full flex justify-center items-center my-48">
        <div className="w-1/3 register bg-white shadow-lg rounded-lg p-6 gap-6 flex flex-col">
          <h1 className=" text-center text-xl font-semibold">CREATE ACCOUNT</h1>
          <div>
            <h1 className="text-xl warning leading-9"> Please Adjust The Following</h1>
            <p className=" text-gray-600 leading-5">Password can't be blank</p>
            <p className=" text-gray-600">Email can't be blank</p>
          </div>
          <form action="" className="gap-6 flex flex-col">
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
                First Name
              </label>
            </div>
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
                Last Name
              </label>
            </div>
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
          <div className="flex justify-center items-center gap-6">
            <button
              className="py-2 px-6 bg-nav-color text-white rounded-full  hover:bg-hover hover:text-black"
              type="submit"
            >
              Create
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
