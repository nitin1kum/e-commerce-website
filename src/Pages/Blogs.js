import React from 'react'
import Blog from '../Cards/Blog'
import BreadCrumb from '../Components/BreadCrumb'
import Sidebar from '../Components/Sidebar'
import AboutData from '../Data/AboutData'

const Blogs = () => {
  return (
    <>
    
    <BreadCrumb name={'news'} />
      <div className='p-6 flex gap-6'>
      <Sidebar/>
      <div className='blog-card-container grid grid-cols-2 gap-6'>
        {AboutData.map((items,index)=>{
          return(
            <Blog value={items} />
          )
        })}
      </div>
    </div>
    </>

  )
}

export default Blogs