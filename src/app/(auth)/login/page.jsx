'use client'

import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import image from '@/image/login.png'
import Image from 'next/image'
import { toast } from 'react-toastify'

const LoginPage = () => {

  const [showPass, setShowPass] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const handleLogin = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
          toast.error(error.message)
        }
        if (res) {
          toast.success("Login successful")
        }
  }

  const googleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-[900px] h-[550px] bg-white rounded-xl shadow-lg overflow-hidden flex">

        {/* LEFT SIDE */}
        <div className="flex-3 bg-blue-600 text-white flex flex-col   p-10 justify-between">
          <div className=''>
            <h2 className="text-3xl font-semibold mb-4">Login</h2>
          <p className=" text-sm opacity-90">
            To keep connected with us <br /> please login with your personal info
          </p>
          </div>

          <div className="mt-10">
            <Image src={image} alt="secure" className="w-70" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-5  px-10">
          <div className='w-full h-full flex flex-col justify-center '>
          <h2 className="text-2xl font-semibold text-center mb-5">Login with Social Profile</h2>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-3 mb-5">
            
            <button className="p-2 bg-red-500 text-white rounded-full cursor-pointer" onClick={googleLogin}><FaGoogle /></button>
            
          </div>

          <p className="text-center text-sm text-gray-400 mb-4">or use your email account</p>

          {/* FORM */}
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">

            <input
              type="email"
              {...register("email", { required: "Email field is required" })}
              placeholder="Enter Your Email"
              className="w-full border-b outline-none py-2"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                {...register("password", { required: "Password field is required" })}
                placeholder="Password"
                className="w-full border-b outline-none py-2"
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

            <button className="w-full bg-blue-600 text-white py-2 rounded-md mt-3">
              Login
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link href="/register" className="text-blue-600 font-medium">Register</Link>
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage