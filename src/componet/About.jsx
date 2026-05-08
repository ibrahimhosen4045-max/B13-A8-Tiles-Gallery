import React from 'react'
import image1 from '@/image/about1.jpg'
import image2 from '@/image/about2.jpg'
import image3 from '@/image/about3.jpg'
import Image from 'next/image'
import { FaCircleCheck } from 'react-icons/fa6'


const About = () => {
  
  
  return (
    <div className='flex flex-col lg:flex-row container w-11/12 mx-auto gap-10 items-center py-20'>
      <div className='w-full lg:flex-1 grid grid-cols-2 gap-4 '>

        <div className=' relative w-full  lg:h-85'>
          <Image 
            src={image2} 
            alt='source'
            fill
            className=' object-cover rounded-lg'
          />
        </div>
        <div className='relative row-span-2 w-full h-full'>
          <Image 
            src={image1}
            alt='source'
            fill
            className='object-cover rounded-lg'
          />
        </div>

        <div className='relative w-full h-[240] lg:h-85'>
          <Image 
            src={image3} 
            alt='source'
            fill
            className='object-cover rounded-lg'
          />
        </div>

      </div>

      
      <div className='flex-1 space-y-10 '>
        <button className='flex   items-center gap-2 px-3 py-2 bg-amber-400/5 backdrop-blur-sm rounded-full'><div className=' size-2 bg-amber-400 rounded-full'></div> Built on Quality and Trust</button>
        <h1 className='text-5xl font-semibold'>
          Trusted quality driven tiles & marble manufacturers
        </h1>
        <p className='text-lg'>We are a trusted manufacturer of premium tiles and marble, committed to delivering consistent quality, precision craftsmanship, and innovative surface solutions</p>
        <div>
            
            <h1 className='font-bold text-lg'>“Driven by quality at every stage, we manufacture tiles and marble using modern technology, carefully selected materials”</h1>
        </div>
        <div className='space-y-3'>
            <h1 className='flex items-center gap-2 text-gray-800'><FaCircleCheck className='text-[#5C1621]'/> Durable and Long-Lasting Surfaces</h1>
            <h1 className='flex items-center gap-2 text-gray-800'><FaCircleCheck className='text-[#5C1621]'/> Premium Raw Material Selection</h1>
            <h1 className='flex items-center gap-2 text-gray-800'><FaCircleCheck className='text-[#5C1621]'/> Continuous Product Innovation</h1>
        </div>
      </div>

    </div>
  )
}

export default About