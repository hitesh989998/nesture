import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { CreateUser } from '../Redux/CreateAccountSlice';

const CreateAccount = ({state}) => {
    let [localStore, setlocalStore] = useState({
        uname: '',
        pswd: '',
        cpswd: '',
    });

    let dispatch = useDispatch();
    let handleinput = (e) => {
        let {name,value} = e.target

        setlocalStore((prev)=>{
        return {...prev, [name]: value}
        })
        
    }
    let logincheck = ()=>{
        if(localStore.pswd===localStore.cpswd){
          dispatch(CreateUser(localStore))
          console.log('login is successful.')
        }

        return toast('Passwords do not match')

    }
  return (
    <>
    <div className='mt-28'>
    <main className='space-y-3'> 
    <input type="text" required placeholder='Enter your Name' name='name' className='w-full bg-white border border-gray-300 text-gray-900 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#00765e] focus:border-transparent'/>
    <input type="password" required placeholder='Enter your Password ' name='pswd'onChange={handleinput} className='w-full bg-white border border-gray-300 text-gray-900 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#00765e] focus:border-transparent'/>
    <input type="password" required placeholder='Re-enter your Password' name='cpswd' onChange={handleinput} className='w-full bg-white border border-gray-300 text-gray-900 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#00765e] focus:border-transparent'/>
    <button onClick={()=>{logincheck()}} className='w-full bg-[#00765e] text-white rounded-3xl py-2 font-semibold text-lg hover:bg-[#005c4a] transition duration-200'>Submit</button>
    </main>
    </div>
    </>
  )
}

export default CreateAccount