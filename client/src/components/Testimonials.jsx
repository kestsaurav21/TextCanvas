import React from 'react'
import { testimonialsData } from '../assets/assets'
import { motion } from "framer-motion"

const Testimonials = () => {
  return (
    <motion.div className='pb-12 md:py-20 mx-2 flex flex-col items-center justify-center'
    initial={{opacity: 0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    >

        <motion.h1 className='mb-2 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay:0.4, duration:3}}
        >
        Customer Testimonials
        </motion.h1>
        <p className='text-gray-900 mb-8 italic'>What Our Users Are Saying</p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8'>
            {testimonialsData.map((item, index) => (

                <div className='bg-white rounded-xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all duration-500' key={index}>
                     <div className='flex-col justify-center items-center gap-3 mt-5'>
                        <img className='w-9 rounded-full' src={item.image} alt="" />
                        <div className=''>
                            <p className='text-md font-medium text-black'>{item.name}</p>
                            <p className='text-sm text-gray-600'>{item.role}</p>
                        </div>
                    </div>
                    
                    <p className='text-md text-gray-500'>{item.text}</p>

                
                </div>
            ))}
        </div>


        

    </motion.div>
  )
}

export default Testimonials