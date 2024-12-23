import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import ProdDisplay from './ProdDisplay'
import { Link } from "react-router-dom";
import { TbShoppingBagPlus } from "react-icons/tb";
import { AddToCart} from '../Redux/AddtoCartSlice';




const CategoryPage = () => {

    const stateofstore = useSelector((state)=> state.navProdMenu.value)
    const {prds} = useParams()
      let dispatch = useDispatch()
    

    let newfilter = stateofstore.filter(items=>items.category==prds)
    let [itemsdisplay, setitemsdisplay]= useState(newfilter)


let setConditions ={
  '10% Off or More':items=>items.discount>=10,
  '20% Off or More':items=>items.discount>=20,
  '30% Off or More':items=>items.discount>=30,
  '40% Off or More':items=>items.discount>=40,
  '50% Off or More':items=>items.discount>=50,
  'Under ₹500':items=>items.price<=500,
  '₹500 - ₹1,000':items=>items.price>=500 && items.price<1000,
  '₹1,000 - ₹2,000':items=>items.price>=500 && items.price<1000,
  '₹2,000 - ₹3,000':items=>items.price>=500 && items.price<1000,
  'Over ₹3,000':items=>items.price>=3000
}

const handleClick =(items)=>{
  let tempstore= newfilter.filter(setConditions[items])
  setitemsdisplay(tempstore)
}

let sortConditions = {
  'Price -- Low to High':(a,b)=>a.price-b.price,
  'Price -- High to Low':(a,b)=>b.price-a.price,
  'Newest First':(a,b)=>b.id-a.id
}

let sortConditionsHandler = (items)=>{

 let tempstore= newfilter.sort(sortConditions[items])
  setitemsdisplay(tempstore)
}

  return (
    <> <div className='flex w-full flex-col overflow-hidden relative top-20 mb-64'>

<header className="relative h-72 w-[97%] flex items-center justify-center shadow-md rounded-3xl mx-auto pl-20 ">
        <h1 className='text-[#E3E6EA] bg-clip-text text-transparent bg-cover bg-center text-7xl font-bold tracking-wide p-3 'style={{backgroundImage: `url('/${prds}.jpg')`}}>{prds}</h1>
      </header> 

    <main className='flex'>
    

      <aside className='relative w-1/4 left-2'>
<div className='w-80 m-5 h-10'>
  <div className='flex flex-col gap-5 bg-[#E3E6EA] rounded-2xl shadow-lg '>
    <div className='text-lg p-3 -mb-5'>Discount</div>
    <div className='flex flex-wrap gap-2 m-1'>{['10% Off or More','20% Off or More','30% Off or More','40% Off or More','50% Off or More'].map((items)=>{
      return <button className='p-2 mx-1 bg-[#009b7e] hover:bg-[#00765e] text-white rounded-3xl text-sm' key={items} onClick={()=>handleClick(items)}>{items}</button>})}
    </div>

    <div className='text-lg p-3 -mb-5'>Price</div>
    <div className='flex flex-col items-start gap-1 ml-3'>{['Under ₹500','₹500 - ₹1,000','₹1,000 - ₹2,000','₹2,000 - ₹3,000','Over ₹3,000'].map((items)=>{
      return <button className='hover:text-[#009b7e]' key={items} onClick={()=>handleClick(items)}>{items}</button>})}
    </div>

    <div className='text-lg p-3 -mb-5 '>Sort by</div>
    <div className='flex flex-col items-start gap-1 ml-3'>{['Price -- Low to High','Price -- High to Low','Newest First'].map((items)=>{
      return <button className='hover:text-[#009b7e]' key={items} onClick={()=>sortConditionsHandler(items)}>{items}</button>})}
    </div>

    <button className='text-white p-2 m-1 hover:bg-[#00765e] hover:text-white rounded-2xl bg-[#009b7e]' onClick={()=>{setitemsdisplay(newfilter)}}>Clear All Filters</button>
  
  </div>
</div>
</aside>


      <section className='relative flex items-center flex-wrap gap-6 m-5'>
      {itemsdisplay.map((item)=>{return <Link key={item.id} to={`/category/${item.category}/${item.id}`}> <div key={item.id} className="bg-[#E3E6EA] shadow-lg group rounded-3xl overflow-hidden w-full flex flex-col items-center">
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
            </div></Link>})}
          
        </section>           
            
      </main>
</div>
    </>
  )
}

export default CategoryPage