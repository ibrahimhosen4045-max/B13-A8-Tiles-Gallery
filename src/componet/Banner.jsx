import React from 'react';
import Image from 'next/image';
import bannerImage from '@/image/banner1.jpg';
import bannerImage1 from '@/image/banner2.jpg';
import { FaCheckCircle } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';


const Banner = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-[80vh] overflow-hidden">
      {/* Optimized Background Image */}
      <Image
        src={bannerImage1}
        alt="Discover Your Perfect Aesthetic - Tiles Gallery"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover"
        quality={90}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/50 to-black/80 ">
        <div className='w-full h-full flex flex-col items-center justify-center text-center gap-5 text-white'>
          <button className='flex text-white  items-center gap-2 px-3 py-2 bg-amber-400/5 backdrop-blur-sm rounded-full'><div className=' size-2 bg-amber-400 rounded-full'></div> Built on Quality and Trust</button>
          <h1 className='text-[52px] font-bold'>Discover Your Perfect  Aesthetic</h1>
          <p className='text-[22px]'>We manufacture high-quality natural marble using advanced  processing technology <br />  to deliver timeless beauty, strength, and precision for residential,</p>
          <div className='flex items-center gap-4'>
            <h1 className='flex items-center gap-1'><span className='bg-white rounded-full'><FaCheckCircle className='text-amber-400'/></span>Premium quality natural</h1>
            <h1 className='flex items-center gap-1'><span className='bg-white rounded-full'><FaCheckCircle className='text-amber-400'/></span> Wide range of colors, patterns,</h1>
          </div>
          <div className='flex items-center gap-3'>

            <button className=' px-9 py-3 rounded-full  text-[16px] bg-[#5C1621] text-white hover:text-[#5C1621] relative flex items-center gap-2 overflow-hidden group transition-all duration-500'>
              <span className="absolute bottom-0 right-0 w-64 h-64 bg-white transition-all duration-500 ease-out transform -translate-x-full translate-y-full mb-9 mr-9 group-hover:mr-0 group-hover:mb-32 group-hover:translate-x-0 "></span>  
              <span className='relative z-10  uppercase '>Browse Now</span>
              <span></span>  
              <span></span>  
              <span className='p-1 bg-amber-400 group-hover:bg-[#5C1621] rounded-full absolute top-[50%] translate-y-[-50%] right-2 group-hover:rotate-45 transition duration-300 z-20'>
                <GoArrowUpRight className='text-xl text-white'/>
              </span            >  
            </button>
            
            <button className='border-2 rounded-full px-9 py-2 border-amber-400 hover:text-amber-400'>LEARN MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;