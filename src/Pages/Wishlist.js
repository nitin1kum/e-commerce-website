import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import WishlistCard from '../Cards/WishlistCard'
const Wishlist = () => {
  return (
    <div>
      <BreadCrumb name={'Wishlist'}/>
      <div className='grid wishlist-card-container grid-cols-6 gap-x-3 gap-y-24 p-6'>
        <WishlistCard/>
        <WishlistCard/>
        <WishlistCard/>
        <WishlistCard/>
        <WishlistCard/>
        <WishlistCard/>
        <WishlistCard/>
        <WishlistCard/>
      </div>
    </div>
  )
}

export default Wishlist