import { getFechData } from '@/lib/data'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { FaFire } from 'react-icons/fa'

const Marquees = async () => {
  const datas = await getFechData()

  return (
    <div className='container w-11/12 mx-auto py-3 flex h-full bg-gray-100'>
      <button className='btn h-15 uppercase border-2 bg-[#5C1621] text-white  rounded-none ml-3'><FaFire className='text-amber-300'/> Hot Product</button>
      <Marquee 
        pauseOnHover={true} 
        speed={50}
        gradient={false}
        gradientWidth={20}
        className=' font-medium'
      >
        {datas.map(info => (
          <div 
            key={info.id}
            className='mx-5'
          >
            {info.title}
          </div>
        ))}
      </Marquee>

    </div>
  )
}

export default Marquees