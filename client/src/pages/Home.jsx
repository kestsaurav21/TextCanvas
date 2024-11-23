import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import { assets } from '../assets/assets'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

const Home = () => {
  return (
    <div>
    <Header />
    <Steps />
    <Description />
    <Testimonials />
    <Upload />

    </div>
  )
}

export default Home