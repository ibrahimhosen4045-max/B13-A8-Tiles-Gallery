"use client"
import React from 'react'
import logo from '@/image/NavLogo.png'
import Image from 'next/image'

import { GoArrowUpRight } from 'react-icons/go'
import Link from 'next/link'
import { authClient } from '@/lib/auth-client'
import AddCard from './AddCard'

const Navber = () => {
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user
  
  const meno = <>
      <Link href={'/'}><li><button>Home</button></li></Link>
      <Link href={'/allTiles'}><li><button>All Tiles</button></li></Link>
      <Link href={'/myProfile'}><li><button>My Profile</button></li></Link>
  </>
  return (
    <div className=' absolute top-5 z-50 container w-11/12 left-[50%] translate-x-[-50%]'>
      <div className=" backdrop-blur-lg lg:mb-48 shadow-md w-full rounded-full bg-white border border-gray-100">
          <div className="collapse-title navbar py-0 min-h-0">
            <div className="navbar-start">
              
              <Link href={'/'}>
              <button className="  flex items-center ">
                <Image src={logo} alt='Logo' height={70}/>
                  <h1 className='text-2xl font-bold leading-5 '>Tiles.</h1> 
              </button>
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex text-lg font-semibold">
              <ul className="menu menu-horizontal px-1">
                {meno}
              </ul>
            </div>
            <div className="navbar-end">
            {isPending ? (<span className="loading loading-ring loading-md"></span>) : user ? (<div className='flex items-center gap-3'>
              <AddCard></AddCard>
          <h2 className='font-semibold text-[#5C1621] hidden sm:flex'>Hello, {user?.name}</h2>
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className='h-10.5 w-10.5 overflow-hidden rounded-full border-2 shadow-sm border-gray-300'>
          <Image className=' object-cover object-center ' src={user?.image || "https://img.magnific.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"} alt='user' width={41} height={31}/>
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <div  className='w-full flex justify-center'>
        <button onClick={async ()=> await authClient.signOut()} className=' group  btn px-10 bg-[#5C1621] text-white hover:text-[#5C1621] hover:bg-white transition duration-300'>
          LogOut
          <span className='p-1 bg-amber-400 group-hover:bg-[#5C1621] rounded-full group-hover:rotate-45 transition duration-300 '>
          <GoArrowUpRight className='text-xl text-white'/>
          </span>
        </button>
        </div>
      </ul>
            </div>
        </div>) : (<Link href={'/login'}>
              <button className='  px-9.25  py-3.25 rounded-full  text-[16px] bg-[#5C1621] text-white hover:text-[#5C1621] relative flex items-center gap-2 overflow-hidden group transition-all duration-500'>

              <span className="absolute bottom-0 right-0 w-64 h-64 bg-white transition-all duration-500 ease-out transform -translate-x-full translate-y-full mb-9 mr-9 group-hover:mr-0 group-hover:mb-32 group-hover:translate-x-0 "></span>
              <span className='relative z-10 font-medium'>Login</span>
              <span></span>
              <span></span>

              <span className='p-1 bg-amber-400 group-hover:bg-[#5C1621] rounded-full absolute top-[50%] translate-y-[-50%] right-2 group-hover:rotate-45 transition duration-300 z-20'>
                <GoArrowUpRight className='text-xl text-white'/>
              </span>

            </button>
            </Link> )}
            
          </div>
          <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden  transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow right-0">
        {meno}
      </ul>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Navber
