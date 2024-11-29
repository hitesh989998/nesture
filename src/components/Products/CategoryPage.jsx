import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import ProdDisplay from './ProdDisplay'

const CategoryPage = () => {

    const stateofstore = useSelector((state)=> state.navProdMenu.value)
    const {prds} = useParams()

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
  'Over ₹3,000':items=>items.price>=3000,
  'Price -- Low to High':items=>items.sort((a,b)=>a.price-b.price),
  'Price -- High to Low':items=>items.sort((a,b)=>b.price-a.price),
  'Newest First':items=>items.sort((a,b)=>b.id-a.id)
}

const handleClick =(items)=>{
  let tempstore= newfilter.filter(setConditions[items])
  setitemsdisplay(tempstore)
}

  return (
    <>
    <div>My Category Page</div>
    {itemsdisplay.map((items)=>{
        return <ProdDisplay key= {items.id} name={items.name} id={items.id} description={items.description} image_url={items.image_url} price={items.price} category={items.category}/>
})}

<div>
  <div>
    <div>Discount</div>
    <div>{['10% Off or More','20% Off or More','30% Off or More','40% Off or More','50% Off or More'].map((items)=>{
      return <button key={items} onClick={()=>handleClick(items)}>{items}</button>})}
    </div>

    <div>Price</div>
    <div>{['Under ₹500','₹500 - ₹1,000','₹1,000 - ₹2,000','₹2,000 - ₹3,000','Over ₹3,000'].map((items)=>{
      return <button key={items} onClick={()=>handleClick(items)}>{items}</button>})}
    </div>

    <div>Sort by</div>
    <div>{['Price -- Low to High','Price -- High to Low','Newest First'].map((items)=>{
      return <button key={items} onClick={()=>handleClick(items)}>{items}</button>})}
    </div>

    <button onClick={()=>{setitemsdisplay(newfilter)}}>Clear All Filters</button>
  
  </div>
</div>

    </>
  )
}

export default CategoryPage