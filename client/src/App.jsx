import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'

const App = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/buy' element={<BuyCredit />} />
            <Route path='/buy' element={<Result />} />
        </Routes>
    </Router>
    </>
  )
}

export default App