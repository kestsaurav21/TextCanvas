import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 flex flex-col justify-center items-center my-23 p-6 md:my-28 '>
        <h1 className='text-2xl sm:text-4xl text-white font-semibold mb-2 bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>Create AI Images</h1>
        <p className='text-gray-900 mb-8 italic'>Turn Your Imagination into Stunning Visuals!</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row  items-center'>
            <img className='w-80 xl:w-96 rounded-lg' src={assets.sample} />

            <div className='flex-col justify-center items-center '>
                <h3 className='text-4xl font-medium max-w-lg mb-4'>Introducing the AI-Powered <br /> <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>Text-to-Image </span> Creator!</h3>
                <p className='text-justify text-sm text-gray-700'>
                Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.
                </p>
            </div>
            
        </div>

    </div>
  )
}

export default Description