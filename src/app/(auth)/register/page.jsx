'use client'

import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const RegisterPage = () => {
    const [shawPass, setShowPass] = useState(false)

  const {register, handleSubmit, formState: {errors}}= useForm()

  const handleLogin = async (data) => {
    console.log(data, "data")
    const {email, name, photo, password} = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });
    console.log(res, error)
    if(error) {
      alert(error.message)
    }
    if(res) {
      alert("Signup successfull")
    }
  }
  return (
    <div className=' bg-gray-100 mx-auto flex justify-center items-center h-screen'>
      <div className='bg-white p-19 space-y-12.5 my-10'>
        <h1 className='text-4xl font-semibold text-center'>Register your account</h1>
        <hr className='text-gray-300'/>
          <form action="" onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset  w-2xl rounded-box flex flex-col justify-between ">
              <label className="label text-xl font-semibold text-[#403F3F] pb-4">Your Name</label>
              <input type="text" {...register("name", {required: "Name field is required"})} className="input w-full p-6 border-none bg-base-200" placeholder="Enter your Name" />

              {errors.name && (<p className='text-red-600'>{errors.name.message}</p>)}
              <label className="label text-xl font-semibold text-[#403F3F] py-4">Photo URL</label>
              <input type="text" {...register("photo", {required: "Photo URL field is required"})} className="input w-full p-6 border-none bg-base-200" placeholder="Enter your photo URL" />

              {errors.photo && (<p className='text-red-600'>{errors.photo.message}</p>)}
              <label className="label text-xl font-semibold text-[#403F3F] py-4">Email address</label>
              <input type="email" {...register("email", {required: "Email field is required"})} className="input w-full p-6 border-none bg-base-200" placeholder="Enter your email address" />

              {errors.email && (<p className='text-red-600'>{errors.email.message}</p>)}

              <label className="label text-xl font-semibold text-[#403F3F] py-4">Password</label>

            <div className=' relative'>
            <input type={shawPass ? "text" : "password"} {...register("password", {required: "password field is required"})} className="input w-full p-6 border-none bg-base-200" placeholder="Password" />
 
            <span className=' cursor-pointer absolute right-4 top-[50%] translate-y-[-50%] ' onClick={()=> setShowPass(!shawPass)}>{shawPass ? <FaEye className='text-lg'/> : <FaEyeSlash className='text-lg'/>}</span>
        </div>             

              {errors.password && (<p className='text-red-600'>{errors.password.message}</p>)}

              <button  className="btn bg-[#403F3F] my-7.5 text-white ">Register</button>
              <div className='font-semibold flex gap-2 justify-center'>
              </div>
            </fieldset>
          </form>
      </div>
    </div>
  )
}

export default RegisterPage
