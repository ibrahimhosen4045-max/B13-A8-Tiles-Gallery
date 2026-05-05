import { getFechData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'

import { HiOutlineArrowRight } from 'react-icons/hi'
import { HiArrowUpRight } from 'react-icons/hi2'



const Marquees = async () => {
  const datas = await getFechData()

  return (
    <div className='container mx-auto py-6'>
      
      <Marquee 
        pauseOnHover={true} 
        speed={50}
        gradient={false}
        gradientWidth={20}
        className=''
      >
        {datas.slice(0,6).map(info => (
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