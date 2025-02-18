import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [hidden, setHidden] = useState(true);
  const [hidden3, setHidden3] = useState(true);
  const handleClick=()=>{
    setHidden(!hidden);
  }
  const handleClick2=()=>{
    setHidden3(!hidden3);
  }
  return (
    <div className=' bg-nav-color flex gap-8 px-4  items-center  uppercase text-white para'>
      <div className="nav-dropdown-container relative cursor-pointer">
        <div className='flex gap-5 items-center px-4  my-4 border-left ' onClick={handleClick}>
          <img className='h-6' src="./images/menu.svg" alt="menu" />
          <p className='mr-12'>shop categories</p>
          <i className="fa-solid fa-chevron-down fa-xs"></i>
        </div>
        
          <ul className={hidden?"absolute rounded-b-md header-top-strip w-full items transition-all origin-top duration-500 scale-y-0 z-50":"absolute z-50 rounded-b-md origin-top  transition-all duration-500 header-top-strip w-full items scale-y-1"}>
            <li className='border-bottom align-middle py-3 px-4 hover:text-hover'>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className='border-bottom align-middle py-3 px-4 hover:text-hover'>
              <NavLink to='/collections/camera&videos'>Camera & Videos</NavLink>
            </li>
            <li className='border-bottom align-middle py-3 px-4 hover:text-hover'>
              <NavLink to='/collections/computers&laptops'>Computers& Laptops</NavLink>
            </li>
            <li className='border-bottom align-middle py-3 px-4 hover:text-hover'>
              <NavLink to='/collections/home-appliance'>Home Appliances</NavLink>
            </li>
            <li className='border-bottom align-middle py-3 px-4 hover:text-hover'>
              <NavLink to='/collections/handbags'>Handbag</NavLink>
            </li>
            <li className='border-bottom align-middle py-3 px-4 hover:text-hover'>
              <NavLink to='/collections/mobiles&tablets'>Mobiles & Tablets</NavLink>
            </li>
            <li className='border-bottom align-middle py-3 px-4 hover:text-hover'>
              <NavLink to='/collections/smartphones'>Smart Phones</NavLink>
            </li>
            <li className='border-bottom align-middle py-3 px-4 hover:text-hover'>
              <NavLink to='/collections/portable-speakers'>Portable Speakers</NavLink>
            </li>
            <li className='border-bottom align-middle py-3 px-4 hover:text-hover'>
              <NavLink to='/collections/music&gaming'>Music & Gaming</NavLink>
            </li>
          </ul>
        
      </div>
      <div className='relative ' onMouseEnter={handleClick2} onMouseLeave={handleClick2}>
        <div className='my-4'>
        <NavLink to="/">Home</NavLink>
        <i className="fa-solid fa-chevron-down fa-xs ml-4"></i>
        </div>
        <div className={hidden3?'absolute bg-white  text-black p-6 shadow-box hidden z-50':'absolute z-50 capitalize bg-white text-black p-6 shadow-box'}>
          <NavLink to='/collections'><p className='text-lg'>All Collection</p></NavLink>
          <ul className=' w-40 items py-4 '>
            <li className=' text-gray-400 align-middle py-1 '>
              <NavLink to="/collections/cameras" >Cameras</NavLink>
            </li>
            <li className=' text-gray-400 align-middle py-1 '>
              <NavLink to='/collections/smart-watches'>Smart Watches</NavLink>
            </li>
            <li className=' text-gray-400 align-middle py-1 '>
              <NavLink to='/collections/portable-speakers'>Speakers</NavLink>
            </li>
            <li className=' text-gray-400 align-middle py-1 '>
              <NavLink to='/collections/laptops'>Laptops</NavLink>
            </li>
            
          </ul>
        </div>
      </div>
      <div>
        <NavLink to="/collections/ourstore" state={{name:"Our Store"}}>our store</NavLink>
      </div>
      <div>
        <NavLink to="/blogs">blog</NavLink>
      </div>
      <div>
        <NavLink to="/contact">contact</NavLink>
      </div>
    </div>
  )
}

export default Navbar