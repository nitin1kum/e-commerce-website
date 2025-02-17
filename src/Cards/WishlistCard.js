import React from 'react'
import { Link } from 'react-router-dom'

const WishlistCard = () => {
    return (
        <div className='wishlist-card relative'>
            <div className='absolute top-2 bg-gray-200 right-2 px-2  border border-black rounded-sm'><i className='fa-xmark fa-solid '></i></div>
            <Link>
                <div className='wishlist-hero'>

                    <img className='w-full object-contain' src="/images/speaker.jpg" alt="" />
                    <h3 className='hover:underline font-medium my-1'>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G...</h3>
                </div>
            </Link>
            <ul>
                <li className='flex justify-between'>
                    <div className='flex gap-1 items-center'>
                        <h4 className='current-price'>$750</h4>
                        <h4 className='old-price line-through'>$850</h4>
                    </div>
                    <h4 className='new-price text-catBannerText'>$750</h4>
                </li>
            </ul>
        </div>
    )
}

export default WishlistCard