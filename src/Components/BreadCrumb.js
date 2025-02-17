import React from 'react'

const BreadCrumb = (props) => {
  return (
    <div className='flex justify-center p-4 bg-white'>
        <span className=' capitalize text-sm text-gray-600 m-auto h-min bg-white' >home / <span className=' text-black text-2xl font-semibold'>{props.name}</span></span>
    </div>
  )
}

export default BreadCrumb