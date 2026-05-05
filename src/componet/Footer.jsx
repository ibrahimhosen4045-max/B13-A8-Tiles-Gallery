'use client'
import React from 'react'
import image from '@/image/footerimage.jpg'
import Image from 'next/image'
import logo from '@/image/NavLogo.png'
import { ImFacebook, ImFacebook2 } from 'react-icons/im'
import { FaInstagramSquare, FaPhoneAlt, FaTwitter, FaTwitterSquare } from 'react-icons/fa'

import { FaInstagram } from 'react-icons/fa6'
import { MdMail } from 'react-icons/md'
import { HiLocationMarker } from 'react-icons/hi'
import { toast } from 'react-toastify'

const Footer = () => {
  const subcribe = ()=> {
    toast.success("Thanks for suport")
  }
  return (
    <div className='w-full h-[85vh] md:h-[75vh] lg:h-[40vh] overflow-hidden relative text-white'>

      {/* Background Image */}
     <div className="absolute inset-0 -z-10">
       <Image
        src={image}
        alt='bg footer'
        fill
        className='object-cover'
        priority
      />

     </div>
      <div className='absolute inset-0 bg-black/90 flex items-center justify-center'>
        
        <footer className="footer grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-white p-5  md:w-6xl lg:gap-5 xl:gap-10 ">
          
          <nav className='col-span-2 md:col-span-3 lg:col-end-2 '>
            <div className='flex items-center -mt-5 -ml-5'>
              <div className=' relative'>
                <Image className=' relative z-10' src={logo} alt='Logo' width={100}/>
                <div className='size-13 absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-full bg-white'></div>
              </div>
              <div>
                <h1 className='text-2xl font-bold leading-5 text-amber-400'>Tiles.</h1> 
                <h1>Gallery</h1>
              </div>
            </div>
            <p>We are a trusted manufacturer premium tiles and marble, delivering surface solutions for residential.</p>
            <div className='flex gap-2 pt-4'>
              <ImFacebook  className='text-lg'/>
              <FaTwitter className='text-xl'/>
              <FaTwitterSquare className='text-xl'/>
              <FaInstagram className='text-xl'/>
            </div>
          </nav>

          <nav className='space-y-1'>
            <h6 className="font-semibold text-lg">Services</h6>
            <span className='border border-amber-400 w-5'></span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>

          <nav className='space-y-1'>
            <h6 className="font-semibold text-lg">Company</h6>
            <span className='border border-amber-400 w-5'></span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>

          <nav className='space-y-1'>
            <h6 className="font-semibold text-lg">Contuct Info</h6>
            <span className='border border-amber-400 w-5'></span>
            <a className="link link-hover flex gap-1 items-center"><FaPhoneAlt /> +123456789</a>
            <a className="link link-hover flex gap-1 items-center"><MdMail /> massage</a>
            <a className="link link-hover flex gap-1 "><HiLocationMarker /> 4841 Smith Avenue, Amarillo Texas 79101</a>
          </nav>

          <form className='space-y-2 '>
            <h6 className="font-semibold text-lg">Newsletter</h6>
            <span className='border border-amber-400 w-5'></span>
            <fieldset className="w-80 ">
              <label className=''>Enter your email address</label>

              <div className="md:join pt-4 ">
                <input
                  type="text"
                  
                  placeholder="username@site.com"
                  className="input input-bordered join-item w-48 block md:inline"
                />
                <button onClick={subcribe} className="btn bg-amber-400 text-white join-item mt-2 md:mt-0">Subscribe</button>
              </div>
            </fieldset>
          </form>

        </footer>

      </div>
    </div>
  )
}

export default Footer