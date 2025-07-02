import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import AboutUs from './aboutUs'
import UsersView from './UsersView'
import './App.css'
import { Link } from 'react-router-dom'
import UserView from './UserView'
import SignupView from './SignupView'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/users' element={<UsersView />} />
          <Route path='/signup' element={<SignupView />} />


          <Route path='/users/:id' element={<UserView />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
