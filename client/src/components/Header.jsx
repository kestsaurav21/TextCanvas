import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { delay, motion } from "framer-motion"
import { AppContext } from '../context/AppContext'
import { useNavigate } from "react-router-dom";


const Header = () => {

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
    <motion.div className='px-4 sm:px-10 md:px-14 lg:px-28 flex flex-col justify-center items-center text-center my-20 '
    initial={{opacity: 0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    >
        
        <motion.div className='flex items-center justify-center rounded-full py-2 px-7 sm:px-10 sm:py-3  bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent hover:scale-105 transition-all duration-700'
          initial={{ opacity: 0, y:-20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ delay:0.2, duration:0.8 }}
        >
          <p className='font-semibold text-lg sm:text-xl pr-2 '>
            Turn Your Ideas into Stunning Images
          </p>
          <img className='w-4 sm:w-7' src={assets.rating_star} />
        </motion.div>

        <motion.h1 className='m-10 text-3xl sm:text-6xl  font-semibold hover:scale-105 transition-all duration-700 '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay:0.4, duration:3}}
        >
          Transform Your Text <br /> into <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>Images</span>, Instantly.        
        </motion.h1>

        <motion.p className='mb-10 text-md sm:text-xl'
        initial={{ opacity: 0, y:20 }}
        animate={{ opacity: 1 , y:0 }}
        transition={{ delay:0.6, duration:0.8}}
        >
        "Type, Imagine, Create – Art in Seconds with AI!"
        </motion.p>

        <motion.button 
        onClick={handleGenerateImage}
        className='bg-[#2E073F] flex items-center gap-2 text-white font-bold px-7 py-2 sm:px-10 sm:py-4 text-sm border-2 border-white rounded-full'
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
            <img className='w-7' src={assets.star_group} alt="" />
        </motion.button>

        <motion.div className='flex flex-wrap justify-center mt-16 gap-3'
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:1, duration:1 }}
        >
          {
            Array(12).fill('').map((item, idx) => (
              <img className='rounded hover:scale-105 transition-all duration-700 cursor-pointer max-sm:w-10'

              src={ idx % 2 === 0 ? assets.sample_img1 : assets.sample_img2 }
              key={idx} width={70}
              />

            ))
          }
          
        </motion.div>

    </motion.div>
  )
}

export default Header