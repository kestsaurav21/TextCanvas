import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import {  motion } from "framer-motion"


const Upload = () => {

  const { user, setShowLogin } = useContext(AppContext);

  const navigate = useNavigate();

  const handleGenerateImage = () => {
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }

  return (
    <motion.div className='pb-16 flex flex-col items-center'
    initial={{opacity: 0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    >
        <h1 className='mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        See the magic. Try now
        </h1>

        <div>
        <motion.button 
        onClick={handleGenerateImage}
        className='bg-[#2E073F] flex items-center gap-2 text-white font-bold px-7 py-2 sm:px-10 sm:py-4 text-sm  rounded-full'
        whileHover={{  scale: 1.2,   transition: { duration: 1 }   }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ 
          default: {duration:0.5},
          opacity: { delay: 0.8, duration: 1}
        }}
        >
            Generate Images
            <img className='w-7' src={assets.star_group} />
        </motion.button>
        </div>

    </motion.div>
  )
}

export default Upload