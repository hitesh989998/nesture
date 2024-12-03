import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { AddToCart,RemoveFromCart,EditQuantity,ClearCart } from '../Redux/AddtoCartSlice';
import { TbShoppingBagExclamation } from "react-icons/tb";
import { TbShoppingBagPlus } from "react-icons/tb";
import { TbShoppingBagMinus } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineDeleteForever } from "react-icons/md";




const CartPage = () => {
  let cartitems = useSelector((state) => state.cart.items)
  let productdisplay= useSelector((state)=>state.navProdMenu.value)
  let carttotalitems = useSelector((state) => state.cart.totalItems)
  let carttotalPrice = useSelector((state) => state.cart.totalPrice)
  let dispatch = useDispatch()

  let discountChecker= productdisplay.filter((items)=>items.discount)

  return (
    <div className='relative pb-20'>
      {cartitems.length==0?<div className='flex items-center flex-col gap-2 -mb-20'><TbShoppingBagExclamation className='text-5xl' /><h2>Your Cart is empty!</h2></div>:
      <div className='rounded-3xl flex flex-col items-center w-full px-1 relative min-h-44 max-h-96 overflow-y-auto'>
        {cartitems.map((items)=>{return <div className="relative hover:bg-[#F6F6F6] w-full h-36 rounded-2xl flex gap-1" key={items.id}><img className='h-36 w-36 p-2 rounded-2xl' src={items.image_url} alt={items.name} /><div className='p-1'><h2 className='font-semibold'>{items.name}</h2><h2 className='w-72 text-sm'>{items.description}</h2><h4 className='text-sm font-medium'>Qty:{items.quantity}</h4></div>
        {items.discount?<div className=''><span className='line-through absolute left-[153px] text-base bottom-1'>Rs{items.price}</span>
        <span className='font-bold absolute left-[210px] bottom-1'>Now at Rs{Math.floor(items.price - (items.price * items.discount) / 100)}</span>
        <div className='text-[#009b7e] font-extrabold p-1'>{items.discount}% Off</div></div> : <div className='absolute left-[153px] text-base bottom-1 font-bold'>Rs{items.price}</div>}
      
        <div className='absolute ml-56 top-3/4 text-xl flex right-2'><button className="bg-[#8FDAC5] hover:bg-[#009b7e] hover:text-white rounded p-1 m-0.5" onClick={() => {dispatch(EditQuantity({ item: items, quantityChange: 1 }))}}><TbShoppingBagPlus /></button>
      <button className="bg-[#F6F6F6] hover:bg-[#E3E6EA] hover:text-white rounded p-1 m-0.5" onClick={() => {dispatch(EditQuantity({ item: items, quantityChange: -1 }))}}><TbShoppingBagMinus /></button>
      <button className='text-red-400 hover:bg-red-600 hover:text-white rounded' onClick={() => {dispatch(RemoveFromCart(items)) }}><AiOutlineDelete /></button></div>
      </div>
      
    
    })}
       </div>}
   {cartitems.length>0 && <div><button className='absolute bottom-0 left-0 flex items-center gap-1 bg-red-600 hover:bg-red-700 hover:text-white text-white px-5 h-10 w-30 rounded-2xl' onClick={()=>{dispatch(ClearCart())}}><MdOutlineDeleteForever className='text-xl' />Clear Cart</button><div className='absolute bottom-0 right-0'><h3 className='font-medium'>Total Items: {carttotalitems}</h3>
       <h3 className='font-bold'>Total Price: {carttotalPrice}</h3></div></div>}
    </div>
  )
}

export default CartPage