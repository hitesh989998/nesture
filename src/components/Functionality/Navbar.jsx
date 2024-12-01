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



const Navbar = () => {

  const [isHover, changeHoverState]= useState(false)
  const [isHoverCart, changeHoverStateCart]= useState(false)

  return (
    <> <nav className='shadow-md h-20 w-full flex '>
      <div className="flex gap-4">
      <button className='flex bg-[#F6F6F6] px-5 h-10 w-30 items-center gap-1 rounded-xl'><HiOutlineMenuAlt2 />Menu</button>
      <div className='relative'><SearchBar/><IoIosSearch className='text-2xl absolute top-2 left-72' />
        </div>
      </div>
      
     <Link to='/'>
      <img src='/nesture-tr-main.png' className='p-3'></img>      
      </Link>

      <div className='relative p-3 m-2 hover:bg-[#009b7e] rounded' onMouseOver={()=>changeHoverStateCart(true)} onMouseLeave={()=>changeHoverStateCart(false)}>
      <IoBagHandleOutline className='text-2xl bg-[#009b7e] text-white h-10 w-10 p-2 rounded-full' />

       {isHoverCart && <div className='absolute left-0 h-auto bg-whiteh-14 w-28 shadow-sm rounded p-5 m-2'>
       <CartPage/>
        </div>}
      </div>



      <div className='relative p-3 m-2 hover:bg-[#009b7e] rounded' onMouseOver={()=>changeHoverState(true)} onMouseLeave={()=>changeHoverState(false)}>
      <CiUser />
      Profile

      {isHover && <div className='absolute left-0 h-auto bg-whiteh-14 w-28 shadow-sm rounded p-5 m-2'>
        <h3>Hello User</h3>
        <h4>To access your Nesture account</h4>
        <button>Sign up</button>
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