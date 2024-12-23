import React from "react";
import SliderHomepage from "../Functionality/sliderHomepage";
import NavbarButtons from "../Functionality/NavbarButtons";
import { Link } from "react-router-dom";
import { TbShoppingBagPlus } from "react-icons/tb";
import { AddToCart} from '../Redux/AddtoCartSlice';
import { useSelector,useDispatch } from 'react-redux'




const Homepage = () => {
  let AllProducts= useSelector((state)=>state.navProdMenu.allproducts)
  let dispatch = useDispatch()
  return <>
  <SliderHomepage/> <div className="flex justify-center p-3 "><Link to="/all-products"><button className="bg-[#009b7e] text-white tracking-wide px-[22px] py-3 rounded-3xl mx-1 relative hover:bg-[#00765e] hover:text-white shadow-sm">All Products</button></Link>
  <NavbarButtons className={"bg-[#F6F6F6] tracking-wide px-[11px] py-3 rounded-3xl mx-1 relative hover:bg-[#00765e] hover:text-white shadow-lg"}/>
  </div>
  <div className="flex flex-wrap gap-6 justify-center p-6 min-h-screen">
  {AllProducts.map((item)=>{return <Link key={item.id} to={`/category/${item.category}/${item.id}`}> <div key={item.id} className="bg-[#E3E6EA] shadow-xl group rounded-3xl overflow-hidden w-full flex flex-col items-center">
    <div className="flex justify-between w-full items-center px-3 py-1">
      <div className="">
      <h2 className="font-semibold m-1">{item.name}</h2>
    {item.discount?<div key={item.id} className="flex"><div className="font-light ml-1 text-sm -mt-1">Now at Rs{Math.floor(item.price - (item.price * item.discount) / 100)}</div><div className='line-through font-light	text-sm -mt-1 ml-1'>Rs{item.price}</div>
        </div> : <div className="font-light ml-1 text-sm -mt-1">Rs{item.price}</div>}
      </div>
      <div className="rounded-full bg-white h-10 w-10 flex items-center justify-center hover:bg-[#009b7e] hover:text-white shadow-sm"><button className="" onClick={(e)=>{dispatch(AddToCart(item));e.stopPropagation(); e.preventDefault()}}><TbShoppingBagPlus className="text-lg" /></button></div>
    </div>
    <div className="relative p-[5px]">
    <img className='h-72 w-72 rounded-3xl'src={item.image_url} alt={item.name}></img>
    <div className="bg-black inset-0 absolute opacity-0 group-hover:opacity-80 rounded-3xl">
    {item.discount && <div className="text-[#009b7e] top-0 right-0 font-semibold p-2 mr-1 absolute">{item.discount}% Off</div>}
      <div className="p-5 absolute bottom-0">
        <div className="text-[#009b7e]">{item.category}</div>
      <div className="text-white font-medium">{item.description}</div>
      </div>      
    </div>
    </div>
    
        </div></Link>})}</div>

        <section className="w-full h-[650px] bg-white px-8 -mb-10">
        <div className='h-[550px] w-full rounded-[28px] mt-4 drop-shadow-lg bg-center bg-cover bg-[url(/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV8yOV9waG90b2dyYXBoeV9vZl9hYnN0cmFjdF9kYXJrX3RleHR1cmVfYmFja2dyb182MTM0OWI1ZS1kYzdhLTQ4MTItOGE3MC00OTAwZTNmMjM4ZmVfMS5qcGc.webp)] flex'>  

        <div className="">
          <h3 className="absolute backdrop-blur-lg bg-opacity-90 bg-white rounded-3xl top-1 left-1 p-3 m-3 tracking-wide shadow-lg flex items-center text-lg">Get Your Daily Essentials at <img className ='h-9 w-24 ml-1 mb-[4px]'src="/nesture-tr-main.png" alt="" /></h3>
          
          <div className="absolute bottom-0 right-0 p-3 m-3  h-[8rem] w-[49rem] backdrop-blur-md shadow-lg rounded-3xl tracking-wide bg-white bg-opacity-90">
          <p className="text-base leading-relaxed">Stay cozy and find everything you need right here at Nesture. From sustainable clothing to eco-friendly essentials, we've got you covered—all at the click of a button. Whether you have a question, need advice, or just want to share your thoughts, we’d love to hear from you.  </p>
          <Link to="/about-us">
          <button className="bg-[#00765e] hover:bg-[#009b7e] rounded-2xl my-4 text-white p-2 absolute right-3 mb-8 -bottom-6">Get in Touch</button>
          </Link>
          </div>
        </div>
         </div>
        </section>

       
        
  </>;
};

export default Homepage;
