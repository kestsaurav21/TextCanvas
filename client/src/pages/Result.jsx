import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Result = () => {

  const [ image, setImage ] = useState(assets.sample)

  const [ isImageLoaded, setIsImageLoaded ] = useState(true)

  const [loading, setLoading] = useState(true);

  const [input, setInput] = useState('')

  const submitHandler = async (e) => {
    
  }


 
  return (

  <div className='min-h-screen'>
  <form onSubmit={submitHandler}
  className='px-4 sm:px-10 md:px-14 lg:px-28 flex flex-col justify-center items-center m-20'>
    <div className='flex-col items-start' >
    <div className='relative m-2  flex flex-col justify-center items-center'>
      <img className='w-80 max-w-sm rounded'  src={image} />
      <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'} `} />
    </div>
    
    <p className={!loading ? 'hidden' : ''}>Loading....</p>
    </div>

    {!isImageLoaded && 
    <div className='flex w-screen max-w-xl bg-neutral-500 text-white text-sm rounded-full p-0.5 mt-10 '>
    <input onChange={(e) => setInput(e.target.value)} value={input}
    className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20'
     type="text" placeholder='Describe what you want to generate' />
    <button className='bg-zinc-900 px-7 sm:px-16 py-3 rounded-full cursor-pointer'
    type='submit'>Generate</button>
    </div>  
    }
    
    {isImageLoaded && 
       <div className='flex justify-center items-center gap-2 text-white text-sm p-0.5 mt-10 rounded-full '>
       <p onClick={()=> {setIsImageLoaded(false)}}
        className='bg-transparent text-black border-2 border-black px-8 py-3 rounded-full cursor-pointer hover:scale-105 transition-all duration-500'>Generate Another</p>
       <a href={image} download className='bg-black border-r-2 border-white px-8 py-3 rounded-full cursor-pointer hover:scale-105 transition-all duration-500'>Download</a>
       </div>
    
    }

   
    </form>

    </div>
  )
}

export default Result