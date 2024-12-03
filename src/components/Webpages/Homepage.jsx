import React from "react";
import SliderHomepage from "../Functionality/sliderHomepage";
import NavbarButtons from "../Functionality/NavbarButtons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartPage from "../Cart/CartPage";

const Homepage = () => {
  let AllProducts= useSelector((state)=>state.navProdMenu.allproducts)
  return <>
  <SliderHomepage/>
  <NavbarButtons/>
  <div className="flex flex-wrap gap-6 justify-center bg-gray-100 p-6 min-h-screen">
  {AllProducts.map((item)=>{return <Link key={item.id} to={`/category/${item.category}/${item.id}`}> <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden w-72 flex flex-col items-center">
    <img className='h-72 w-72'src={item.image_url}></img>
    <h2>{item.name}</h2>
    <p>{item.description}</p>
    {item.discount?<div key={item.id}><div className='line-through	'>{item.price}</div>
        Now at Rs{Math.floor(item.price - (item.price * item.discount) / 100)}
        <div>{item.discount}% Off</div></div> : <div>Rs{item.price}</div>}
        </div></Link>})}</div>
  <CartPage/>
  </>;
};

export default Homepage;
