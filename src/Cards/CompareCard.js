import React from 'react'
import { Link } from 'react-router-dom'

const CompareCard = () => {
    return (
        <div className='compare-card relative'>
            <div className='absolute top-2 bg-gray-200 right-2 px-2  border border-black rounded-sm'><i className='fa-xmark fa-solid '></i></div>
            <Link>
                <div className='compare-hero'>

                    <img className='w-full object-contain' src="/images/speaker.jpg" alt="" />
                    <h3 className='hover:underline font-medium my-1'>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G...</h3>
                </div>
            </Link>
            <ul>
                <li>
                    <div className='flex gap-1 items-center'>
                        <h4 className='current-price'>$750</h4>
                        <h4 className='old-price line-through'>$850</h4>
                    </div>
                    <h4 className='new-price text-catBannerText'>$750</h4>
                </li>
                <li>
                    <h4>Brand:</h4>
                    <p>Havells</p>
                </li>
                <li>
                    <h4>Type:</h4>
                    <p>Tablet Computers</p>
                </li>
                <li>
                    <h4>SKU</h4>
                    <p>SKU033</p>
                </li>
                <li>
                    <h4>Availablity:</h4>
                    <p>In stock</p>
                </li>
                <li>
                    <h4>Color</h4>
                    <div className='flex gap-1'>
                        <div className='p-2 bg-slate-400 rounded-full'></div>
                        <div className='p-2 bg-slate-400 rounded-full'></div>
                        <div className='p-2 bg-slate-400 rounded-full'></div>
                    </div>
                </li>
                <li>
                    <h4>Size</h4>
                    <div className='flex gap-1'>
                        <p>S</p>
                        <p>S</p>
                        <p>S</p>
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default CompareCard