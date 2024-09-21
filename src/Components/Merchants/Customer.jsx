import React from 'react'
import Max1 from '../../Images/countryFlagWithoutRuLarge.png'


const Customer = () => {
  return (
    <div className='p-10'>
        <div className='flex justify-center items-center gap-3 max-sm:flex-col'>
            <div><img src={Max1} alt="" /></div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-[38px] text-[#242424] w-[37vw] font-bold max-sm:w-[90vw]  '>Reach new mobile customers and expand your business</h1>
                <p className='w-[30vw] max-sm:w-[90vw] '>Eu, lectus in porttitor integer aliquam integer nisl cras eget lectus etiam viverra vestibulum 
                cursus ullamcorper ullamcorper nisl faucibus nullam diam tincidunt ut velit.</p>
                <p className='w-[30vw] max-sm:w-[90vw] '>Venenatis sodales lectus feugiat et nec, quis consectetur cras diam quis euismod 
                sit lorem gravida lectus ullamcorper eget dictum 
                imperdiet mauris, velit, fermentum aenean pellentesque iaculis quis etiam elementum potenti quis enim.</p>
            </div>
        </div>
    </div>
  )
}

export default Customer