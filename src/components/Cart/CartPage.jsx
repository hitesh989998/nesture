import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { AddToCart,RemoveFromCart,EditQuantity,ClearCart } from '../Redux/AddtoCartSlice';


const CartPage = () => {
  let cartitems = useSelector((state) => state.cart.items)
  let carttotalitems = useSelector((state) => state.cart.totalItems)
  let carttotalPrice = useSelector((state) => state.cart.totalPrice)
  let dispatch = useDispatch()

  return (
    <div>
      {cartitems.length==0?<h2>Your Cart is empty</h2>:
      <div>
        {cartitems.map((items)=>{return <div key={items.id}><h2>{items.name}</h2><h2>{items.description}</h2>
        {items.discount?<div><div className='line-through	'>{items.price}</div>
        Now at {Math.floor(items.price - (items.price * items.discount) / 100)}
        <div>{items.discount}% Off</div></div> : <div>{items.price}</div>}
      
      <button onClick={()=>{dispatch(AddToCart(items))}}>Add to Cart</button>
      <button onClick={() => {dispatch(RemoveFromCart(items)) }}>Remove From Cart</button>
      <button onClick={() => {dispatch(EditQuantity({ id: items.id, quantityChange: 1 }))}}>+Edit Quantity</button>
      <button onClick={() => {dispatch(EditQuantity({ id: items.id, quantityChange: -1 }))}}>-Edit Quantity</button>
      </div>})}
      <h3>Total Items: {carttotalitems}</h3>
        <h3>Total Price: {carttotalPrice}</h3>
       </div>}
      
    </div>
  )
}

export default CartPage