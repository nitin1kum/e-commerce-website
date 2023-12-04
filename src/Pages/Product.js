import React, { useEffect } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import ReactStars from "react-stars";
import { useState } from "react";
import ImgMagnifier from "../Components/ImgMagnifier";
import ProductCard from "../Cards/ProductCard";
import ProductHeroSection from "../Components/ProductHeroSection";

const Product = () => {
  const [review, setReview] = useState(false);
  const [top, setTop] = useState({
    topY: 50,
    bottomY: 0,
    height: 0,
  });

  function handleTop() {
    let position = document
      .getElementById("product-content")
      .getBoundingClientRect();
    let position2 = document
      .getElementsByClassName("product-img")[0]
      .getBoundingClientRect();

    setTop((prevState) => {
      return {
        ...prevState,
        topY: position2.top,
        bottomY: position2.bottom,
        height: position.height,
      };
    });
  }
  
  useEffect(() => {
    
    window.addEventListener("scroll", handleTop);
    return () => {
      window.removeEventListener("scroll", handleTop);
    };
  }, [top]);

  return (
    <div>
      <BreadCrumb />
      <section className=" relative product-hero shadow-lg rounded-lg m-6 p-6 bg-white grid grid-cols-2 gap-6">
        <div className="product-img ">
          <div className=" relative border border-gray-400 mb-6">
            <ImgMagnifier
              src={
                "https://res.cloudinary.com/mynewsdesk-cld/image/upload/t_limit_1000/ge3tmkxawvw2c8rt7xqk.jpg"
              }
              index={0}
              scale={1.5}
              multiplier={0.8}
            />
            <img
              className="absolute top-4 left-4 img-zoom"
              src="/images/img-zoom.svg"
              alt=""
            />
          </div>
          <div className="grid gap-6 grid-cols-2">
            <div className="relative border border-gray-400">
              <ImgMagnifier
                src={"/images/camera-1.jpg"}
                index={1}
                scale={3}
                multiplier={2}
              />
              <img
                className="absolute top-4 left-4 img-zoom"
                src="/images/img-zoom.svg"
                alt=""
              />
            </div>
            <div className="relative border border-gray-400">
              <ImgMagnifier
                src={"/images/camera-2.jpg"}
                index={2}
                scale={3}
                multiplier={2}
              />
              <img
                className="absolute top-4 left-4 img-zoom"
                src="/images/img-zoom.svg"
                alt=""
              />
            </div>
            <div className="relative border border-gray-400">
              <ImgMagnifier
                src={"/images/camera-3.jpg"}
                index={3}
                scale={3}
                multiplier={2}
              />
              <img
                className="absolute top-4 left-4 img-zoom"
                src="/images/img-zoom.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="relative product-details h-full">
          <div
            id="product-content"
            className={
              top.topY < 10
                ? top.height >= top.bottomY
                  ? "bottom-0 w-full absolute"
                  : "fixed top-0 pr-12 w-full"
                : ""
            }
          >
            <ProductHeroSection />
          </div>
        </div>
      </section>
      <section className="description p-6 my-6">
        <h1 className="text-2xl my-6">Description</h1>
        <div className="shadow-lg rounded-lg bg-white text-gray-600 p-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis at
            iste laborum blanditiis dolor? Inventore at asperiores aliquam
            quisquam ullam cumque voluptatibus! Quae explicabo omnis iusto sit
            quod natus placeat corrupti possimus, perspiciatis ipsum, corporis
            blanditiis. Impedit optio aperiam suscipit quia ad quis dignissimos
            voluptate tempora reiciendis omnis cumque, perspiciatis quam odio
            ipsa nobis inventore rerum, natus corporis eum? Eveniet recusandae
            aliquam aliquid, officiis magnam porro quo obcaecati optio?
          </p>
        </div>
      </section>
      <section className="review-section my-6 p-6" id="review-section">
        <h1 className="text-2xl">Reviews</h1>
        <div className="shadow-lg rounded-lg bg-white p-6 my-6">
          <div>
            <h2 className="text-xl font-normal">Coustomer Reviews</h2>
            <div className="border-b border-gray-300 ">
              <div className="flex gap-3 my-3">
                <ReactStars value={3} onChange={false} />
                <p>Based on 3 reviews</p>
              </div>
              <p
                className="text-right underline mb-2 cursor-pointer"
                onClick={() => {
                  setReview(!review);
                }}
              >
                Write a review
              </p>
            </div>
            <div className={review ? "my-6" : "hidden"}>
              <h3 className="text-lg text-gray-600 my-3">Write A Review</h3>
              <form action="" className="review-form">
                <div>
                  <label htmlFor="customer-name">Name</label>
                  <input
                    type="text"
                    id="customer-name"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="customer-email">Email</label>
                  <input
                    type="email"
                    id="customer-email"
                    placeholder="john.smith@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="review-rating">Rating</label>
                  <ReactStars
                    id="review-rating"
                    className="m-0"
                    onChange={true}
                  />
                </div>
                <div>
                  <label htmlFor="review-title">Review Title</label>
                  <input
                    type="text"
                    id="review-title"
                    placeholder="Give your review title"
                  />
                </div>
                <div>
                  <label htmlFor="review-comment">Body of Review(1500)</label>
                  <textarea
                    name="review-comment"
                    id="review-comment"
                    cols="30"
                    rows="10"
                    placeholder="Write your comments here"
                  ></textarea>
                </div>
                <button
                  className="py-2 my-6  px-6 rounded-full bg-nav-color hover:bg-hover text-white hover:text-black"
                  type="submit"
                >
                  Submit Review
                </button>
              </form>
            </div>
            <ul>
              <li className="py-3">
                <ReactStars value={3.5} size={20} />
                <p className="text-sm font-medium">Nice</p>
                <div className="text-sm text-gray-600">
                  <span className=" italic text-sm font-medium text-black">
                    3
                  </span>{" "}
                  on{" "}
                  <span className=" italic text-black text-sm font-medium">
                    Jul 06,2023
                  </span>
                </div>
                <p className="text-gray-600">Nice</p>
                <div className="ml-6 bg-gray-100 rounded-lg p-6 m-3">
                  <h4 className="text-lg leading-10 ">-Digitic</h4>
                  <p className="text-gray-600">
                    Thank you for your purchase from. Please let us know if we
                    can do anything else for you!
                  </p>
                </div>
                <p className="text-right underline">Report as Inappropriate</p>
              </li>
              <li className="py-3">
                <ReactStars value={3.5} size={20} />
                <p className="text-sm font-medium">Nice</p>
                <div className="text-sm text-gray-600">
                  <span className=" italic text-sm font-medium text-black">
                    3
                  </span>{" "}
                  on{" "}
                  <span className=" italic text-black text-sm font-medium">
                    Jul 06,2023
                  </span>
                </div>
                <p className="text-gray-600">Nice</p>
                <div className="ml-6 bg-gray-100 rounded-lg p-6 m-3">
                  <h4 className="text-lg leading-10 ">-Digitic</h4>
                  <p className="text-gray-600">
                    Thank you for your purchase from. Please let us know if we
                    can do anything else for you!
                  </p>
                </div>
                <p className="text-right underline">Report as Inappropriate</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="last-section p-6">
        <h1 className="text-2xl">You May Also Like</h1>
        <div className="grid grid-cols-6 gap-6 my-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </div>
  );
};

export default Product;
