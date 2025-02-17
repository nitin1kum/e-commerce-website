import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedCollection2 = () => {
    return (
        <div className='w-full featured-collection-2 relative h-auto bg-white shadow-lg rounded-lg overflow-hidden'>
            <Link >
            <div className='absolute top-8 left-8 z-50'>
                <p className='text-sm text-gray-600 uppercase'>Big Screen</p>
                <h2 className='text-2xl my-3 capitalize'>Smart Watch Series 7</h2>
                <p className='text-sm text-gray-600 capitalize'>from $399 or $16.62/mo. for 24 mo.*</p>
            </div>
            <img className='h-full w-full object-cover transition-all duration-500' src="/images/subbanner-02.jpg" alt="laptop-image" />
            </Link>
        </div>
    )
}

export default FeaturedCollection2