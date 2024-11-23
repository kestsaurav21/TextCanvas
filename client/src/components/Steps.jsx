import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from "framer-motion"


const Steps = () => {
  return (
    <motion.div className='px-4 sm:px-10 md:px-14 lg:px-28 flex flex-col justify-center items-center my-52'
    initial={{opacity: 0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    >
        <motion.h1 className='text-3xl sm:text-4xl font-semibold mb-2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay:0.4, duration:3}}
        >How it works
        </motion.h1>
        <motion.p className='italic text-lg mb-8'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay:0.4, duration:3}}
        >"Transform Words into Masterpieces!"
        </motion.p>
        
        <motion.div className='space-y-4 w-full max-w-3xl text-sm'
        initial={{ opacity: 0, y:20 }}
        animate={{ opacity: 1 , y:0 }}
        transition={{ delay:0.6, duration:0.8}}
        >
            {
                stepsData.map((step, idx) => (
                    <motion.div key={idx} className='flex items-center bg-white mb-3 py-1 sm:py-2 px-4 sm:px-7  gap-4 rounded-lg shadow-lg border cursor-pointer'
                    whileHover={{  scale: 1.2,   transition: { duration: 1 }   }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{ 
                    default: {duration:0.5},
                    opacity: { delay: 0.8, duration: 1}
                    }}
                    >
                        <img src={step.icon} />
                        <div>
                            <h3 className='text-lg sm:text-2xl font-semibold'>{step.title}</h3>
                            <p className='text-gray-400 text-sm sm:text-lg text-justify'>{step.description}</p>
                        </div>
                    </motion.div>
                ))
            }
        </motion.div>
    </motion.div>
  )
}

export default Steps