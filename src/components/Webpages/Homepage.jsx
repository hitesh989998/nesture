import React from "react";
import SliderHomepage from "../Functionality/sliderHomepage";
import NavbarButtons from "../Functionality/NavbarButtons";
import { Link } from "react-router-dom";
import { TbShoppingBagPlus } from "react-icons/tb";
import { AddToCart} from '../Redux/AddtoCartSlice';
import { useSelector,useDispatch } from 'react-redux'
import { RiTwitterXFill,RiInstagramLine,RiFacebookFill,RiPinterestLine } from "react-icons/ri";




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

        <footer className="flex h-28 bottom-1 w-full">
          <section className="relative bg-[#F6F6F6] "><img src="\nesture-tr-main.png" alt="nesture" className="" /></section>
          <section className="flex justify-items-center"><ul className="text-[#5A5F6A] flex gap-2 tracking-wide">
            <li className="hover:text-[#009b7e] flex items-center gap-1">
             <Link to="/">Homepage</Link>
            </li>
            <li className="hover:text-[#009b7e] flex items-center gap-1">
             <Link to="//about-us">About Us</Link>
            </li>
            <li className="hover:text-[#009b7e] flex items-center gap-1">
            <Link to="/contact-us">Contact Us</Link>
            </li>
            <li className="hover:text-[#009b7e] flex items-center gap-1">
           <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="hover:text-[#009b7e] flex items-center gap-1">
             <Link to="/terms-of-use">Terms of Use</Link>
            </li>
            <li className="hover:text-[#009b7e] flex items-center gap-1">
            <Link to="/sitemap.xml">Sitemap</Link>
            </li>
          </ul></section>
          <section className="flex text-xl bg-white gap-2 items-center justify-center">
          <RiFacebookFill className=" hover:bg-[#009b7e] p-2 hover:text-white rounded-full h-10 w-10"/>
          <RiTwitterXFill className=" hover:bg-[#009b7e] p-2 hover:text-white rounded-full h-10 w-10"/>
          <RiInstagramLine className=" hover:bg-[#009b7e] p-2 hover:text-white rounded-full h-10 w-10"/>
          <RiPinterestLine className=" hover:bg-[#009b7e] p-2 hover:text-white rounded-full h-10 w-10"/>
          </section>

          <section className="bottom-0">© 2024 | MERN Stack Project by Hitesh</section>

        </footer>
  </>;
};

export default Homepage;
