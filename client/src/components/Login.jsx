import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { assets } from '../assets/assets';
import { FaRegUser } from "react-icons/fa";
import { AppContext } from '../context/AppContext';
import axios from 'axios'
import { toast } from 'react-toastify';


const Login = () => {

    const [ register, setRegister ] = useState('SignUp')

    const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext)

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

   

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        try {

            if(register === 'Login'){
                const { data } =await axios.post(backendUrl + '/api/user/login', {
                    email, password
                })

                if(data.success){
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                }else{
                    toast.error(data.message)
                }
            }else{
                const { data } =await axios.post(backendUrl + '/api/user/register', {
                    name, email, password
                })

                if(data.success){
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                }else{
                    toast.error(data.message)
                }
            }    
        }catch (error) {
            toast.error(data.message)
        }
    }
    

    useEffect( () => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])


  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        
        <form className='relative bg-white p-10 rounded-xl text-slate-500'
        onSubmit={onSubmitHandler}
        >
            <h1 className='text-2xl text-center font-medium text-neutral-700'>{register}</h1>
            <p className='text-sm mt-2'>Welcome! Please {register} to continue</p>

            { register !== 'Login'  && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                <FaRegUser />
                <input type="text"
                name="fullname"
                placeholder="Full Name"
                required
                value={name}
                className="outline-none text-sm"
                onChange={(e) => setName(e.target.value) }
            />
            </div>}

            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                <MdOutlineMailOutline />

                <input type="text"
                name="email"
                placeholder="Email"
                required
                value={email}
                className="outline-none text-sm"
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>

            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                <RiLockPasswordFill />

                <input type="password"
                name="password"
                placeholder="********"
                required
                value={password}
                className="outline-none text-sm"
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>

            <button className='w-full bg-indigo-600 text-white mt-5 py-2 rounded-full text-sm font-medium cursor-pointer'>{register}</button>



            <p className='mt-5 text-sm'>{ register === 'Login' ?  'Dont have account?': 'Already have an account?' }
            <span onClick={() => register === 'Login' ? setRegister('SignUp') : setRegister('Login')} className="text-indigo-600 hover:underline cursor-pointer">
            {register} here
            </span>
            </p>

            <img  onClick={() => setShowLogin(false)}
             className='absolute top-0 right-0 p-5 cursor-pointer'
            src={assets.cross_icon} />
        </form>
    </div>
  )
}

export default Login