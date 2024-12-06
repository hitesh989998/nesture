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
  <SliderHomepage/> <div className="flex justify-center p-3"><Link to="/all-products"><button className="bg-[#009b7e] text-white tracking-wide px-[22px] py-3 rounded-3xl mx-1 relative hover:bg-[#00765e] hover:text-white shadow-sm">All Products</button></Link>
  <NavbarButtons className={"bg-[#F6F6F6] tracking-wide px-[11px] py-3 rounded-3xl mx-1 relative hover:bg-[#00765e] hover:text-white shadow-sm"}/>
  </div>
  <div className="flex flex-wrap gap-6 justify-center p-6 min-h-screen">
  {AllProducts.map((item)=>{return <Link key={item.id} to={`/category/${item.category}/${item.id}`}> <div key={item.id} className="bg-[#E3E6EA] shadow-md rounded-3xl overflow-hidden w-full flex flex-col items-center">
    <div className="flex justify-between w-full items-center px-3 py-1">
      <div className="">
      <h2 className="font-semibold m-1">{item.name}</h2>
    {item.discount?<div key={item.id} className="flex"><div className='line-through font-light	'>{item.price}</div>
        Now at Rs{Math.floor(item.price - (item.price * item.discount) / 100)}
        <div>{item.discount}% Off</div></div> : <div className="font-light ml-1 text-sm -mt-1">Rs{item.price}</div>}
      </div>
      <div className="rounded-full bg-white h-10 w-10 flex items-center justify-center hover:bg-[#009b7e] hover:text-white shadow-sm"><button className="" onClick={(e)=>{dispatch(AddToCart(item));e.stopPropagation(); e.preventDefault()}}><TbShoppingBagPlus className="text-lg" /></button></div>
    </div>
    <img className='h-72 w-72 p-[5px] rounded-3xl'src={item.image_url}></img>
        </div></Link>})}</div>
  </>;
};

export default Homepage;
