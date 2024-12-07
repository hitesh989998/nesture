import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { AddToCart,RemoveFromCart,EditQuantity,ClearCart } from '../Redux/AddtoCartSlice';
import { useParams } from 'react-router';
import CartPage from '../Cart/CartPage';

const ProductDetailPage = () => {
    let dispatch = useDispatch();
    let productdisplay= useSelector((state)=>state.navProdMenu.value)
    let {id}= useParams()

  return (<>
    <div>ProductDetailPage</div>    
    {productdisplay.filter((items)=>items.id==id).map((items)=> {return <div key={items.id}>
    <img src={items.image_url}></img>
      <div>{items.name}</div>
      <div>{items.description}</div>
      <div>{items.category}</div>
      {items.discount?<div><div className='line-through	'>{items.price}</div>
        Now at {Math.floor(items.price - (items.price * items.discount) / 100)}
        <div>{items.discount}% Off</div></div> : <div>{items.price}</div>}

      <button onClick={()=>{dispatch(AddToCart(items))}}>Add to Cart</button>
      <button onClick={() => {dispatch(RemoveFromCart(items)) }}>Remove From Cart</button>
      <button onClick={() => {dispatch(EditQuantity({ item: items, quantityChange: 1, }))}}>+Edit Quantity</button>
      <button onClick={() => {dispatch(EditQuantity({ item: items, quantityChange: -1 }))}}>-Edit Quantity</button>
      <button onClick={()=>{dispatch(ClearCart())}}>ClearCart</button>
      
      </div>})}     
    </>
  )
}

export default ProductDetailPage