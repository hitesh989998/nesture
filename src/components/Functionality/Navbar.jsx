import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "../Webpages/Homepage";
import AboutUs from "../Webpages/AboutUs";
import ContactUs from "../Webpages/ContactUs";
import { CiUser } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import { useState } from "react";
import SearchBar from "../Search/Sorting/SearchBar";
import { Link } from "react-router-dom";

import CategoryPage from "../Products/CategoryPage";
import ProductDetailPage from "../Products/ProductDetailPage";
import CartPage from "../Cart/CartPage";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { TbUserCircle } from "react-icons/tb";
import { RiUserSmileLine } from "react-icons/ri";
import { CiLogin } from "react-icons/ci";
import NavbarButtons from "./NavbarButtons";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import PrivacyPolicy from "../Webpages/PrivacyPolicy";
import TermsOfUse from "../Webpages/TermsOfUse";
import AllProductsPage from "../Products/AllProductsPage";


const Navbar = () => {
  const [isHover, changeHoverState] = useState(false);
  const [isHoverCart, changeHoverStateCart] = useState(false);
  const [hamburger, setHamburger] = useState("hidden");

  let handleVisiblity = () => {
    if (hamburger == "hidden") {
      setHamburger("flex");
    } else {
      setHamburger("hidden");
    }
  };

  let autoClose = (e) => {
    if(e.target.tagName === 'BUTTON' || e.target.tagName === 'A' ||e.target.tagName === 'H2'){
      setHamburger("hidden");
    }    
  };

  return (
    <>
      <div className={`w-screen h-screen ${hamburger} top-0 fixed z-50`} onClick={autoClose}>
        <button
          onClick={handleVisiblity}
          className="flex items-center bg-[#009b7e] text-white font-semibold px-6 py-3 ml-1 rounded-lg my-1  hover:bg-[#00765e] shadow-md"
        >
          <MdOutlineCloseFullscreen className="mr-2 text-2xl" /> Close
        </button>

        <div className="w-3/6 h-full bg-[#E3E6EA] shadow-lg flex flex-col justify-center p-8 gap-10 space-y-3">
          <div>
            <h3 className="text-[#5A5F6A] text-3xl">Category</h3>
            <NavbarButtons className="flex flex-col gap-4 text-[#5A5F6A] hover:bg-[#00765e] hover:text-white font-medium text-lg tracking-wide" />
          </div>

          <div className="w-fit space-y-3 ">
            <h3 className="text-[#5A5F6A] text-3xl">Cart</h3>
              <CartPage />
          </div>
        </div>

        <div className="w-1/3 h-full bg-white shadow-lg flex flex-col justify-center p-8 space-y-3">
          <h3 className="text-[#5A5F6A] text-3xl">Index</h3>
          <ul className="text-[#5A5F6A] font-medium text-xl space-y-1 tracking-wide">
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
          </ul>
        </div>

        <div className="w-1/3 h-full shadow-lg flex items-center justify-center relative">
          <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-lg z-0"></div>
          <img
            src="/2upscaled.png"
            alt="Logo"
            className="relative w-3/4 h-3/4 object-contain drop-shadow-2xl z-10"
          />
        </div>
      </div>
      <nav className=" h-20 w-full flex items-center px-6 fixed top-0 bg-white z-10">
        <div className="flex gap-4">
          <button
            className="flex bg-[#F6F6F6] hover:bg-[#00765e] hover:text-white px-5 h-10 w-30 items-center gap-1 rounded-xl"
            onClick={handleVisiblity}
          >
            <HiOutlineMenuAlt2 />
            Menu
          </button>
          <div className="relative">
            <SearchBar />
            <IoIosSearch className="text-2xl absolute top-2 left-72" />
          </div>
        </div>

        <div className="flex flex-1 justify-center mr-12">
          <Link to="/">
            <img src="/nesture-tr-main.png" className="h-20 w-auto p-3"></img>
          </Link>
        </div>

        <div
          className=" p-3 m-2  rounded"
          onMouseOver={() => changeHoverStateCart(true)}
          onMouseLeave={() => changeHoverStateCart(false)}
        >
          <TbShoppingBag className="relative -mr-4 hover:bg-[#00765e] hover:text-white text-2xl bg-[#8FDAC5] h-10 w-10 p-2 rounded-full" />

          {isHoverCart && (
            <div className="absolute right-32 top-16 h-auto w-30 bg-white bg-opacity-10 backdrop-blur-lg overflow-y-auto shadow-lg rounded-3xl p-5 m-2">
              <CartPage />
            </div>
          )}
        </div>

        <div
          className="relative m-2 hover:bg-[#00765e] hover:text-white rounded-3xl  px-5 pl-10 h-15 w-30"
          onMouseOver={() => changeHoverState(true)}
          onMouseLeave={() => changeHoverState(false)}
        >
          <TbUserCircle className="absolute text-2xl h-10 w-10 text-white p-1 bg-[#E3E6EA] rounded-full right-32 mr-[1px] top-0.5" />
          <div className="py-1">
            <h3 className="text-sm font-medium pl-1">Welcome, Guest!</h3>
            <h4 className="text-xs pl-1">Access your account</h4>
          </div>

          {isHover && (
            <div className="absolute flex flex-col items-center left-0 bg-opacity-10 backdrop-blur-lg  bg-white h-38 w-38 shadow-sm rounded-2xl p-5 m-1.5 text-black">
              <RiUserSmileLine className="text-4xl text-[#00765e]" />
              <h3 className="text-lg font-semibold">User Account</h3>
              <h4 className="text-sm text-center">
                Access your Nesture account
              </h4>
              <button className="bg-[#00765e] hover:bg-[#6ABBA5] hover:text-white rounded-2xl p-2 mt-3 text-white flex text-base items-center">
                Login
                <CiLogin className="text-xl" />
              </button>
            </div>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/sitemap.xml"/>
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/category/:prds" element={<CategoryPage />} />
        <Route path="/all-products" element={<AllProductsPage/>} />
        <Route path="/category/:prds/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<>This is 404</>} />
      </Routes>
    </>
  );
};

export default Navbar;
