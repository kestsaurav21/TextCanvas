import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import { assets } from '../assets/assets'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
    <Header />
    <Steps />
    <Description />
    <Testimonials />

    </div>
  )
}

export default Home