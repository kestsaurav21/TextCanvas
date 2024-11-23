import React from 'react'
import { assets } from '../assets/assets'
import { delay, motion } from "framer-motion"

const Description = () => {
  return (
    <motion.div className='px-4 sm:px-10 md:px-14 lg:px-28 flex flex-col justify-center items-center my-15 p-6 md:my-32 '
    initial={{opacity: 0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    >
        <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay:0.4, duration:3}}
        className='text-2xl sm:text-4xl text-black font-semibold mb-2 '>Create AI Images</motion.h1>
        <motion.p className='text-gray-900 mb-8 italic mt-3'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay:0.4, duration:3}}
        >Turn Your Imagination into Stunning Visuals!</motion.p>

        <motion.div className='flex flex-col gap-5 md:gap-14 md:flex-row  items-center mt-8'>
            <img className='w-80 xl:w-96 rounded-lg' src={assets.sample} />

            <div className='flex-col justify-center items-center '>
                <h3 className='text-4xl font-medium max-w-lg mb-4'>Introducing the AI-Powered <br /> <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>Text-to-Image </span> Creator!</h3>
                <p className='text-justify text-sm text-gray-700'>
                Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.
                </p>
            </div>
            
        </motion.div>

    </motion.div>
  )
}

export default Description