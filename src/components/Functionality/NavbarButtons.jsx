import React from 'react'
import { useDispatch } from 'react-redux'
import { openpage } from '../Redux/navProdSlice'
import { Link } from 'react-router-dom'


const NavbarButtons = () => {
    const prodbuttons= ['Sustainable Clothing','Eco-Friendly Accessories','Organic Skincare','Reusable Home Essentials','Eco-Activewear','Handcrafted Decor','Natural Wellness Products']
    const dispatch = useDispatch()

  return (
    <><div>
        {prodbuttons.map((items,index)=>{
            
            return (
            <Link to={`/category/${items}`}>
            <button key={index} onClick={()=>dispatch(openpage(items))} className='bg-white rounded-2xl p-4 m-4 border-2 border-green-300 hover:bg-green-300 hover:text-white text-green-300'>{items}</button>
            </Link>
        )})}
    </div>
    </>
  )
}

export default NavbarButtons