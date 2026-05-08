'use client'

import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import logo from '@/image/login.png'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'


const RegisterPage = () => {
  const [showPass, setShowPass] = useState(false)
  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const handleLogin = async (data) => {
    const { email, name, photo, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: photo,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message)
    }
    if (res) {
      toast.success("Signup successful")
      router.push('/login')
    }
  }
  const googleLogin = async () => {
      const data = await authClient.signIn.social({
        provider: "google",
      });
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-[900px]  bg-white rounded-xl shadow-lg overflow-hidden flex">

        {/* LEFT SIDE */}
        <div className="flex-3 bg-blue-600 text-white hidden md:flex flex-col   justify-between p-10">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Register</h2>
          <p className=" text-sm opacity-90">
            Enter your personal details <br /> and start journey with us.
          </p>
          </div>

          {/* Dummy Illustration */}
          <div className="mt-10">
            <Image src={logo} alt="secure" className="w-70" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-5 flex flex-col justify-center px-10 py-10">

          <h2 className="text-2xl font-semibold text-center mb-5">Create an Account</h2>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-3 mb-5">
            <button onClick={googleLogin} className="p-2 bg-red-500 text-white rounded-full"><FaGoogle /></button>
          </div>

          <p className="text-center text-sm text-gray-400 mb-4">or create with</p>

          {/* FORM */}
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">

            <input
              type="text"
              {...register("name", { required: "Name field is required" })}
              placeholder="Enter Your Name"
              className="w-full border-b outline-none py-2"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            <input
              type="email"
              {...register("email", { required: "Email field is required" })}
              placeholder="Enter Your Email"
              className="w-full border-b outline-none py-2"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <input
              type="text"
              {...register("photo", { required: "Photo URL field is required" })}
              placeholder="Photo URL"
              className="w-full border-b outline-none py-2"
            />
            {errors.photo && <p className="text-red-500 text-sm">{errors.photo.message}</p>}

            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                {...register("password", { required: "Password field is required" })}
                placeholder="Password"
                autoComplete="new-password"
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
              Create Account
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 font-medium">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage