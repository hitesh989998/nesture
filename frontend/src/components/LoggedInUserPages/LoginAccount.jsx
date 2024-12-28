import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AuthenticateUser } from '../Redux/AuthenticationSlice'

const LoginAccount = () => {
    let dispatch = useDispatch()

    let [state, setstate] = useState({
      usname: "",
      pswd: "",
    })

  return (
    <section className="flex justify-center items-center min-h-screen p-5 mt-28">
<div className="">
  <form className="">
    
    <input
      type="text"
      name="usname"
      placeholder="Username"
      className="w-full bg-white border border-gray-300 rounded-lg py-2 px-4 text-gray-900 mb-4 focus:outline-none focus:ring-2 focus:ring-[#00765e] focus:border-transparent"
      onChange={(e)=>setstate({...state, usname: e.target.value})}
    />
    <input
      type="password"
      name="pswd"
      placeholder="Password"
      className="w-full bg-white border border-gray-300 rounded-lg py-2 px-4 text-gray-900 mb-4 focus:outline-none focus:ring-2 focus:ring-[#00765e] focus:border-transparent"
      onChange={(e)=>setstate({...state, pswd: e.target.value})}
    />
    <button onClick={(e)=> {e.preventDefault(); dispatch(AuthenticateUser(state))}}
      type="submit"
      className="w-full bg-[#00765e] text-white rounded-full py-2 font-semibold text-lg hover:bg-[#005c4a]"
    >
      Login
    </button>
  </form>
  
</div>
</section>
  )
}



export default LoginAccount