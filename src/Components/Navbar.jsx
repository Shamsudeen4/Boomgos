import React from 'react'
import logo from '../Images/Boomgos-Logo.png'
import logo2 from '../Images/images-removebg-preview.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { TfiControlShuffle } from "react-icons/tfi";
import { IoIosHeartEmpty } from "react-icons/io";
import { CgShoppingCart } from "react-icons/cg";




function Navbar(props) {
  return (
    <div>
        <div className=' flex flex-col justify-center items-center ' >
        <div className=' flex items-center gap-[40px] py-[20px]'>
            <div>
                <img src={logo} className=' cursor-pointer w-[201px] h-[44px]' alt="" />
            </div>
            <div className=' border-[2px] flex items-center rounded-[40px]  p-2 pr-[10px] pl-[20px]'>
                <input type="text" placeholder='  Search for products' className='w-[600px] h-[40px] outline-none' />
                <div className=' bg-[#FE7E2A] rounded-[50px] p-[9px] cursor-pointer'><FiSearch size={20} color='white' /></div>
            </div>
            <div>
                <select name="" id="" className='cursor-pointer outline-none'>
                    <option value="">EUR</option>
                    <option value="">USD</option>
                </select>
            </div>
            <div className='flex items-center gap-5'>
                <img className=' w-[45px] ' src={logo2} alt="" />
                <p className='font-lexend text-[14px]'>World Wide Shipping</p>
            </div>
        </div>
        <div className='flex bg-[#E6EFFD] w-[100vw]  text-[13px] font-openSans font-semibold items-center'>
           <div className='flex items-center justify-center w-[100vw] gap-[80px]'>
            <div className=' flex  gap-6 items-center  justify-center'>
                <div className=' bg-[#FE7E2A] text-[white] flex items-center gap-[30px] py-[17px] px-[15px]'>
                    <div className=' flex items-center gap-[15px]'>
                      <RxHamburgerMenu size={18} />
                      <p>Browse Categories</p>
                    </div>
                    <div>
                       <IoIosArrowDown color='white' />
                    </div>
                </div>
                <ul className='flex items-center gap-[20px]'>
                  <li className=' hover:bg-[#ECD3C9] hover:text-[#FE7E2A] transition duration-150 cursor-pointer px-[18px] py-[9px] rounded-[25px]'><a className={props.home} href="/">Home</a></li>
                  <li className=' hover:bg-[#ECD3C9] hover:text-[#FE7E2A] transition duration-150 cursor-pointer px-[18px] py-[9px] rounded-[25px]'>About Us</li>
                  <li className=' hover:bg-[#ECD3C9] hover:text-[#FE7E2A] transition duration-150 cursor-pointer px-[18px] py-[9px] rounded-[25px]'>Shop</li>
                  <li className=' hover:bg-[#ECD3C9] hover:text-[#FE7E2A] transition duration-150 cursor-pointer px-[18px] py-[9px] rounded-[25px]'>Contact Us</li>
                </ul>
            </div>
            <div className='flex items-center gap-[32px]'>
                <div>
                    <select name="" id="" className='p-[10px] px-[20px]'>
                        <option value="">English</option>
                        <option value="">French</option>
                        <option value="">Spanish</option>
                    </select>
                </div>
                <div className=' flex items-center gap-[12px]'>
                    <div className=' p-2 rounded-[20px] text-[black] bg-[white]'><LuUser2 size={23} /></div>
                    <p>Login / Register</p>
                </div>
                <div className=' flex items-center gap-[27px]'>
                <div className=' bg-white p-2 rounded-[20px]'>
                    <TfiControlShuffle size={23} />
                    <p className=' text-[#FE7E2A] bg-[white] px-[5px] py-[1px] rounded-[100px] bottom-[640px] left-[1285px] absolute '>0</p>
                </div>
                <div className=' bg-white p-2 rounded-[20px]'> 
                    <IoIosHeartEmpty size={23} />
                    <p className=' text-[#FE7E2A] bg-[white] px-[5px] py-[1px] rounded-[100px] bottom-[640px] left-[1350px] absolute '>0</p>

                </div>
                <div className=' bg-[#FE7E2A] p-2 rounded-[20px]'> 
                    <CgShoppingCart size={23} color='white' />
                    <p className=' text-[#FE7E2A] bg-[white] px-[5px] py-[1px] rounded-[100px] bottom-[640px] left-[1420px] absolute '>0</p>

                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Navbar