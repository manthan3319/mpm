import React from 'react';
import { Link } from 'react-router-dom';
import { men_img } from '../images/Images';

const M2m = () => {
  return (
    <div className='bg-[#233e8d82] lg:py-[162px] relative section1'>
      <div className='lg:max-w-[1440px] m-auto'>
        <div className='flex'>
          <div className='lg:w-[50%] relative'>
            <h2 className='mam_text lg:text-[260px] font-poppins absolute'>M4M</h2>
            <h1 className='lg:text-[63px] font-poppins font-bold text-[#000000] shopping_text relative'>
              Incredible Prices on All Your Favorite Items
            </h1>
            <p className='text-[30px] text-black relative'>Get more for less on selected brands</p>

            <div className='mt-[50px] inline-block '>
            <Link className='bg-customBlue py-[10px] text-[25px] text-white px-[15px] rounded-tl-[20px] rounded-br-[20px] flex gap-[10px]'>
                View Product <span><i className="fa fa-angle-right" ></i></span>
              </Link>
            </div>
          </div>
          <div className='lg:w-[50%]'>
           <img src={men_img} alt='men' className='men_images'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default M2m;
