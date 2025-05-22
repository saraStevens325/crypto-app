import React from 'react'
// import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Profile from './pages/Profile/Profile'

const App = () => {
  return (

    <div className='app'>

      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <Footer />
      
    </div>
  )
}

export default App