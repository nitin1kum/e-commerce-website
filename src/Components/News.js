import React from "react";
import BreadCrumb from "./BreadCrumb";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import PageSlider from "./PageSlider";

const News = () => {
  return (
    <div>
      <BreadCrumb />
      <div className="flex p-6 gap-6">
        <Sidebar />
        <div>
          <div>
            <h1 className="text-2xl">A Beautiful Sunday Morning Renaissance</h1>
            <div className="relative">
              <div className="h-full w-full ">
                <img
                  className="w-full object-cover py-6 "
                  src="./images/blog-1.jpg"
                  alt=""
                />
              </div>
              <div className="">
                <p className="text-gray-600">
                  You’re only as good as your last collection, which is an
                  enormous pressure. I think there is something about luxury –
                  it’s not something people need, but it’s what they want. It
                  really pulls at their heart. I have a fantastic relationship
                  with money.Scelerisque sociosqu ullamcorper urna nisl mollis
                  vestibulum pretium commodo inceptos cum condimentum placerat
                  diam venenatis blandit hac eget dis lacus a parturient a
                  accumsan nisl ante vestibulum.
                </p>
                <div className="flex my-3">
                  <p className="text-gray-600 leading-3 border-r border-gray-600 pr-2">
                    11 Jun,2023
                  </p>
                  <p className="text-gray-600 leading-3 px-2">kajal korat</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center py-6 my-6 border-y border-gray-200">
            <Link className="text-gray-600">
              <i className="fa-arrow-left fa-solid mr-4 text-black"></i>Back to
              blog
            </Link>
            <div className="flex gap-4 text-black">
              <Link>
                <i className="fa-brands fa-square-facebook fa-xl"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-square-twitter fa-xl"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-square-instagram fa-xl"></i>
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-gray-600 my-6">8 Comments</h1>
            <div>
              <div className="bg-gray-200 p-6 my-2">
                <div className="comment-line text-sm text-gray-600">good</div>
                <div className="text-gray-600 text-sm mt-6">
                  <span className="name border-r border-white pr-2">hjj</span>
                  <span className="comment-date pl-2">January 2023</span>
                </div>
              </div>
              <div className="bg-gray-200 p-6 my-2">
                <div className="comment-line text-sm text-gray-600">good</div>
                <div className="text-gray-600 text-sm mt-6">
                  <span className="name border-r border-white pr-2">hjj</span>
                  <span className="comment-date pl-2">January 2023</span>
                </div>
              </div>
              <div className="bg-gray-200 p-6 my-2">
                <div className="comment-line text-sm text-gray-600">good</div>
                <div className="text-gray-600 text-sm mt-6">
                  <span className="name border-r border-white pr-2">hjj</span>
                  <span className="comment-date pl-2">January 2023</span>
                </div>
              </div>
            </div>
            <PageSlider/>
            <div className=" bg-white  p-6 my-6 shadow-lg rounded-lg">
            <h1 className="text-2xl text-gray-600 ">Leave A Comment</h1>
              <form className="leave-comment flex flex-col  my-6" action="">
                <div className="flex gap-6">
                  <div class="relative inline-block flex-grow">
                    <input
                      type="text"
                      id="floating_filled"
                      class="block  px-2 pb-1 pt-4 w-full text-sm text-gray-600 bg-gray-100 outline-none   appearance-none dark:text-gray-700    peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_filled"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-90 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-4"
                    >
                      Name*
                    </label>
                  </div>
                  <div class="relative inline-block flex-grow">
                    <input
                      type="email"
                      id="floating_filled"
                      class="block  px-2 pb-1 pt-4 w-full text-sm text-gray-600 bg-gray-100 outline-none   appearance-none dark:text-gray-700    peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_filled"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-90 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-4"
                    >
                      Email*
                    </label>
                  </div>
                </div>
                <textarea
                  name="news-comment"
                  id="news-comment"
                  cols="30"
                  rows="5"
                  placeholder="Comment*"
                  className="bg-gray-100 my-6 p-2"
                ></textarea>
                <button
                  className="py-2 px-6 w-min whitespace-nowrap bg-nav-color text-white rounded-full  hover:bg-hover hover:text-black"
                  type="submit"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
