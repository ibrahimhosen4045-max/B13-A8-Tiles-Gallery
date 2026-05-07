 "use client" 
import ProfileUp from '@/componet/myprofile/ProfileUp'
import { useCart } from '@/context/CartContext'

import { authClient } from '@/lib/auth-client'
import Image from 'next/image'
import React, { useContext } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { toast } from 'react-toastify'

const MyProfile = () => {
    const { data: session, isPending } = authClient.useSession()
    const users = session?.user

    const {orders, deletOrder} = useCart()
    
  return (
    <div className='mt-33 mb-33 flex flex-col w-11/12 lg:flex-row container mx-auto gap-10'>
      <div >
        <h1 className='text-xl font-bold pb-4 '>My Profile</h1>
        <div className='flex flex-col items-center gap-2 border border-gray-200 shadow-md  py-8 px-28'>
        <div className='w-37.5 h-37.5 rounded-full overflow-hidden border-2 border-gray-300'>
        <Image src={users?.image || "https://img.magnific.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"} alt='User' width={150} height={150} className=' object-cover w-full h-full'/>
      </div>
      <h1 className='text-2xl font-semibold'>{users?.name}</h1>
      <h1 className='font-medium text-gray-600'>{users?.email}</h1>
      <ProfileUp></ProfileUp>
      </div>
      </div>
       <div className='w-full'>
        <h1 className='text-xl font-bold mb-4'>My Orders</h1>

        {orders.length === 0 ? (
          <p>No orders yet</p>
        ) : (
          orders.map((item, index) => (
            <div key={index} className='border border-gray-300 py-4 px-6 mb-3 uppercase flex  font-extralight'>
              <div className='flex items-center gap-3'>
                <div>
                <Image src={item.image} alt='sourch' width={100} height={100}/>
              </div>
              <div className='space-y-1'>
                <h2 className='font-normal'>{item.title}</h2>
              <p className='flex items-center'><span className='w-25 block'>Quantity:</span> {item.qty}</p>
              <p className='flex items-center'><span className='w-25 block'>Price:</span> ${item.total}</p>
              </div>
              </div>
              <div className='flex flex-1 h-full justify-end items-start  relative z-50'>
                <button onClick={()=>{
                  deletOrder(item.orderId)
                  toast.success("Cancel order")
                  }} className='btn text-red-500'> <RiDeleteBin6Line /></button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default MyProfile
