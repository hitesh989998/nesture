import React from "react";
import SliderHomepage from "../Functionality/sliderHomepage";
import NavbarButtons from "../Functionality/NavbarButtons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartPage from "../Cart/CartPage";

const Homepage = () => {
  let AllProducts= useSelector((state)=>state.navProdMenu.allproducts)
  return <>
  <SliderHomepage/> <div className="flex justify-center p-3"><Link to="/all-products"><button className="bg-[#009b7e] text-white tracking-wide px-[22px] py-3 rounded-3xl mx-1 relative hover:bg-[#00765e] hover:text-white shadow-sm">All Products</button></Link>
  <NavbarButtons className={"bg-[#F6F6F6] tracking-wide px-[11px] py-3 rounded-3xl mx-1 relative hover:bg-[#00765e] hover:text-white shadow-sm"}/>
  </div>
  <div className="flex flex-wrap gap-6 justify-center p-6 min-h-screen">
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
