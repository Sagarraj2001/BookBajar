import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Signup from './Page/Authentication/Signup'
import Login from './Page/Authentication/Login'
import Home from './Components/Home'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </Router>

    </>
  )
}

export default App
