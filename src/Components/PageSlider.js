import React from 'react'
import { useState } from 'react'

const PageSlider = () => {
    const [page, setPage] = useState(0)
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    const pageChange = (e) => {
        setPage(e)
      }
  return (
    <div>
        <div className="main-footer flex justify-between rounded-lg shadow-lg mt-6 p-2">
            <p className='py-2 px-4 bg-gray-200 text-sm rounded-md text-gray-600'>Showing 15 of 21</p>
            <div className='flex gap-3'>
              <div className={page === 0 ? 'hidden' : 'h-10 cursor-pointer w-10 bg-white rounded-full text-center flex items-center justify-center text-black border'} onClick={(e)=>{
                 pageChange(page -1 )
                }}><i className='fa-chevron-left fa-xs fa-solid'></i></div>
              {pages.map((item, index) => {
                return (
                  ((page===pages.length-1)?(index>=page-1 && index<=page):(index>=page && index<=page+1))
                  ?<div className={page === index ? 'h-10 w-10 bg-nav-color cursor-pointer rounded-full text-center flex items-center justify-center text-white border' : 'h-10 w-10 cursor-pointer bg-white rounded-full text-center flex items-center justify-center text-black border'} onClick={(event) => {
                    pageChange(index)
                    
                  }}>{index+1}</div>:""
                )
              })}
              <div className={page > pages.length-2 ? 'hidden' : 'h-10 cursor-pointer w-10 bg-white rounded-full text-center flex items-center justify-center text-black border'} onClick={(e)=>{
                 pageChange(page + 1)
              }} ><i className='fa-chevron-right fa-xs fa-solid'></i></div>
            </div>
          </div>
    </div>
  )
}

export default PageSlider