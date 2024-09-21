import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';



const Saleforms = () => {

     const [PhoneNumber, setPhoneNumber] = useState ('');
     const [valid, setValid] = useState (true);

     const handleChange =(value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
     };

     const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\d{10}$/;
        return phoneNumberPattern.test(phoneNumberPattern);       
     }



  return (
    <div className="p-10">
    
    <div className=''><h1  className=' text-[40px] text-[#242424] font-bold'>Become a seller</h1></div>

       <div className=' flex flex-col justify-center items-center max-sm:overflow-hidden  gap-4'>
           
            <div className=' flex flex-col gap-2'>
                <label className='text-[20px] ' htmlFor=""> First Name<span className="text-[red] " >*</span> </label>
                <input
                 required 
                 type="text"
                 className='w-[35vw]  max-sm:w-[80vw]    p-3 bg-[#FAFAFA]  border-2  rounded-[10px] '  />
            </div>
            <div className=' flex flex-col gap-2'>
                <label className='text-[20px] '  htmlFor=""> Last Name<span className="text-[red] " >*</span> </label>
                <input 
                type="text"
                className='w-[35vw] p-3 bg-[#FAFAFA] max-sm:w-[80vw]     border-2  rounded-[10px] '  />
            </div>
            <div className=' flex flex-col gap-2'>
                <label className=' ' >
                    <div className='flex'><h1 className='text-[20px] '> phoneNumber</h1> <span className="text-[red] " >*</span></div>
                    <div className=' w-[35vw] p-3 bg-[#FAFAFA] max-sm:w-[80vw]     border-2  rounded-[10px] '>
                        <PhoneInput
                        country={'us'}
                        value={PhoneNumber}
                        onChange={handleChange}
                        inputProps={{
                        required: true,
                        }} 
                        />
                    </div>
                
                    </label>
                    {! valid && <p>please enter a valid  phone number </p> }
            </div>
            <div className=' flex flex-col gap-2'>
                <label className='text-[20px]  '  htmlFor="">Email<span className="text-[red] " >*</span> </label>
                <input
                required
                type="email"
                className='w-[35vw] max-sm:w-[80vw]   p-3 bg-[#FAFAFA]   border-2  rounded-[10px] ' />
            </div>
            <div className=' flex flex-col gap-2'>
                <label className='text-[20px] '  htmlFor="">Pasword<span className="text-[red] " >*</span> </label>
                <input
                required 
                type="text"
                className='w-[35vw] p-3  max-sm:w-[80vw]    bg-[#FAFAFA]  border-2  rounded-[10px] ' />
            </div>
            <div className=' flex flex-col  gap-2'>
                <label className='text-[20px] '  htmlFor=""> Confirm Pasword<span className="text-[red] " >*</span> </label>
                <input 
                required 
                type="text"
                className='w-[35vw] p-3 max-sm:w-[80vw]    bg-[#FAFAFA]  border-2  rounded-[10px] ' />
            </div>
            <div className=' flex flex-col gap-2'>
                <label className='text-[20px] '  htmlFor="">Company Name<span className="text-[red] " >*</span> </label>
                <input 
                required 
                type="text"
                className='w-[35vw] p-3 max-sm:w-[80vw]     bg-[#FAFAFA]  border-2  rounded-[10px] ' />
            </div>
            <div className=' flex flex-col gap-2'>
                <label className='text-[20px] '  htmlFor="">Main platform store URL<span className="text-[red] " >*</span> </label>
                <input 
                required 
                type="url"
                className='w-[35vw] p-3  max-sm:w-[80vw]    bg-[#FAFAFA]  border-2  rounded-[10px] ' />
            </div>
            <div className=' flex flex-col gap-2'>
                <label className='text-[20px]  '  htmlFor="">Warehouse Selection <span className="text-[red] " >*</span> </label>
                <select className='w-[35vw] max-sm:w-[80vw]    bg-[#FAFAFA]  p-3  border-2  rounded-[10px] '>
                    <option value="">select</option>
                    <option value="">china</option>
                    <option value="">France</option>
                    <option value="">spain</option>
                </select>
            </div>
            <div className=' flex flex-col gap-2'>
                <label className='text-[20px]'  htmlFor="">Warehouse Location <span className="text-[red] " >*</span> </label>
                <input required type="text" className='w-[35vw] p-3 max-sm:w-[80vw]     border-2  bg-[#FAFAFA] rounded-[10px] ' />
            </div>
            <div className='flex flex-col gap-10'>
                <div className='flex gap-2'>
                    <input type="checkbox" name="" id="" />
                    <p>Before submitting this form, please familiarise yourself with <span className='text-[blue] '>our Code of Conducts</span> </p>
                </div>
                <button className='p-2 w-[8vw] bg-[#0085BA] max-sm:w-[20vw]    text-[white] rounded-[5px]'>Register</button>
                <p className='text-[15px] '>Log In | Lost Password</p>
            </div>
        </div>
    </div>
  )
}

export default Saleforms