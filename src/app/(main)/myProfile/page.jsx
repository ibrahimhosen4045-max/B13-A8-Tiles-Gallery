 "use client" 
import ProfileUp from '@/componet/myprofile/ProfileUp'
import { authClient } from '@/lib/auth-client'
import Image from 'next/image'
import React from 'react'

const MyProfile = () => {
    const { data: session, isPending } = authClient.useSession()
    const users = session?.user
  return (
    <div className='mt-33 mb-33 flex justify-center items-center'>
      <div className='flex flex-col items-center gap-2 border border-gray-100 shadow-md rounded-2xl py-8 px-28'>
        <div className='w-37.5 h-37.5 rounded-full overflow-hidden border-2 border-gray-300'>
        <Image src={users?.image || "https://img.magnific.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"} alt='User' width={150} height={150} className=' object-cover w-full h-full'/>
      </div>
      <h1 className='text-2xl font-semibold'>{users?.name}</h1>
      <h1 className='font-medium text-gray-600'>{users?.email}</h1>
      <ProfileUp></ProfileUp>
      </div>
    </div>
  )
}

export default MyProfile
