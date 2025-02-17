import React from 'react'
import { Link } from 'react-router-dom'
const Blog = (props) => {
  return (
     <>
          <div className='flex flex-col h-min rounded-lg overflow-hidden  shadow-xl blog-wrapper'>
            <div className='overflow-hidden'>
            <img className='h-full w-full object-cover transition-all duration-300' src={props.value.img} alt="" />
            </div>
            <div className='p-4 h-min'>
              <p className=' text-gray-500'>{props.value.date}</p>
              <h4 className=' text-lg text-bold leading-9'>{props.h4}</h4>
              <p className=' leading-5 text-sm text-gray-500'>{props.value.p}</p>
              <Link to={props.value.url}><button className=' bg-nav-color rounded-full py-2 px-4 text-white mt-6 hover:bg-hover hover:text-black transition-all'>Read More</button></Link>
            </div>
          </div>
    </>
  )
}

export default Blog