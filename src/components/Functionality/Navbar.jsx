import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from '../Webpages/Homepage'
import AboutUs from '../Webpages/AboutUs'
import ContactUs from '../Webpages/ContactUs'
import { CiUser } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { useState } from 'react'

import SearchBar from '../Search/Sorting/SearchBar'
import { Link } from "react-router-dom";

import CategoryPage from '../Products/CategoryPage'
import ProductDetailPage from '../Products/ProductDetailPage'
import CartPage from '../Cart/CartPage'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { TbUserCircle } from "react-icons/tb";




const Navbar = () => {

  const [isHover, changeHoverState]= useState(false)
  const [isHoverCart, changeHoverStateCart]= useState(false)

  return (
    <> <nav className='shadow-md h-20 w-full flex items-center px-6'>
      <div className="flex gap-4">
      <button className='flex bg-[#F6F6F6] hover:bg-[#00765e] hover:text-white px-5 h-10 w-30 items-center gap-1 rounded-xl'><HiOutlineMenuAlt2 />Menu</button>
      <div className='relative'><SearchBar/><IoIosSearch className='text-2xl absolute top-2 left-72' />
        </div>
      </div>
      
      <div className='flex flex-1 justify-center mr-12'>
     <Link to='/'>
      <img src='/nesture-tr-main.png' className='h-20 w-auto p-3'></img>      
      </Link></div>

      <div className=' p-3 m-2  rounded' onMouseOver={()=>changeHoverStateCart(true)} onMouseLeave={()=>changeHoverStateCart(false)}>
      <IoBagHandleOutline className='relative hover:bg-[#00765e] hover:text-white text-2xl bg-[#8FDAC5] h-10 w-10 p-2 mr-2 rounded-full' />

       {isHoverCart && <div className='absolute right-32 h-auto bg-white h-14 w-28 shadow-sm rounded p-5 m-2'>
       <CartPage/>
        </div>}
      </div>



      <div className='relative m-2 hover:bg-[#00765e] hover:text-white rounded  px-5 h-15 w-30' onMouseOver={()=>changeHoverState(true)} onMouseLeave={()=>changeHoverState(false)}>
      <TbUserCircle className='absolute text-2xl h-10 w-10 text-white p-1 bg-[#E3E6EA] rounded-full right-32 mr-1 top-1' />
      <div className='py-1'><h3 className='text-sm font-medium'>Welcome, Guest!</h3>
      <h4 className='text-xs'>Access your account</h4></div>

      {isHover && <div className='absolute left-0 h-auto bg-whiteh-14 w-28 shadow-sm rounded p-5 m-2'>
        <h3>User Account</h3>
        <h4 className='text-[#5A5F6A]'>To access your Nesture account</h4>
        <button>Login</button>
        </div>}

       </div>
       

       
    </nav>
    
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path= '/category/:prds' element={<CategoryPage/>}/>
        <Route path= '/category/:prds/:id' element={<ProductDetailPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='*' element={<>This is 404</>}/>
    </Routes>
    </>
  )
}

export default Navbar