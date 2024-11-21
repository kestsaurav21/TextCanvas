import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div className='flex flex-col justify-center items-center my-32'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How it works</h1>
        <p className='italic text-lg mb-8'>"Transform Words into Masterpieces!"</p>
        
        <div className='space-y-4 w-full max-w-3xl text-sm'>
            {
                stepsData.map((step, idx) => (
                    <div key={idx} className='flex items-center bg-white mb-3 py-1 sm:py-2 px-4 sm:px-7  gap-4 rounded-lg shadow-lg border cursor-pointer hover:scale-105 transition-all duration-700'>
                        <img src={step.icon} />
                        <div>
                            <h3 className='text-lg sm:text-2xl font-semibold'>{step.title}</h3>
                            <p className='text-gray-400 text-sm sm:text-lg text-justify'>{step.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Steps