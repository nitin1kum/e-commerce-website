import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import CompareCard from '../Cards/CompareCard'

const Compare = () => {
  return (
    <div>
      <BreadCrumb name={'Compare'}/>
      <div className='p-6 compare-card-container bg-gray-100 grid grid-cols-6 gap-3 gap-y-24'>
        <CompareCard/>
        <CompareCard/>
        <CompareCard/>
        <CompareCard/>
        <CompareCard/>
        <CompareCard/>
        <CompareCard/>
      </div>
    </div>
  )
}

export default Compare