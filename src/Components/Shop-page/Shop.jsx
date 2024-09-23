import {React, useRef} from 'react'
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import 'swiper/css';
import 'swiper/css/navigation';
import glass from '../Shop-page/shopaccessories/glass.jpg'
import car from '../Shop-page/shopaccessories/car.jpg'
import beauty from '../Shop-page/shopaccessories/beauty.png'
import computer from '../Shop-page/shopaccessories/computer.jpg'
import consumer from '../Shop-page/shopaccessories/consumer.jpg'
import furniture from '../Shop-page/shopaccessories/furniture.jpg'
import wig from '../Shop-page/shopaccessories/wig.png'
import health from '../Shop-page/shopaccessories/health.png'
import garden from '../Shop-page/shopaccessories/garden.jpg'
import appliance from '../Shop-page/shopaccessories/appliance.jpg'
import led from '../Shop-page/shopaccessories/led.jpg'
import jewelry from '../Shop-page/shopaccessories/jewelry.jpg'
import lingerie from '../Shop-page/shopaccessories/lingerie.jpg'
import luggage from '../Shop-page/shopaccessories/luggage.jpg'
import men from '../Shop-page/shopaccessories/men.png'
import kid from '../Shop-page/shopaccessories/kids.jpg'
import pet from '../Shop-page/shopaccessories/pet.jpg'
import phone from '../Shop-page/shopaccessories/phone.jpg'
import security from '../Shop-page/shopaccessories/security.jpg'
import wellness from '../Shop-page/shopaccessories/wellness.png'
import shoe from '../Shop-page/shopaccessories/shoe.png'
import custome from '../Shop-page/shopaccessories/custome.jpg'
import sport from '../Shop-page/shopaccessories/sport.jpg'
import tools from '../Shop-page/shopaccessories/tools.jpg'
import toy from '../Shop-page/shopaccessories/toy.jpg'
import tvset from '../Shop-page/shopaccessories/tvset.jpg'
import women from '../Shop-page/shopaccessories/women.jpg'

const itemsList = [
  {
    id: 1,
    img: glass,
    title: "Accessories",
    description: "174 products",
  },
  {
    id: 2,
    img: car,
    title: "Automotive & Motocycle",
    description: "186 products",
  },
  {
    id: 3,
    img: beauty,
    title: "Beauty",
    description: "306 products",
  },
  {
    id: 4,
    img: computer,
    title: "Computer, Office & Education",
    description: "384 products"
  },
  {
    id: 5,
    img: consumer,
    title: "Consumer Electronics",
    description: "204 products"
  },
  {
    id: 6,
    img: furniture,
    title: "Furniture",
    description: "71 products"
  },
  {
    id: 7,
    img: wig,
    title: "Hair Extensions & Wigs",
    description: "93 products"
  },
]
const itemsList1 = [
  {
    id: 1,
    img: health,
    title: "Health",
    description: "158 products",
  },
  {
    id: 2,
    img: garden,
    title: "Home & Garden",
    description: "120 products",
  },
  {
    id: 3,
    img: appliance,
    title: "Home Appliance",
    description: "124 products",
  },
  {
    id: 4,
    img: led,
    title: "Home Improvement & Lighting",
    description: "294 products"
  },
  {
    id: 5,
    img: jewelry,
    title: "Jewelry & Watches",
    description: "232 products"
  },
  {
    id: 6,
    img: lingerie,
    title: "Lingerie & Loungewear",
    description: "197 products"
  },
  {
    id: 6,
    img: luggage,
    title: "Luggages & Bags",
    description: "272 products"
  },
]
const itemsList2 = [
  {
    id: 1,
    img: men,
    title: "Men's Clothing",
    description: "203 products",
  },
  {
    id: 2,
    img: kid,
    title: "Mother & Kids ",
    description: "256 products",
  },
  {
    id: 3,
    img: pet,
    title: "Pet Supplies",
    description: "80 products",
  },
  {
    id: 4,
    img: phone,
    title: "Phones & Telecommunications",
    description: "109 products"
  },
  {
    id: 5,
    img: security,
    title: "Security And Protection",
    description: "128 products"
  },
  {
    id: 6,
    img: wellness,
    title: "Sexual Wellness",
    description: "108 products"
  },
  {
    id: 7,
    img: shoe,
    title: "Shoes",
    description: "192 products"
  },
]
const itemsList3 = [
  {
    id: 1,
    img: shoe,
    title: "Shoes",
    description: "192 products"
  },
  {
    id: 2,
    img: custome,
    title: "Special Occasion Costume",
    description: "65 products",
  },
  {
    id: 3,
    img: sport,
    title: "Sports & Entertainment",
    description: "184 products",
  },
  {
    id: 4,
    img: tools,
    title: "Tools & Industrial",
    description: "99 products",
  },
  {
    id: 5,
    img: toy,
    title: "Toys & Games",
    description: "99 products"
  },
  {
    id: 6,
    img: tvset,
    title: "TV Set-Top Boxes & Equipment",
    description: "81 products"
  },
  {
    id: 7,
    img: women,
    title: "Women's Clothing",
    description: "454 products"
  },
]

const Shop = () => {

  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  // Move to the next slide
  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div>
      <div className='flex items-center justify-between px-[10px] md:px-[40px] py-[20px]'>
        <div className='flex gap-[5px] md:gap-[13px]'>
          <p className='text-[#747474]'>Home</p>
          <p className='text-[#747474]'>/</p>
          <p className='font-semibold'>shop</p>
        </div>
        <div>
          <p className='text-[#747474] text-[15px] md:text-base'>Showing 1–12 of 4858 results</p>
        </div>
      </div>
      <div className='w-full'>
        <Swiper className='relative group z-10'
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          speed={800}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{
              nextEl:".button-next-slide",
              prevEl:".button-prev-slide",
          }}
            modules={[Navigation]}>
              <SwiperSlide>
                <div className='flex items-center md:justify-around justify-between overflow-hidden md:grid-cols-6 grid-cols-2 gap-20 md:gap-[25px] place-items-center px-[50px] md:px-[30px] md:py-[50px] bg-[#ffffff] mx-[10px] md:mx-[30px] rounded-md shadow-[inset_-12px_-8px_40px_#46464620]'>
                {itemsList.map((data)=>(
                    <div className="flex flex-col items-center gap-[30px] text-center text-balance cursor-pointer">
                       <img src={data.img} alt="" className='transition-all duration-500 hover:scale-[1.3] w-[100px] rounded-[10px]'/>
                      <div className='flex flex-col gap-[8px]'>
                        <p className='font-bold'>{data.title}</p>
                        <p>{data.description}</p>
                      </div>
                    </div>
                ))}
                </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className='flex items-center md:justify-around justify-between overflow-hidden md:grid-cols-6 grid-cols-2 gap-20 md:gap-[25px] place-items-center md:px-[30px] bg-[#ffffff] mx-[10px] md:mx-[30px] rounded-md shadow-[inset_-12px_-8px_40px_#46464620]'>
                {itemsList1.map((data)=>(
                    <div className="flex flex-col items-center gap-[30px] text-center text-balance cursor-pointer">
                      <img src={data.img} alt="" className='transition-all duration-500 hover:scale-[1.3] w-[100px] rounded-[10px]'/>
                      <div className='flex flex-col gap-[8px]'>
                        <p className='font-bold'>{data.title}</p>
                        <p>{data.description}</p>
                      </div>
                    </div>
                ))}
                </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className='flex items-center md:justify-around justify-between overflow-hidden md:grid-cols-6 grid-cols-2 gap-[70px] md:gap-[25px] place-items-center px-[20px]  md:px-[30px] md:py-[30px] bg-[#ffffff] mx-[10px] md:mx-[30px] rounded-md shadow-[inset_-12px_-8px_40px_#46464620]'>
                {itemsList2.map((data)=>(
                    <div className="flex flex-col items-center gap-[30px] text-center text-balance cursor-pointer">
                      <img src={data.img} alt=""  className='transition-all duration-500 hover:scale-[1.3] w-[100px] rounded-[10px]'/>
                      <div className=''>
                        <div className='flex flex-col gap-[8px]'>
                          <p className='font-bold'>{data.title}</p>
                          <p>{data.description}</p>
                        </div>
                      </div>
                    </div>
                ))}
                </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className='flex items-center md:justify-around justify-between overflow-hidden md:grid-cols-6 grid-cols-2 gap-[50px] md:gap-[25px] place-items-center px-[20px] md:px-[30px] bg-[#ffffff] mx-[10px] md:mx-[30px] rounded-md shadow-[inset_-12px_-8px_40px_#46464620]'>
                {itemsList3.map((data)=>(
                    <div className="flex flex-col items-center gap-[30px] text-center text-balance cursor-pointer">
                      <img src={data.img} alt="" className='transition-all duration-500 hover:scale-[1.3] w-[100px] rounded-[10px]'/>
                      <div className='flex flex-col gap-[8px]'>
                        <p className='font-bold'>{data.title}</p>
                        <p>{data.description}</p>
                      </div>
                    </div>
                ))}
                </div>
              </SwiperSlide>
              
              <div>
                <div className='top-[30%] md:top-[40%] absolute z-50 button-next-slide text-black w-[40px] h-[40px] grid place-content-center left-0 md:group-hover:left-0 md:-left-[5rem] duration-500' onClick={handlePrevClick}>
                  <SlArrowLeft className='text-[30px]'/>
                </div>
                <div className='top-[30%] md:top-[40%] absolute z-50 button-prev-slide text-black w-[40px] h-[40px] grid place-content-center right-0 md:group-hover:right-0 md:-right-[5rem] duration-500' onClick={handleNextClick}>
                  <SlArrowRight className='text-[30px]'/>
                </div>
              </div>
          </Swiper>
      </div>
    </div>
  )
}

export default Shop