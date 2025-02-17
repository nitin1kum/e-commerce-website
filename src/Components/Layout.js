import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
  const [scrollPosition, setScrollPosition] = useState(1);
function handleScroll() {
      const position = window.scrollY;
      setScrollPosition(position)
    }
  useEffect(() => {
    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
        <div className={scrollPosition>200?'bg-hover scroll-up flex justify-center cursor-pointer hover:bg-slate-600 hover:text-white transition-all duration-500 items-center w-10 h-10 rounded-full fixed bottom-8 right-4 ':"hidden"} onClick={()=>{
          window.scrollTo({
            top:0,
            behavior:"smooth"
          })
        }}>
          <i className='fa-chevron-up fa-solid '></i>
        </div>
    </>
  )
}

export default Layout