'use client'

import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const LoginPage = () => {

  const [shawPass, setShowPass] = useState(false)
  const {register, handleSubmit, formState: {errors}}= useForm()

  const handleLogin = async (data) => {
    console.log(data, "data")
    const { data1, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
console.log(data1, error)
  }
  return (
    <div className=' bg-gray-100 mx-auto flex justify-center items-center h-screen'>
      <div className='bg-white p-19 space-y-12.5 my-10'>
        <h1 className='text-4xl font-semibold text-center'>Login your account</h1>
        <hr className='text-gray-300'/>
          <form action="" onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset  w-2xl rounded-box flex flex-col justify-between ">
              <label className="label text-xl font-semibold text-[#403F3F] pb-4">Email address</label>
              <input type="email" {...register("email", {required: "Email field is required"})} className="input w-full p-6 border-none bg-base-200" placeholder="Enter your email address" />

              {errors.email && (<p className='text-red-600'>{errors.email.message}</p>)}

              <label className="label text-xl font-semibold text-[#403F3F] py-4">Password</label>
              <div className=' relative'>
                <input type={shawPass ? "text" : "password"} {...register("password", {required: "password field is required"})} className="input w-full p-6 border-none bg-base-200" placeholder="Password" />

              <span className=' cursor-pointer absolute right-4 top-[50%] translate-y-[-50%] ' onClick={()=> setShowPass(!shawPass)}>{shawPass ? <FaEye className='text-lg'/> : <FaEyeSlash className='text-lg'/>}</span>
              </div>

              {errors.password && (<p className='text-red-600'>{errors.password.message}</p>)}
              <button  className="btn bg-[#403F3F]  text-white my-7.5">Login</button>
              <div className='font-semibold flex gap-2 justify-center'>
                <h1>Dont’t Have An Account ?</h1>
                <Link href={'/register'}><button className=' cursor-pointer text-[#F75B5F]'>Register</button></Link>
              </div>
            </fieldset>
          </form>
      </div>
    </div>
  )
}

export default LoginPage
