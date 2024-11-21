import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
        
        <div className='inline-flex items-center justify-center rounded-full  py-2 px-7 sm:px-10 sm:py-3  bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent hover:scale-105 transition-all duration-700 '>
          <p className='font-semibold text-lg sm:text-xl pr-2 '>Turn Your Ideas into Stunning Images</p>
          <img className='w-7' src={assets.rating_star} alt="" />
        </div>

        <h1 className='m-10 text-3xl sm:text-6xl font-semibold hover:scale-105 transition-all duration-700 '>
          Transform Your Text <br /> into <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>Images</span>, Instantly.        
        </h1>

        <p className='mb-10 text-md sm:text-xl'>
        "Type, Imagine, Create – Art in Seconds with AI!"
        </p>

        <button className='bg-[#2E073F] flex items-center gap-2 text-white font-bold px-7 py-2 sm:px-10 sm:py-4 text-sm border-2 border-white rounded-full  hover:scale-105 transition-all duration-700 '>
            Generate Images
            <img className='w-7' src={assets.star_group} alt="" />
        </button>
    </div>
  )
}

export default Header