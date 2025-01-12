/* eslint-disable complexity */
/* eslint-disable eqeqeq */
import { TbShoppingBag, TbUserCircle } from 'react-icons/tb';
import { useState } from 'react';
import SearchBar from '../Search/Sorting/SearchBar';
import { Link } from 'react-router-dom';

import CartPage from '../Cart/CartPage';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoIosSearch } from 'react-icons/io';
import { RiUserSmileLine } from 'react-icons/ri';
import { CiLogin } from 'react-icons/ci';
import NavbarButtons from './NavbarButtons';
import { MdOutlineCloseFullscreen } from 'react-icons/md';

import { toast } from 'react-toastify';
import CreateAccount from '../LoggedInUserPages/CreateAccount';
import LoginAccount from '../LoggedInUserPages/LoginAccount';

import { useSelector } from 'react-redux';
import { LuLayoutDashboard } from 'react-icons/lu';
import { IoLogoTableau } from 'react-icons/io5';

const Navbar = () => {
  const [isHover, changeHoverState] = useState(false);
  const [isHoverCart, changeHoverStateCart] = useState(false);
  const [hamburger, setHamburger] = useState('hidden');
  const [loginVisiblity, setloginVisiblity] = useState('hidden');
  const [createAccountVisiblity, setcreateAccountVisiblity] = useState(true);

  const [isSearchVisible, setSearchVisible] = useState(false);

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
    changeHoverStateCart(!isHoverCart);
  };

  const handleClickProfile = () => {
    setClicked(!clicked);
    changeHoverState(!isHover);
  };

  const handleVisibilityToggle = () => {
    setSearchVisible(!isSearchVisible);
  };

  const userLoginStatus = useSelector((state) => state.auth.user);

  let handleVisiblity = () => {
    if (hamburger == 'hidden') {
      setHamburger('flex');
    } else {
      setHamburger('hidden');
    }
  };

  let autoClose = (e) => {
    if (
      e.target.tagName === 'BUTTON' ||
      e.target.tagName === 'A' ||
      e.target.tagName === 'H2' ||
      e.target.tagName == 'path'
    ) {
      setHamburger('hidden');
    }
  };

  let loginScreen = () => {
    setloginVisiblity('flex');
  };

  return (
    <>
      <div
        className={`w-full h-full ${hamburger} top-0 fixed z-50`}
        onClick={autoClose}
      >
        <button
          onClick={handleVisiblity}
          className="flex items-center bg-[#009b7e] text-white font-semibold px-6 py-3 ml-1 rounded-lg my-1  hover:bg-[#00765e] shadow-md"
        >
          <MdOutlineCloseFullscreen className="mr-2 text-2xl" /> Close
        </button>

        <div className=" w-auto lg:w-3/6 h-full bg-[#E3E6EA] shadow-lg flex flex-col justify-center p-8 gap-10 space-y-3">
          <div>
            <h3 className="text-[#5A5F6A] text-3xl">Category</h3>
            <NavbarButtons classNameChild="flex-col text-[#5A5F6A] hover:bg-[#00765e] hover:text-white font-medium  tracking-wide flex gap-4 text-xs mx-2 my-2 lg:hidden " />
            <NavbarButtons classNameChild="flex-col text-[#5A5F6A] hover:bg-[#00765e] hover:text-white font-medium  tracking-wide flex gap-4 text-lg mx-2 my-1 hidden lg:block " />
          </div>

          <div className="w-[500px] space-y-3 lg:w-fit">
            <h3 className="text-[#5A5F6A] text-3xl">Cart</h3>
            <CartPage />
          </div>
        </div>

        <div className=" w-2/3 lg:w-1/3 h-full bg-white shadow-lg flex flex-col justify-center p-8 space-y-3">
          <h3 className="text-[#5A5F6A] text-3xl">Index</h3>
          <ul className="text-[#5A5F6A] font-medium text-xl space-y-1 tracking-wide">
            <li className="hover:text-[#009b7e] flex items-center gap-1">
              <Link to="/">Homepage</Link>
            </li>
            <li className="hover:text-[#009b7e] flex items-center gap-1">
              <Link to="/about-us">About Us</Link>
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
      <nav className="h-20 w-full flex items-center px-6 fixed top-0 bg-white z-10 lg:h-20 lg:w-full">
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
            <IoIosSearch className="text-2xl absolute top-2 left-44 lg:left-72" />
            {isSearchVisible && (
              <div className="absolute top-12 left-0 w-full">
                <SearchBar />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-1 justify-center mr-1 lg:mr-12">
          <Link to="/">
            <img src="/nesture-tr-main.png" className="h-20 w-auto p-3"></img>
          </Link>
        </div>

        <div
          className=" p-3 m-2  rounded"
          onMouseOver={() => !clicked && changeHoverStateCart(true)}
          onMouseLeave={() => !clicked && changeHoverStateCart(false)}
          onClick={handleClick}
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
          onMouseOver={() => !clicked && changeHoverState(true)}
          onMouseLeave={() => !clicked && changeHoverState(false)}
          onClick={handleClickProfile}
        >
          {userLoginStatus ? (
            <section>
              <img
                src={userLoginStatus.profilePicture}
                onError={(e) => (e.target.src = '/defaultpicture.jpg')}
                className="absolute text-2xl h-10 w-10 text-white p-[1px] bg-[#E3E6EA] rounded-full right-32 mr-[2px] top-0.5"
              />
              <div className="py-1">
                <h3 className="text-sm font-medium pl-1">
                  Welcome,{userLoginStatus.username}!
                </h3>
                <h4 className="text-xs pl-1">Access your account</h4>
              </div>
            </section>
          ) : (
            <section>
              <TbUserCircle className="absolute text-2xl h-10 w-10 text-white p-1 bg-[#E3E6EA] rounded-full right-32 mr-[1px] top-0.5" />
              <div className="py-1">
                <h3 className="text-sm font-medium pl-1">Welcome, Guest!</h3>
                <h4 className="text-xs pl-1">Access your account</h4>
              </div>
            </section>
          )}

          {isHover && !userLoginStatus && (
            <section>
              <div className="absolute flex flex-col items-center left-0 bg-opacity-10 backdrop-blur-lg  bg-white h-38 w-38 shadow-sm rounded-2xl p-5 m-1.5 text-black">
                <RiUserSmileLine className="text-4xl text-[#00765e]" />
                <h3 className="text-lg font-semibold">User Account</h3>
                <h4 className="text-sm text-center">
                  Access your Nesture account
                </h4>
                <button
                  className="bg-[#00765e] hover:bg-[#6ABBA5] hover:text-white rounded-2xl p-2 mt-3 text-white flex text-base items-center"
                  onClick={() => {
                    loginScreen();
                    toast(
                      `To skip account creation, kindly use Username-123 and Password-123`
                    );
                  }}
                >
                  Login
                  <CiLogin className="text-xl" />
                </button>
              </div>
            </section>
          )}
          {isHover && userLoginStatus && (
            <section>
              <div className="absolute flex flex-col items-center left-0 bg-opacity-10 backdrop-blur-lg  bg-white h-38 w-38 shadow-sm rounded-2xl p-5 m-1.5 text-black">
                <LuLayoutDashboard className="text-4xl text-[#00765e]" />
                <h3 className="text-lg font-semibold"></h3>
                <h4 className="text-sm text-center">Access your Dashboard</h4>
                <Link
                  to={
                    userLoginStatus.role === 'administrator'
                      ? '/admin/dashboard'
                      : '/user/dashboard'
                  }
                >
                  <button className="bg-[#00765e] hover:bg-[#6ABBA5] hover:text-white rounded-2xl p-2 mt-3 text-white flex text-base items-center">
                    Explore
                    <IoLogoTableau className="text-xl p-[1px] ml-[2px]" />
                  </button>
                </Link>
              </div>
            </section>
          )}
        </div>
      </nav>
      <div
        className={`w-full h-full ${loginVisiblity} top-0 fixed z-50 bg-opacity-10 backdrop-blur-lg bg-white items-center justify-center`}
        onClick={autoClose}
      >
        <section className="bg-white shadow-lg rounded-3xl flex flex-col items-center justify-center h-96 w-96 p-8 relative">
          <form>
            <button onClick={autoClose} title="Close">
              <MdOutlineCloseFullscreen className="text-2xl text-[#E3E6EA] absolute top-0 left-0 m-4 hover:text-red-700 " />
            </button>
          </form>

          <img
            className="h-20 top-8 mx-auto absolute"
            src="/nesture-tr-main.png"
            alt="nesture logo"
          />

          <div className="absolute top-28">
            {createAccountVisiblity ? (
              <h4 className="text-gray-800 text-lg mb-4 text-center">
                New user?{' '}
                <button
                  onClick={() => {
                    setcreateAccountVisiblity(false);
                  }}
                  className="text-[#00765e] text-lg hover:underline ml-1"
                >
                  Sign up here.
                </button>
              </h4>
            ) : (
              <h4 className="text-gray-800 text-lg mb-4 text-center">
                Create your Account.
                <button
                  onClick={() => {
                    setcreateAccountVisiblity(true);
                  }}
                  className="text-[#00765e] text-lg hover:underline ml-1"
                >
                  Back to login?
                </button>
              </h4>
            )}
          </div>

          {createAccountVisiblity ? (
            <LoginAccount newstate={setloginVisiblity} />
          ) : (
            <CreateAccount state={setcreateAccountVisiblity} />
          )}
        </section>
      </div>
    </>
  );
};

export default Navbar;
