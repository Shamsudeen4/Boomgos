import React from 'react'
import Max1 from '../../Images/WhatsApp-Image-2023-10-21-at-8.42.56-PM.jpeg'



const Flag = () => {
  return (
    <div className='p-10 justify-center items-center flex '>
        <div className='flex justify-center items-center gap-3  max-sm:flex-col max-sm:overflow-hidden '>
            <div className='flex flex-col gap-3'>
                <h1 className='text-[35px] text-[#242424] w-[38vw] font-bold  max-sm:w-[70vw]   '>Use our custom service for online Logistics</h1>
                <p className='w-[42vw] max-sm:w-[90vw]  '>Boomgos Logistics is our own next generation cross-border logistics company,
                that covers all the steps for your online shipping.</p>
                <p className='font-bold text-[#242424] '>1. Competitive prices</p>
                <p className='font-bold text-[#242424] '>2. Standardized procedure from the pick-up to the last mile</p>
                <p className='font-bold text-[#242424] '>3. Detailed parcel tracking</p>
                <p className='font-bold text-[#242424] '>4. Compensation of all costs in case your parcel gets lost</p>
            </div>
            <div><img src={Max1} alt="" className='rounded-[10px]   ' /></div>
        </div>
    </div>
  )
}

export default Flag