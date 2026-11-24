"use client"

import React, { useState } from 'react'
import toast from "react-hot-toast";
import { GoEyeClosed } from 'react-icons/go';
import { RxEyeOpen } from 'react-icons/rx';
import api from "@/lib/api"

export default function RegisterPage() {

  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Password: "",
    ConfirmPassword: ""
  })
  const [error, setError] = useState({})
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false); 
  const [isSubmitting,setIsSubmitting] = useState(false)

  const HandleChange = (e) => {

    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev, [name]: value,

    }))

  }

  const HandleError = () => {
    const newError = {};

    // Name validation
    if (formData.FullName.trim() === "") {
      newError.FullName = "Please enter your name";
    }

    // Email validation
    if (formData.Email.trim() === "") {
      newError.Email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
      newError.Email = "Please enter a valid email address";
    }

    // Password validation
    if (formData.Password === "") {
      newError.Password = "Please enter your password";
    } else if (formData.Password.length < 8) {
      newError.Password = "Password must contain at least 8 characters";
    } else if (!/[a-zA-Z]/.test(formData.Password)) {
      newError.Password = "Password must contain at least one alphabet";
    } else if (!/[0-9]/.test(formData.Password)) {
      newError.Password = "Password must contain at least one number";
    } else if (!/[!@#$%^&*(),.?":{}|<>_\-+=]/.test(formData.Password)) {
      newError.Password = "Password must contain at least one special character";
    }

    // Confirm password validation
    if (formData.ConfirmPassword === "") {
      newError.ConfirmPassword = "Please confirm your password";
    } else if (formData.Password !== formData.ConfirmPassword) {
      newError.ConfirmPassword = "Passwords do not match";
    }

    setError(newError);

    return Object.keys(newError).length === 0;
  };

  const HandleSubmit = async (e) => {
    console.log("button triggered")
    e.preventDefault()
    const isValid = HandleError()
    console.log(isValid)
    if (!isValid) {
      toast.error("Please check your form details!");
      return;
    } 
    if (!agreeTerms) {
    toast.error("Please accept the terms and conditions");
    return;
  }
try{
    const response =  await api.post("/auth/register",{
      FullName:formData.FullName,
      Email:formData.Email,
      Password:formData.Password,
      ConfirmPassword:formData.ConfirmPassword
    })
    console.log(formData)
    toast.success(response.data.message)
    console.log("registeration succesful", formData)
    setFormData({
      FullName: "",
      Email: "",
      Password: "",
      ConfirmPassword: ""
    })
    setError({})
    setAgreeTerms(false) 
  }
  catch(error){

    toast.error(
      error.response?.data?.message || "please try again"
    )

  }
  finally{
    setIsSubmitting(false)
  }

  }





  return (
    <>
      {/* <form >
        <div className='flex flex-col'>
          <div>
            <label>Name</label>
            <input type="text" className='border-2 border-gray-600' name="FullName" onChange={HandleChange} value={formData.FullName} />
            <p className='text-red-700'>{error.FullName}</p>
          </div>
          <div>
            <label>Email</label>

            <input type="email" className='border-2 border-gray-600' name="Email" value={formData.Email} onChange={HandleChange} />
            <p className='text-red-700'>{error.Email}</p>
          </div>
          <div>
            <label>Password</label>
            <input maxLength={8} className='border-2 border-gray-600' name="Password" value={formData.Password} onChange={HandleChange} />
            <p className='text-red-700'>{error.Password}</p>
          </div>
          <div>
            <label>ConfirmaPassword</label>
            <input maxLength={8} type="text" className='border-2 border-gray-600' value={formData.ConfirmPassword} name="ConfirmPassword" onChange={HandleChange} />
            <p className='text-red-700'>{error.ConfirmPassword}</p>
          </div>

          <button onClick={HandleSubmit} >submit</button>

        </div>
      </form> */} 
      



  <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">

    <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-xl shadow-sm px-8 py-9">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Create your account
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Fill in your details below to register.
        </p>
      </div>

      <div className="border-b border-slate-200 mb-6"></div>

      <form onSubmit={HandleSubmit} className="space-y-5">

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-slate-900 mb-2">
            Name <span className="text-blue-600">*</span>
          </label>

          <input
            type="text"
            name="FullName"
            value={formData.FullName}
            onChange={HandleChange}
            placeholder="Enter your full name"
            className="w-full border border-slate-300 rounded-lg px-3.5 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />

          <p className="text-sm text-red-600 mt-1">
            {error.FullName}
          </p>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-slate-900 mb-2">
            Email <span className="text-blue-600">*</span>
          </label>

          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={HandleChange}
            placeholder="name@example.com"
            className="w-full border border-slate-300 rounded-lg px-3.5 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />

          <p className="text-sm text-red-600 mt-1">
            {error.Email}
          </p>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-slate-900 mb-2">
            Password <span className="text-blue-600">*</span>
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="Password"
              value={formData.Password}
              onChange={HandleChange}
              maxLength={8}
              placeholder="Min. 8 characters"
              className="w-full border border-slate-300 rounded-lg px-3.5 py-3 pr-12 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
            >
              {showPassword ? <RxEyeOpen color="black" size={30} /> : <GoEyeClosed color="black" size={30}   />}
            </button>
          </div>

          <p className="text-sm text-red-600 mt-1">
            {error.Password}
          </p>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-slate-900 mb-2">
            Confirm Password <span className="text-blue-600">*</span>
          </label>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="ConfirmPassword"
              value={formData.ConfirmPassword}
              onChange={HandleChange}
              placeholder="Re-enter your password"
              className="w-full border border-slate-300 rounded-lg px-3.5 py-3 pr-12 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
            >
              {showConfirmPassword ? <RxEyeOpen color="black" size={30} /> : <GoEyeClosed color="black" size={30}/> }
            </button>
          </div>

          <p className="text-sm text-red-600 mt-1">
            {error.ConfirmPassword}
          </p>
        </div>

        {/* Password Strength */}


        {/* Terms */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="mt-1 h-4 w-4 accent-blue-600 cursor-pointer"
          />

          <label className="text-sm text-slate-700">
            I agree to the{" "}
            <a href="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>.
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!agreeTerms}
          className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-300 text-white font-semibold rounded-lg py-3.5 transition duration-200 flex items-center justify-center gap-2"
        >
         {isSubmitting ? "Registering":"Submit"} <span>→</span>
        </button>

      </form>

      {/* Sign In */}
      <p className="text-center text-sm text-slate-600 mt-7">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-blue-600 font-semibold hover:underline"
        >
          Sign in
        </a>
      </p>

    </div>
  </div>
);

      
    </>
  )
}

