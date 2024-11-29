import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { AddToCart,RemoveFromCart,EditQuantity,ClearCart } from '../Redux/AddtoCartSlice';
import { useParams } from 'react-router';
import CartPage from '../Cart/CartPage';

const ProductDetailPage = () => {
    let dispatch = useDispatch();
    let productdisplay= useSelector((state)=>state.navProdMenu.value)
    let {id}= useParams()
    let pdisplay= useSelector((state)=>state.cart?.items || [])
    let ddisplay= useSelector((state)=>state.cart.totalItems)
    let ndisplay= useSelector((state)=>state.cart.totalPrice)
    let sdisplay= useSelector((state)=>state.navProdMenu)

console.log('here shows items in cart', pdisplay)
console.log('here shows totalitems in cart', ddisplay)
console.log('here shows totalPrice in cart', ndisplay)
console.log('state is here navprodmenu',sdisplay)
const [selectedProduct, setSelectedProduct] = useState(null);

useEffect(() => {
  const matchedProduct = productdisplay.find((product) => product.id == id);
  if (matchedProduct) {
    setSelectedProduct(matchedProduct);
  }
}, [id, productdisplay]);

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
      
      </div>})}
      <CartPage/>
      <button onClick={()=>{dispatch(AddToCart(selectedProduct))}}>Add to Cart</button>
      <button onClick={() => {dispatch(RemoveFromCart(selectedProduct)) }}>Remove From Cart</button>
      <button onClick={() => {dispatch(EditQuantity({ item: selectedProduct, quantityChange: 1, }))}}>+Edit Quantity</button>
      <button onClick={() => {dispatch(EditQuantity({ item: selectedProduct, quantityChange: -1 }))}}>-Edit Quantity</button>
      <button onClick={()=>{dispatch(ClearCart())}}>ClearCart</button>
    </>
  )
}

export default ProductDetailPage