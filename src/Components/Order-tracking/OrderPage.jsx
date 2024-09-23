import React from 'react'
import { FaRegMessage } from "react-icons/fa6";

function Order() {
  return (
    <div className='w-full flex flex-col md:flex-row mt-[40px] gap-[40px] overflow-hidden'>
      <div className='flex flex-col gap-[40px]'>
        <p className='text-[#747474] text-[17px] text-center md:w-[70vw] w-[89vw] self-center'>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
        <form className='flex flex-col md:flex-row gap-[20px] md:items-center pl-[15px]'>
          <label className='flex flex-col gap-[10px] text-[18px]'>Order ID
            <input type="text" name="" id="" placeholder='Found in your order confirmation email.' className='border-[1px] p-[13px] md:p-[8px] w-[90vw] md:w-[27vw] rounded-[10px] outline-none placeholder:text-[15px]'/>
          </label>
          <div className='flex gap-[15px] md:gap-[40px] items-center'>
          <label className='flex flex-col gap-[10px] text-[18px]'>Billing email
            <input type="text" name="" id="" placeholder='Email you use during checkout.' className='border-[1px] p-[13px] md:p-[8px] w-[60vw] md:w-[27vw] rounded-[10px] outline-none placeholder:text-[15px]'/>
          </label>
          <button className='bg-[#FE7E2A] p-[12px] md:p-[7px] w-[25vw] md:w-[11vw] self-end rounded-[10px] text-white text-[18px]'>Track</button>
          </div>
        </form>
      </div>

      <div className='md:flex flex-col w-[35%] gap-[20px] hidden'>
        <div className='flex flex-col gap-[10px]'>
          <h1 className='font-semibold text-[18px]'>Categories</h1>
          <a href="" className='text-[#747474] hover:text-black'>Blog</a>
          <a href="" className='text-[#747474] hover:text-black'>Cameras</a>
          <a href="" className='text-[#747474] hover:text-black'>Desktop</a>
          <a href="" className='text-[#747474] hover:text-black'>Gaming</a>
          <a href="" className='text-[#747474] hover:text-black'>Hi-Fi</a>
          <a href="" className='text-[#747474] hover:text-black'>Keyboards</a>
          <a href="" className='text-[#747474] hover:text-black'>Laptops</a>
          <a href="" className='text-[#747474] hover:text-black'>Sound</a>
        </div>
        <div className='pr-[60px]'>
          <hr />
        </div>

        <div className='flex flex-col gap-[20px]'>
          <h1 className='font-semibold text-[18px]'>Recent Posts</h1>
          <div className='flex flex-col gap-[15px]'>
            <p className='font-semibold text-[15px] hover:text-[#747474] w-[20vw] cursor-pointer'>Connecting Diverse Sellers and Buyers for a Seamless Shopping Experience</p>
            <div className='flex gap-[20px]'>
              <p>7 October 2023</p>
              <p>2 Comments</p>
            </div>
            <div className='pr-[60px]'>
              <hr />
            </div>
          </div>
          <div className='flex flex-col gap-[15px]'>
            <p className='font-semibold text-[15px] hover:text-[#747474] w-[20vw] cursor-pointer'>Connecting Diverse Sellers and Buyers for a Seamless Shopping Experience</p>
            <div className='flex gap-[20px]'>
              <p>7 October 2023</p>
              <p>2 Comments</p>
            </div>
            <div className='pr-[60px]'>
              <hr />
            </div>
          </div>
          <div className='flex flex-col gap-[15px]'>
            <p className='font-semibold text-[15px] hover:text-[#747474] w-[20vw] cursor-pointer'>Discover the Ultimate Online Marketplace for a Seamless Shopping Experience</p>
            <div className='flex gap-[20px]'>
              <p>7 October 2023</p>
              <p>No Comments</p>
            </div>
            <div className='pr-[60px]'>
              <hr />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-[20px]'>
          <h1 className='font-semibold text-[18px]'>Recent Comments</h1>
          <div className='flex flex-col gap-[15px]'>
            <div ><span className='flex items-center gap-[10px] text-[#747474]'><FaRegMessage />Lisabeth Brennen on</span> <p className='font-semibold text-[15px] hover:text-[#747474] w-[22vw] cursor-pointer'>New In Automatic Robot Window Cleaner Vacuum Smart Home Appliance Clean Glass Windows Washer Window Washing Electric Floor Mops</p></div>
            <div ><span className='flex items-center gap-[10px] text-[#747474]'><FaRegMessage />Lisabeth Brennen on</span> <p className='font-semibold text-[15px] hover:text-[#747474] w-[22vw] cursor-pointer'>New In Automatic Robot Window Cleaner Vacuum Smart Home Appliance Clean Glass Windows Washer Window Washing Electric Floor Mops</p></div>
            <div ><span className='flex items-center gap-[10px] text-[#747474]'><FaRegMessage />Lisabeth Brennen on</span> <p className='font-semibold text-[15px] hover:text-[#747474] w-[22vw] cursor-pointer'>New In Automatic Robot Window Cleaner Vacuum Smart Home Appliance Clean Glass Windows Washer Window Washing Electric Floor Mops</p></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Order