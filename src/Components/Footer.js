import React, {  useState } from "react";
import FooterData from "../Data/FooterData";
import { Link } from "react-router-dom";

const Footer = () => {
  const [footerDropdown, setFooterDropdown] = useState({
    contact: true,
    info: true,
    account: true,
    quickLink: true,
    apps: true,
  });

  const handleClick = (e) => {
    if (e === "info") {
      setFooterDropdown((prev) => {
        return {
          ...prev,
          info: !prev.info,
        };
      });
    }
    if (e === "account") {
      setFooterDropdown((prev) => {
        return {
          ...prev,
          account: !prev.account,
        };
      });
    }
    if (e === "quickLink") {
      setFooterDropdown((prev) => {
        return {
          ...prev,
          quickLink: !prev.quickLink,
        };
      });
    }
  };
  return (
    <div className=" bg-nav-color h-auto w-screen  capitalize">
      <div className="flex footer-send-msg items-center justify-around w-4/5 m-auto py-20">
        <div className="flex items-center text-white gap-8">
          <i class="fa-regular fa-paper-plane fa-xl"></i>
          <h1 className="text-2xl capitalize whitespace-nowrap ">
            sign up for newsletter
          </h1>
        </div>
        <form
          className="w-1/2 h-min rounded-md overflow-hidden flex items-center bg-white p-1"
          action=""
        >
          <input
            className="w-full px-12 py-2 text-xs text-black border-none outline-none"
            type="email"
            name="search-bar"
            id="search-bar"
            placeholder="Your Email"
            required
          />
          <button
            className="bg-nav-color  py-1 px-2 rounded hover:bg-hover hover:text-black text-white"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="footer grid footer-grid w-full px-4 py-16 justify-between text-white  border-bottom">
        <div className="flex-grow justify-self-center ">
          <div className="flex justify-between items-center">
            <h2 className="mb-4">Contact Us</h2>
            <i
              className="fa-chevron-down fa-solid fa-xs footer-dropdown hidden"
              onClick={() => {
                setFooterDropdown((prev) => {
                  return {
                    ...prev,
                    contact: !prev.contact,
                  };
                });
              }}
            ></i>
          </div>
          <div className={footerDropdown.contact ? "footer-grid-item" : " my-4"}>
            <span className="text-xs ">
              {" "}
              Demo Store <br />
              No. 1259 Freedom, New york,1111 <br />
              United State
            </span>
            <Link className=" hover:text-hover ">
              <p>+91 6397251185</p>
            </Link>
            <Link className=" hover:text-hover">
              <p>Demo@Exampledemo.com</p>
            </Link>
            <ul className="grid grid-cols-5 mt-4 gap-2 w-fit">
              <li className=" bg-gray-900 bg-opacity-50  h-10 w-10 rounded-full flex items-center justify-center hover:text-hover">
                <Link>
                  <i className="fa-brands fa-twitter "></i>
                </Link>
              </li>
              <li className=" bg-gray-900 bg-opacity-50  h-10 w-10 rounded-full flex items-center justify-center hover:text-hover">
                <Link>
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li className=" bg-gray-900 bg-opacity-50  h-10 w-10 rounded-full flex items-center justify-center hover:text-hover">
                <Link>
                  <i className="fa-brands fa-youtube"></i>
                </Link>
              </li>
              <li className=" bg-gray-900 bg-opacity-50  h-10 w-10 rounded-full flex items-center justify-center hover:text-hover">
                <Link>
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li className=" bg-gray-900 bg-opacity-50  h-10 w-10 rounded-full flex items-center justify-center hover:text-hover">
                <Link>
                  <i className="fa-brands fa-pinterest-p"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-grow w-full justify-self-center ">
          <div className="flex justify-between items-center">
            <h2 className="mb-6">Information</h2>
            <i
              className="fa-chevron-down hidden fa-solid fa-xs footer-dropdown "
              onClick={() => {
                handleClick("info");
              }}
            ></i>
          </div>

          <ul className={footerDropdown.info ? "footer-grid-item" : "my-4"}>
            {FooterData[0].li.map((items, index1) => {
              return (
                <li>
                  <Link className="hover:text-hover" to={items.link}>
                    <p>{items.name}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex-grow w-full justify-self-center ">
          <div className="flex justify-between items-center">
            <h2 className="mb-4">Account</h2>
            <i
              className="fa-chevron-down hidden fa-solid fa-xs footer-dropdown "
              onClick={() => {
                handleClick("account");
              }}
            ></i>
          </div>

          <ul className={footerDropdown.account ? " footer-grid-item" : "my-4 "}>
            {FooterData[1].li.map((items, index1) => {
              return (
                <li>
                  <Link className="hover:text-hover" to={items.link}>
                    <p>{items.name}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex-grow w-full justify-self-center ">
          <div className="flex justify-between items-center">
            <h2 className="mb-4">Qucik Links</h2>
            <i
              className="fa-chevron-down hidden fa-solid fa-xs footer-dropdown "
              onClick={() => {
                handleClick("quickLink");
              }}
            ></i>
          </div>

          <ul className={footerDropdown.quickLink ? "footer-grid-item" : "my-4"}>
            {FooterData[2].li.map((items, index1) => {
              return (
                <li>
                  <Link className="hover:text-hover" to={items.link}>
                    <p>{items.name}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" w-4/5 justify-self-center ">
          <div className="flex justify-between items-center">
            <h2 className="mb-4">Our App</h2>
            <i
              className="fa-chevron-down hidden fa-solid fa-xs footer-dropdown "
              onClick={() => {
                setFooterDropdown((prev) => {
                  return {
                    ...prev,
                    apps: !prev.apps,
                  };
                });
              }}
            ></i>
          </div>

          <div className={footerDropdown.apps ? "footer-grid-item" : "my-4 "}>
            <p>
              Download our App and get extra 15% Discount on your first
              Order....!
            </p>
            <div className="grid gap-2 mt-4">
              <img
                src="https://demo-digitic.myshopify.com/cdn/shop/files/app-icon-01.png?v=1654931267"
                alt=""
                srcset=""
              />
              <img
                src="https://demo-digitic.myshopify.com/cdn/shop/files/app-icon-02.png?v=1654931286"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full copyright-sec justify-between border-bottom px-4 py-4 text-white">
        <p>
          @ {new Date().getFullYear()}, Digitic{" "}
          <Link className=" hover:underline">Powered by Shopify</Link>
        </p>
        <div className="flex gap-4">
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
    </div>
  );
};

export default Footer;
