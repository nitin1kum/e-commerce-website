import React from 'react'
import Policies from "../Components/Policies";
import BreadCrumb from "../Components/BreadCrumb"

const Faq = () => {
  return (
    <div>
      <BreadCrumb name={"FAQ"} />
      <div className="p-6 py-24">
        <div className="shadow-lg rounded-lg bg-white p-6">
        <Policies />
        <Policies />
        <Policies />
        <Policies />
        <Policies />
        </div>
      </div>
    </div>
  )
}

export default Faq