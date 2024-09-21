import React from 'react'
import Max1 from '../../Images/WhatsApp Image 2024-09-18 at 7.06.08 AM.jpeg'
import Max2 from '../../Images/WhatsApp Image 2024-09-18 at 7.05.28 AM.jpeg'
import Max3 from '../../Images/WhatsApp Image 2024-09-18 at 7.05.50 AM.jpeg'
import Max4 from '../../Images/WhatsApp Image 2024-09-18 at 7.05.06 AM.jpeg'




const Promote = () => {
    

  return (
    <div className='p-10'>
        <div className='flex justify-center max-sm:flex-col  gap-5 items-center '>
            <div className='flex flex-col  gap-7'>
                <h1 className=' text-[40px] text-[#242424] font-bold'>Success Stories</h1>
                <div className='flex gap-7 max-sm:flex-col'>
                    <img src={Max1} className='h-[35vh] rounded-[10px] '  alt="" />
                    <div className='pt-12'><img src={Max2} className='h-[35vh]  rounded-[10px] '  alt="" /></div>
                </div>
                <div className='flex gap-7  max-sm:flex-col '>
                 <img src={Max3}  className='h-[35vh] rounded-[10px] ' alt="" />
                 <div  className='pt-12'><img src={Max4}  className='h-[35vh] rounded-[10px] ' alt="" /></div>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className=' text-[30px] text-[#242424] w-[30vw] max-sm:w-[90vw] font-bold'>Promote your products more effectively with our advanced ML mechanics</h1>
                <p className='w-[35vw] max-sm:w-[90vw] '>Nec habitasse sociis urna urna dignissim et ac parturient sed mi ultricies
                porttitor ligula eu elementum arcu leo, cum tellus suspendisse dignissim habitant pellentesque.</p>
                <p className='w-[35vw] max-sm:w-[90vw]  '>Eu nunc diam sit sed lectus lectus vehicula ut adipiscing quis hendrerit quis arcu gravida</p>
                <p className='w-[35vw]  max-sm:w-[90vw] '>Non ut vel ornare sit turpis venenatis vitae in lacus, vel in molestie vestibulum cursus dapibus</p>
            </div>
        </div>
    </div>
  )
}

export default Promote