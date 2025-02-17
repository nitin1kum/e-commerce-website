import React from "react";
import "./App.css";
import "./Components/Lap1024.css";
import "./Components/Tab950.css";
import "./Components/Tab750.css";
import "./Components/Mobile500.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import OurStore from "./Collections/OurStore";
import Blogs from "./Pages/Blogs";
import PagesLayout from "./Components/PagesLayout";
import Compare from "./Pages/Compare";
import Wishlist from "./Pages/Wishlist";
import LogIn from "./Pages/LogIn";
import Cart from "./Pages/Cart";
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";
import Privacypolicies from "./Pages/Privacypolicies";
import RefundPolicies from "./Pages/RefundPolicies";
import ShippingPolicies from "./Pages/ShippingPolicies";
import Termscond from "./Pages/Termscond";
import Faq from "./Pages/Faq";
import AboutUs from "./Pages/AboutUs";
import Collection from "./Pages/Collection";
import Cameras from "./Collections/Cameras";
import News from "./Components/News";
import Accessories from "./Collections/Accessories";
import Airpods from "./Collections/Airpods";
import CamerasVideo from "./Collections/CamerasVideo";
import ComLap from "./Collections/ComLap";
import Headphones from "./Collections/Headphones";
import HomeApp from "./Collections/HomeApp";
import IPads from "./Collections/IPads";
import MiniSpeaker from "./Collections/MiniSpeaker";
import MobilesTabs from "./Collections/MobilesTabs";
import MusicGaming from "./Collections/MusicGaming";
import Laptops from "./Collections/Laptops";
import PortableSpeaker from "./Collections/PortableSpeaker";
import Sale from "./Collections/Sale";
import SmartPhones from "./Collections/SmartPhones";
import SmartWatches from "./Collections/SmartWatches";
import Tablets from "./Collections/Tablets";
import TestCollec from "./Collections/TestCollec";
import SizeChart from "./Pages/SizeChart";
import Search from "./Pages/Search";
import Product from "./Pages/Product";
import ImgMagnifier from "./Components/ImgMagnifier";
import ViewProject from "./Components/ViewProject";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="view" element={<ViewProject />} />
          <Route path="blogs/news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Product />} />
          <Route path="img-magnify" element={<ImgMagnifier />} />

          <Route path="collections" element={<Collection />} />
          <Route path="collections/ourstore" element={<OurStore />} />
          <Route path="collections/cameras" element={<Cameras />} />
          <Route path="collections/accessories" element={<Accessories />} />
          <Route path="collections/airpods" element={<Airpods />} />
          <Route path="collections/camera&videos" element={<CamerasVideo />} />
          <Route path="collections/computers&laptops" element={<ComLap />} />
          <Route path="collections/headphones" element={<Headphones />} />
          <Route path="collections/home-appliance" element={<HomeApp />} />
          <Route path="collections/ipads" element={<IPads />} />
          <Route path="collections/minispeakers" element={<MiniSpeaker />} />
          <Route path="collections/mobiles&tablets" element={<MobilesTabs />} />
          <Route path="collections/music&gaming" element={<MusicGaming />} />
          <Route path="collections/laptops" element={<Laptops />} />
          <Route
            path="collections/portable-speakers"
            element={<PortableSpeaker />}
          />
          <Route path="collections/sale" element={<Sale />} />
          <Route path="collections/smartphones" element={<SmartPhones />} />
          <Route path="collections/smart-watches" element={<SmartWatches />} />
          <Route path="collections/tablets" element={<Tablets />} />
          <Route path="collections/test-collections" element={<TestCollec />} />

          <Route path="account/log-in" element={<LogIn />} />
          <Route path="account/log-in/recover" element={<ResetPassword />} />
          <Route path="account/register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
          <Route path="pages" element={<PagesLayout />}>
            <Route path="compare" element={<Compare />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="faq" element={<Faq />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="privacy-policy" element={<Privacypolicies />} />
            <Route path="refund-policy" element={<RefundPolicies />} />
            <Route path="shipping-policy" element={<ShippingPolicies />} />
            <Route path="terms-condn" element={<Termscond />} />
            <Route path="size-chart" element={<SizeChart />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
