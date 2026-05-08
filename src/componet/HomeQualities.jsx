import React from 'react'

import image1 from '@/image/quality.jpg'
import image2 from '@/image/quality1.jpg'

import Image from 'next/image'
import { FaCircleCheck } from 'react-icons/fa6'
import { PiPulseFill } from 'react-icons/pi'
import { TbMoneybagPlus } from 'react-icons/tb'
import { FaGlobe } from 'react-icons/fa'
import { BsCoin } from 'react-icons/bs'
const HomeQualities = () => {
  return (
    <div className='flex flex-col lg:flex-row container w-11/12 mx-auto gap-10 items-center py-20'>
          <div className='w-full lg:flex-1 grid grid-cols-2 gap-5  overflow-hidden'>
    
            <div className=' relative  lg:h-85  md:left-20 lg:left-20 xl:left-25 2xl:left-40'>
              <Image 
                src={image2} 
                alt='source'
                width={500}
                height={800}
                className=' object-cover w-100 h-120 rounded-lg'
              />
            </div>
            <div className='relative row-span-2 top-50  md:-left-10 lg:left-0 border-3 border-white rounded-lg'>
              <Image 
                src={image1}
                alt='source'
                width={500}
                height={700}
                className='object-cover w-100 h-120 rounded-lg'
              />
            </div>

            <div className=' w-full  lg:h-85 text-center '>
              <div className=' relative lg:top-38 md:left-5 lg:left-2 xl:left-13 2xl:left-21 bg-[#5C1621] inline-block p-6 text-white rounded-lg'>
                <h1 className='text-3xl font-bold'>98%</h1>
                <p className='text-lg font-semibold'>Client Satisfaction <br /> Rate</p>
              </div>
            </div>
    
          </div>
    
          
          <div className='flex-1 space-y-10 '>
            <div>
              <button className='flex   items-center gap-2 px-3 py-2 bg-amber-400/5 backdrop-blur-sm rounded-full'><div className=' size-2 bg-amber-400 rounded-full'></div>Our Product Qualities</button>
            <h1 className='text-5xl font-semibold'>
              The standards that make our tile & marble exceptional
            </h1>
            <p className='text-lg'>Our tiles and marble are crafted to the highest standards, combining precision manufacture, rigorous quality checks, and superior materials.</p>
            </div>
          
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='p-6 border border-gray-200 rounded-lg'>
                  <h1 className='font-medium text-xl pb-3 border-b border-gray-200 flex items-center gap-1'><PiPulseFill className='text-2xl text-[#5C1621]'/> 50+ Highly Equipped</h1>
                  <p className='text-gray-600 pt-3'>With 50+ highly equipped units & advanced machinery, we ensure precision.</p>
                </div>
                <div className='p-6 border border-gray-200 rounded-lg'>
                  <h1 className='font-medium text-xl pb-3 border-b border-gray-200 flex items-center gap-1'><TbMoneybagPlus className='text-2xl text-[#5C1621]'/>100+ Skilled Experts</h1>
                  <p className='text-gray-600 pt-3'>With dedicated experts, we combine experience, expertise creativity expertise.</p>
                </div>
                <div className='p-6 border border-gray-200 rounded-lg'>
                  <h1 className='font-medium text-xl pb-3 border-b border-gray-200 flex items-center gap-1'><FaGlobe className='text-2xl text-[#5C1621]'/>80+ Global Reach</h1>
                  <p className='text-gray-600 pt-3'>Our global reach spans 80+ countries, allowing us to provide high quality.</p>
                </div>
                <div className='p-6 border border-gray-200 rounded-lg'>
                  <h1 className='font-medium text-xl pb-3 border-b border-gray-200 flex items-center gap-1'><BsCoin  className='text-2xl text-[#5C1621]'/>25+ Years Experience</h1>
                  <p className='text-gray-600 pt-3'>With over 25 years of experience in the tiles and marble industry.</p>
                </div>
            </div>
          </div>
    
        </div>
  )
}

export default HomeQualities
