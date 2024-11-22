import React, { useState } from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { assets } from '../assets/assets';
import { FaRegUser } from "react-icons/fa";


const Login = () => {

    const [ register, setRegister ] = useState('SignUp')

  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        
        <form className='relative bg-white p-10 rounded-xl text-slate-500'>
            <h1 className='text-2xl text-center font-medium text-neutral-700'>{register}</h1>
            <p className='text-sm mt-2'>Welcome! Please {register} to continue</p>

            { register !== 'Login'  && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                <FaRegUser />

                <input type="text"
                name="fullname"
                placeholder="Full Name"
                required
                className="outline-none text-sm"
            />
            </div>}

            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                <MdOutlineMailOutline />

                <input type="text"
                name="email"
                placeholder="Email"
                required
                className="outline-none text-sm"
            />
            </div>

            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                <RiLockPasswordFill />

                <input type="password"
                name="password"
                placeholder="********"
                required
                className="outline-none text-sm"
            />
            </div>

            <button className='w-full bg-indigo-600 text-white mt-5 py-2 rounded-full text-sm font-medium cursor-pointer'>{register}</button>



            <p className='mt-5 text-sm'>{ register === 'Login' ?  'Dont have account?': 'Already have an account?' }
            <span onClick={() => register === 'Login' ? setRegister('SignUp') : setRegister('Login')} className="text-indigo-600 hover:underline cursor-pointer">
            {register} here
            </span>
            </p>

            <img  
             className='absolute top-0 right-0 p-5 cursor-pointer'
            src={assets.cross_icon} />
        </form>
    </div>
  )
}

export default Login