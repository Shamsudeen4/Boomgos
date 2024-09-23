import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { LuArrowUpDown } from 'react-icons/lu';
import { MdClose } from "react-icons/md";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Mobilecolumn = () => {
  const [showbar, setShowbar] = useState(false);
  const [range, setRange] = useState([0, 18940]);

  function handleMenubar() {
    setShowbar(!showbar);
  }

  const handleSliderChange = (value) => {
    setRange(value);
  };

  return (
    <div className='md:hidden'>
      {/* Header */}
      <div className='flex items-center justify-between px-[10px] py-[20px]'>
        <div className='flex flex-col gap-[5px]'>
          <p className='text-[#747474] font-bold cursor-pointer'>Shop</p>
          <div className='flex items-center gap-[5px] cursor-pointer' onClick={handleMenubar}>
            <p className='text-[#747474]'>
              <AiOutlineMenu />
            </p>
            <p className='text-base'>Show column</p>
          </div>
        </div>
        <div>
          <p className='text-[#747474] text-base'>
            <LuArrowUpDown />
          </p>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg transform transition-transform duration-300 ${
    showbar ? 'translate-x-0' : '-translate-x-full'
  } z-50`}
      >
        <div className='flex justify-end px-[10px] py-[20px] '>
          <div className='flex items-center gap-[1px] cursor-pointer' onClick={handleMenubar}>
          <MdClose className='text-[20px] text-[#747474]'/>   <p className='text-[#747474] font-bold'>Close</p>
          </div>
        </div>

        <div>
            <div className='p-[20px] flex flex-col gap-[25px] '>
              <h2>Filter By Price</h2>
              <Slider
                range
                min={0}
                max={18940}
                defaultValue={[0, 18940]}
                value={range}
                onChange={handleSliderChange}
                trackStyle={[{ backgroundColor: '#FF7700', height: 2 }]}
                handleStyle={[
                  {
                    width: 3,
                    height: 14,
                    borderRadius: 0,
                    backgroundColor: '#FFFFFF',
                    border: '2px solid #FF7700',
                  },
                  {
                    width: 3,
                    height: 14,
                    borderRadius: 0,
                    backgroundColor: '#FFFFFF',
                    border: '2px solid #FF7700',
                  },
                ]}
              />
              <div className='flex flex-wrap gap-[30px] items-center'>
                <span>Price: € {range[0].toLocaleString()} — € {range[1].toLocaleString()}</span>
                <button style={{ backgroundColor: '#FF7700', color: '#FFFFFF', padding: '5px', border: 'none', borderRadius: '5px' }}>
                  Filter
                </button>
              </div>
            </div>
        </div>
        
        {/* <ul className='flex flex-col gap-[10px] px-[10px] py-[20px]'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Service</li>
          <li className='cursor-pointer'>Contact</li>
        </ul> */}
      </div>

      {/* Backdrop when sidebar is active */}
      {showbar && (
        <div
          className='fixed inset-0 bg-black opacity-50'
          onClick={handleMenubar}
        ></div>
      )}
    </div>
  );
};

export default Mobilecolumn;
