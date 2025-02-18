import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [hiddenAccount, setHiddenAccount] = useState(true);
  const handleClickAccount = () => {
    setHiddenAccount(!hiddenAccount);
  };
  const [cartHide, setCartHide] = useState(true);
  const [navRes, setNavRes] = useState(true);

  return (
    <>
      <div
        className={
          cartHide
            ? " scale-x-0 opacity-0 overflow-hidden w-screen h-screen origin-right fixed top-0 right-0 flex justify-end transition-all duration-400 "
            : "h-screen opacity-100 origin-right scale-x-100 cart-sidebar w-screen fixed top-0 transition-all duration-400 right-0 flex justify-end"
        }
      >
        <div
          className="bg-black bg-opacity-60 h-full w-full absolute"
          onClick={() => {
            setCartHide(!cartHide);
          }}
        ></div>
        <div className="h-full w-96 cart-popup self-end bg-white z-50 relative ">
          <ul className="px-6">
            <li className="flex gap-4  my-6">
              <img
                className="w-16 h-16 object-cover"
                src="./images/camera-2.jpg"
                alt=""
              />
              <div>
                <h2 className="text-sm font-medium">
                  Hero Session Action Camera with 8MP Photos
                </h2>
                <span className="text-sm">$16.00</span>
                <p className="text-xs text-gray-600 leading-5">Size: L</p>
                <p className="text-xs text-gray-600 leading-5">
                  Color: #7D858C
                </p>
              </div>
              <div>
                <i class="fa-regular fa-trash-can text-gray-600"></i>
              </div>
            </li>
            <li className="flex gap-4  my-6">
              <img
                className="w-16 h-16 object-cover"
                src="./images/camera-2.jpg"
                alt=""
              />
              <div>
                <h2 className="text-sm font-medium">
                  Hero Session Action Camera with 8MP Photos
                </h2>
                <span className="text-sm">$16.00</span>
                <p className="text-xs text-gray-600 leading-5">Size: L</p>
                <p className="text-xs text-gray-600 leading-5">
                  Color: #7D858C
                </p>
              </div>
              <div>
                <i class="fa-regular fa-trash-can text-gray-600"></i>
              </div>
            </li>
            <li className="flex gap-4  my-6">
              <img
                className="w-16 h-16 object-cover"
                src="./images/camera-2.jpg"
                alt=""
              />
              <div>
                <h2 className="text-sm font-medium">
                  Hero Session Action Camera with 8MP Photos
                </h2>
                <span className="text-sm">$16.00</span>
                <p className="text-xs text-gray-600 leading-5">Size: L</p>
                <p className="text-xs text-gray-600 leading-5">
                  Color: #7D858C
                </p>
              </div>
              <div>
                <i class="fa-regular fa-trash-can text-gray-600"></i>
              </div>
            </li>
          </ul>
          <div className="flex justify-between border-y px-6 border-gray-400 py-3 text-sm">
            <span>
              <h4 className="font-medium">Total Item</h4>
              <p>4</p>
            </span>
            <span>
              <h4 className="font-medium">Subtotal</h4>
              <p className="font-medium">$236.00</p>
            </span>
          </div>
          <div className="p-6 flex justify-center gap-3">
            <Link
              to="/cart"
              onClick={() => {
                setCartHide(!cartHide);
              }}
            >
              <button className="px-6 py-2 bg-nav-color text-white rounded-full hover:bg-hover hover:text-black">
                View Cart
              </button>
            </Link>
            <button className="px-6 py-2 bg-hover text-black rounded-full hover:bg-nav-color hover:text-white">
              Check Out
            </button>
          </div>
        </div>
      </div>
      <div className="flex header-top-strip header-top px-4 pt-2 pb-2 ">
        <div className="flex flex-grow justify-between items-center">
          <p className=" capitalize text-white text-xs ">
            free shopping over $100 & free returns
          </p>
          <a
            className=" capitalize text-white text-xs border-left pr-3"
            href="6397251185"
          >
            hotline: +91 6397251185
          </a>
        </div>
        <div className="flex ml-5 gap-10">
          <p className="capitalize text-white text-xs ">
            english <i className="fa-solid fa-chevron-down fa-xs pl-1"></i>
          </p>
          <p className=" uppercase text-white text-xs">
            usd $ <i className="fa-solid fa-chevron-down fa-xs pl-1"></i>
          </p>
        </div>
      </div>
      <div className="flex relative header-top-strip px-4 py-4  items-center text-white justify-between border-bottom">
        <div className="flex justify-start items-center gap-3">
          <div
            className={
              navRes
                ? "flex h-screen scroll-up absolute top-0 left-0 -translate-x-full transition-all duration-500"
                : "flex h-screen absolute scroll-up top-0 left-0 transition-all duration-500"
            }
          >
            <ul
              className={
                " h-5/6 flex-shrink-0 overflow-y- overflow-x-hidden z-50 w-72 text-white origin-top  transition-all duration-500 header-top-strip items scale-y-1"
              }
            >
              <li className="border-bottom align-middle py-3 px-4 hover:text-hover">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="border-bottom align-middle py-3 px-4 hover:text-hover">
                <NavLink to="/collections/camera&videos">
                  Camera & Videos
                </NavLink>
              </li>
              <li className="border-bottom align-middle py-3 px-4 hover:text-hover">
                <NavLink to="/collections/computers&laptops">
                  Computers& Laptops
                </NavLink>
              </li>
              <li className="border-bottom align-middle py-3 px-4 hover:text-hover">
                <NavLink to="/collections/home-appliance">
                  Home Appliances
                </NavLink>
              </li>
              <li className="border-bottom align-middle py-3 px-4 hover:text-hover">
                <NavLink to="/collections/handbags">Handbag</NavLink>
              </li>
              <li className="border-bottom align-middle py-3 px-4 hover:text-hover">
                <NavLink to="/collections/mobiles&tablets">
                  Mobiles & Tablets
                </NavLink>
              </li>
              <li className="border-bottom align-middle py-3 px-4 hover:text-hover">
                <NavLink to="/collections/smartphones">Smart Phones</NavLink>
              </li>
              <li className="border-bottom align-middle py-3 px-4 hover:text-hover">
                <NavLink to="/collections/portable-speakers">
                  Portable Speakers
                </NavLink>
              </li>
              <li className="border-bottom align-middle py-3 px-4 hover:text-hover">
                <NavLink to="/collections/music&gaming">Music & Gaming</NavLink>
              </li>
              <li className="border-bottom align-middle py-3 px-4 hover:text-hover">
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li className="border-bottom align-middle py-3 px-4 hover:text-hover">
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li className="border-bottom align-middle py-3 px-4 hover:text-hover">
                <NavLink to="/collections/outstore">Our Store</NavLink>
              </li>
              <li className="border-bottom align-middle py-3 px-4 hover:text-hover">
                <ul className="grid grid-cols-5">
                  <li className=" bg-gray-700 bg-opacity-50 h-10 w-10 rounded-full flex items-center justify-center hover:text-hover">
                    <Link>
                      <i className="fa-brands fa-twitter "></i>
                    </Link>
                  </li>
                  <li className=" bg-gray-700 bg-opacity-50 h-10 w-10 rounded-full flex items-center justify-center hover:text-hover">
                    <Link>
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li className=" bg-gray-700 bg-opacity-50 h-10 w-10 rounded-full flex items-center justify-center hover:text-hover">
                    <Link>
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                  </li>
                  <li className=" bg-gray-700 bg-opacity-50 h-10 w-10 rounded-full flex items-center justify-center hover:text-hover">
                    <Link>
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li className=" bg-gray-700 bg-opacity-50 h-10 w-10 rounded-full flex items-center justify-center hover:text-hover">
                    <Link>
                      <i className="fa-brands fa-pinterest-p"></i>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div
              className="p-2 bg-nav-color bg-opacity-90 text-white w-min h-min"
              onClick={() => {
                setNavRes(!navRes);
              }}
            >
              <i className="fa-xmark fa-solid fa-xl"></i>
            </div>
          </div>
          <div className="hamburger hidden"
            onClick={() => {
              setNavRes(!navRes);
            }}
          >
            <i className="fa-bars fa-solid fa-xl"></i>
          </div>
          <NavLink to="/">
            <h1 className="  text-4xl capitalize cursor-pointer">Digitic.</h1>
          </NavLink>
        </div>
        <div className="w-2/5 header-searchbar">
          <form
            className=" h-min rounded-md overflow-hidden flex items-center bg-yellow-600"
            action=""
          >
            <input
              className="w-full px-12 py-2 text-xs text-black border-none outline-none"
              type="text"
              name="nav-search-bar"
              id="nav-search-bar"
              value={searchValue}
              placeholder="Search Product Here"
              required
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <i className="px-2 fa-solid fa-magnifying-glass cursor-pointer"></i>
          </form>
        </div>
        <div className="flex header-components items-center gap-8 header-items">
          <Link className="flex items-center gap-2 rotate" to="pages/compare">
            <img
              className="header-icon-sizing  duration-500 transition-all"
              src="./images/compare.svg"
              alt="projects"
            />
            <div className="">
              <p className="text-xs capitalize leading-5">compare</p>
              <p className="text-xs capitalize">projects</p>
            </div>
          </Link>
          <Link className="flex items-center gap-2 rotate" to="pages/wishlist">
            <img
              className="header-icon-sizing  duration-500 transition-all"
              src="./images/wishlist.svg"
              alt="Wishlist"
            />
            <div className="">
              <p className="text-xs capitalize leading-5">favourite</p>
              <p className="text-xs capitalize">Wishlist</p>
            </div>
          </Link>
          <Link className="relative account-section">
            <div
              className="flex items-center gap-2 rotate"
              onClick={handleClickAccount}
            >
              <img
                className="header-icon-sizing  duration-500 transition-all"
                src="./images/user.svg"
                alt="my account"
              />
              <div className="">
                <p className="text-xs capitalize leading-5">log in</p>
                <p className="text-xs capitalize">my account</p>
              </div>
            </div>
            <div className="account-dropdown">
              <ul
                className={
                  hiddenAccount
                    ? "absolute rounded-md top-12 header-top-strip w-24 items transition-all origin-top duration-500 scale-y-0 z-50"
                    : "absolute z-50 bg-white rounded-md origin-top top-12 transition-all duration-500 header-top-strip w-full items scale-y-1"
                }
              >
                <li className="">
                  <Link to="account/log-in">Log In</Link>
                </li>
                <li className="">
                  <Link to="account/register">Register</Link>
                </li>
              </ul>
            </div>
          </Link>
          <div
            className="flex cursor-pointer items-center gap-2 rotate relative"
            onClick={() => {
              setCartHide(!cartHide);
            }}
          >
            <img
              className="header-icon-sizing duration-500 transition-all"
              src="./images/cart.svg"
              alt=""
            />
            <div className="cart-data">
              <p className="text-xs bg-white rounded-3xl text-black text-center h-4/5 w-4/5 line-h leading-3 mb-1">
                0
              </p>
              <p className="text-xs capitalize ">$ 100</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full header-searchbar-responsive h-min bg-nav-color p-4 hidden justify-center ">
        <form
          className=" h-min w-3/5 rounded-md overflow-hidden flex items-center bg-yellow-600"
          action=""
        >
          <input
            className="w-full px-12 py-2 text-xs text-black border-none outline-none"
            type="text"
            name="nav-search-bar"
            id="nav-search-bar"
            value={searchValue}
            placeholder="Search Product Here"
            required
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <i className="px-2 fa-solid fa-magnifying-glass cursor-pointer"></i>
        </form>
      </div>
      <div className="navbar-responsive">
        <Navbar />
      </div>
    </>
  );
};

export default Header;
