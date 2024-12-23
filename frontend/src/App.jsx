import React from 'react'
import Navbar from './components/Functionality/Navbar'
import Footer from './components/Functionality/footer'
import { ToastContainer } from 'react-toastify'


const App = () => {
  return (
    <>
    <Navbar/>
    <Footer/>
    <ToastContainer position="bottom-right" />
    </>
  )
}

export default App