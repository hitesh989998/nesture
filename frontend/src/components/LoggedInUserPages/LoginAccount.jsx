import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { AuthenticateUser } from "../Redux/AuthenticationSlice";

const LoginAccount = ({newstate}) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let [state, setstate] = useState({
    username: "",
    password: "",
  }); 
 
  let handleChange = (e)=>{
    let {name,value}= e.target 

    setstate((prev)=>{console.log(prev,'prev')
      return {...prev, [name]:value}
    })
  }

  let onSubmitHandler = async (e)=>{
    e.preventDefault();
   let results = await dispatch(AuthenticateUser(state));
   if (results.payload.message =='Login successful'){
    newstate("hidden")
    return navigate('/')
   }
  }

  return (
    <section className="flex justify-center items-center min-h-screen p-5 mt-28">
      <div className="">
        <form className="">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full bg-white border border-gray-300 rounded-lg py-2 px-4 text-gray-900 mb-4 focus:outline-none focus:ring-2 focus:ring-[#00765e] focus:border-transparent"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full bg-white border border-gray-300 rounded-lg py-2 px-4 text-gray-900 mb-4 focus:outline-none focus:ring-2 focus:ring-[#00765e] focus:border-transparent"
            onChange={handleChange}
          />
          <button
            onClick={onSubmitHandler}
            type="submit"
            className="w-full bg-[#00765e] text-white rounded-full py-2 font-semibold text-lg hover:bg-[#005c4a]"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginAccount;
