import React from 'react'
import Max1 from '../../Images/covid-19-hero-figure-img (2).png'

const Market = () => {
  return (
    <div className=' p-10 overflow-hidden'>
        <div className=' flex justify-center items-center max-sm:flex-col overflow-hidden '>
            <div className='flex flex-col gap-10 overflow-hidden'>
                <h1 className=' text-[40px] text-[#242424] max-sm:text-[30px] max-sm:w-[80vw] w-[40vw] font-bold  '>
                Cross-Border Marketplace with Millions of Customers around the world
                </h1>
                <p className='w-[35vw]  max-sm:w-[75vw]'>Mauris pellentesque gravida amet dui tempor, diam nam sed  eget semper ultrices tristique nibh id 
                nec quam vestibulum consectetur ut lacus neque, scelerisque cras.</p>
                <div className='flex gap-3 max-sm:flex-col  ' >
                    <button  className='w-[25%] max-sm:w-[90vw] max-sm:rounded-[20px]  p-2 text-[white] hover:shadow-lg shadow-black hover:bg-[white] rounded-[10px] bg-[#5BC0DE] '>Sign up</button>
                    <button  className='w-[25%]  max-sm:w-[90vw] max-sm:rounded-[20px]  p-2 text-[white] hover:shadow-lg shadow-black  hover:bg-[white] rounded-[10px] bg-[#5BC0DE] '>Login</button>
                </div>
            </div>
            <div className='bg-[#BCE138] overflow-hidden rounded-t-[50pc]'><img src={Max1} alt="" className='h-[40pc] ' /></div>
        </div>
    </div>
  )
}

export default Market