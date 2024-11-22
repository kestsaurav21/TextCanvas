import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
const App = () => {

  const { showLogin } = useContext(AppContext)
  return (
    <div className='min-h-full bg-gradient-to-b from-violet-50 to-fuchsia-300'>
      <NavBar  />
      { showLogin && <Login /> }
      
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/buy' element={<BuyCredit />} />
            <Route path='/result' element={<Result />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App