import React from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 flex justify-center items-center m-20'>
    <form>
    <div className='relative m-2  flex flex-col justify-center items-center'>
      <img className='w-80 max-w-sm rounded'  src={assets.sample} />
      <span className='absolute bottom-0 left-0 h-1 bg-blue-500 w-full transition-all duration-[10s]'></span>
    </div>
    <p>Loading....</p>

    <div className='flex w-screen max-w-xl bg-neutral-500 text-white text-sm rounded-full p-0.5 mt-10 '>
      <input className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20'
       type="text" placeholder='Describe what you want to generate' />
      <button className='bg-zinc-900 px-7 sm:px-16 py-3 rounded-full cursor-pointer'
      type='submit'>Generate</button>
    </div>
    </form>
    </div>
  )
}

export default Result