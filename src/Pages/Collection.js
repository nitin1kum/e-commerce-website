import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const Collection = (props) => {
  return (
    <div className="flex p-6 gap-6">
      <Sidebar />
      <div className="flex-grow">
        <h1 className="text-2xl">Collections</h1>
        <div className="collections-list bg-white shadow-lg m-6">
          <Link to="ourstore">Our Store <i className="fa-solid fa-arrow-right ml-4"></i></Link>
          <Link to="cameras">Camera <i className="fa-solid fa-arrow-right ml-4"></i></Link>
          <Link to="accessories">Accessories <i className="fa-solid fa-arrow-right ml-4"></i></Link>
          <Link to="airpods">Airpods <i className="fa-solid fa-arrow-right ml-4"></i></Link>
          <Link to="camera&videos">Camera & Videos <i className="fa-solid fa-arrow-right ml-4"></i></Link>
          <Link to="computers&laptops">Computers & Laptops <i className="fa-solid fa-arrow-right ml-4"></i></Link>
          <Link to="headphones">Headphones <i className="fa-solid fa-arrow-right ml-4"></i></Link>
          <Link to="home-appliance">Home Appliance <i className="fa-solid fa-arrow-right ml-4"></i></Link>
          <Link to="ipads">IPads <i className="fa-solid fa-arrow-right ml-4"></i></Link>
          <Link to="minispeakers">Mini Speakers <i className="fa-solid fa-arrow-right ml-4"></i></Link>
          <Link to="mobiles&tablets">Mobiles & Tablets <i className="fa-solid fa-arrow-right ml-4"></i></Link>
          <Link to="music&gaming">Music & Gaming <i className="fa-solid fa-arrow-right ml-4"></i></Link>
          <Link to="laptops">Laptops <i className="fa-solid fa-arrow-right ml-4"></i></Link>
          <Link to="portable-speakers">Portable Speakers <i className="fa-solid fa-arrow-right ml-4"></i></Link>
          <Link to="sale">Sale <i className="fa-solid fa-arrow-right ml-4"></i></Link>
          <Link to="smartphones">SmartPhones <i className="fa-solid fa-arrow-right ml-4"></i></Link>
          <Link to="smart-watches">Smart Watches <i className="fa-solid fa-arrow-right ml-4"></i></Link>
          <Link to="tablets">Tablets <i className="fa-solid fa-arrow-right ml-4"></i></Link>
          <Link to="test-collections">Test Collections <i className="fa-solid fa-arrow-right ml-4"></i></Link>
        </div>
      </div>
    </div>
  );
};

export default Collection;
