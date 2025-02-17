import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'

const Contact = () => {
  return (
    <div>
      <BreadCrumb name={"contact"} />
      <div className="Contact-main p-6">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2133.5260321816954!2d77.41111597690414!3d23.20930275942357!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1698006546133!5m2!1sen!2sin"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className='w-full'>
          </iframe>
        </div>
        <div className="contact grid grid-cols-2 mt-10 mb-10 gap-10 shadow-lg bg-white rounded-lg p-6 py-8">
          <div>
            <h1 className='text-2xl font-medium'>Contact</h1>
            <form action="" className='flex flex-col justify-stretch gap-6 my-6'>
              <div class="relative inline-block">
                <input type="text" id="floating_filled" required class="block  px-2 pb-1 pt-4 w-full text-sm text-gray-600 bg-gray-100 outline-none   appearance-none dark:text-gray-700    peer" placeholder=" " />
                <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-90 top-2.5 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-1">Name</label>
              </div>
              <div class="relative inline-block">
                <input type="email" id="floating_filled" required class="block  px-2 pb-1 pt-4 w-full text-sm text-gray-600 bg-gray-100 outline-none   appearance-none dark:text-gray-700    peer" placeholder=" " />
                <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-90 top-2.5 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-1">Email *</label>
              </div>
              <div class="relative inline-block">
                <input type="text" id="floating_filled" class="block  px-2 pb-1 pt-4 w-full text-sm text-gray-600 bg-gray-100 outline-none   appearance-none dark:text-gray-700    peer" placeholder=" " />
                <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-90 top-2.5 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-1">Phone number</label>
              </div>
            <textarea className='bg-gray-100 p-2.5 text-sm' name="comments" id="comments" cols="30" rows="5" placeholder='Comment'></textarea>
              <button className=' bg-nav-color text-white hover:bg-hover hover:text-black flex-grow-0 w-min py-2.5 px-8 rounded-full' type="submit">Send</button>
            </form>
          </div>
          <div>
            <h1 className='text-2xl font-medium mb-6'>Get In Touch With Us</h1>
            <p className='text-gray-600 leading-10'><i class="fa-solid fa-house-chimney mr-6" style={{ color: "#777777" }}></i>33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105</p>
            <p className='text-gray-600 leading-10'><i class="fa-solid fa-phone mr-6" style={{ color: "#777777" }}></i>(+91)7-723-4608</p>
            <p className='text-gray-600 leading-10'><i class="fa-solid fa-envelope mr-6" style={{ color: "#777777" }}></i>demo@company.com</p>
            <p className='text-gray-600 leading-10'><i class="fa-solid fa-info mr-6 ml-1.5" style={{ color: "#777777" }}></i>Monday – Friday 10 AM – 8 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact  