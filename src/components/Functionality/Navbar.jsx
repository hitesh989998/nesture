import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from '../Webpages/Homepage'
import AboutUs from '../Webpages/AboutUs'
import ContactUs from '../Webpages/ContactUs'
import { CiUser,CiShoppingCart } from "react-icons/ci";
import { useState } from 'react'

import SearchBar from '../Search/Sorting/SearchBar'

import CategoryPage from '../Products/CategoryPage'
import ProductDetailPage from '../Products/ProductDetailPage'
import CartPage from '../Cart/CartPage'

const Navbar = () => {

  const [isHover, changeHoverState]= useState(false)
  const [isHoverCart, changeHoverStateCart]= useState(false)


  return (
    <> <nav className='shadow-md h-20 w-full flex '>
      <img src='/nesture-tr-main.png' className='p-3'></img>      
      <SearchBar />

      <div className='relative p-3 m-2 hover:bg-[#009b7e] rounded' onMouseOver={()=>changeHoverState(true)} onMouseLeave={()=>changeHoverState(false)}>
      <CiUser />
      Profile

      {isHover && <div className='absolute left-0 h-auto bg-whiteh-14 w-28 shadow-sm rounded p-5 m-2'>
        <h3>Hello User</h3>
        <h4>To access your Nesture account</h4>
        <button>Sign up</button>
        </div>}

       </div>
       

       <div className='relative p-3 m-2 hover:bg-[#009b7e] rounded' onMouseOver={()=>changeHoverStateCart(true)} onMouseLeave={()=>changeHoverStateCart(false)}>
       <CiShoppingCart />
       Cart

       {isHoverCart && <div className='absolute left-0 h-auto bg-whiteh-14 w-28 shadow-sm rounded p-5 m-2'>
       <CartPage/>
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