import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import ProdDisplay from './ProdDisplay'

const CategoryPage = () => {
    const stateofstore = useSelector((state)=> state.navProdMenu.value)
    const {prds} = useParams()
    console.log(stateofstore.map(i=>i.name))
    console.log('this is prds', prds)

    const newfilter = stateofstore.filter(items=>items.category==prds)
    console.log('newfilter is here', newfilter)


const handleClick =(items,discount)=>{
  //

  ///

  
  console.log('button clicked', items, discount)
}

  return (
    <>
    <div>My Category Page</div>
    {newfilter.map((items)=>{
        return <ProdDisplay key= {items.id} name={items.name} id={items.id} description={items.description} image_url={items.image_url} price={items.price} category={items.category}/>
})}

<div>
  <div>
    <div>Discount</div>
    <div>{['10% Off or More','20% Off or More','30% Off or More','40% Off or More','50% Off or More'].map((items)=>{
      return <button key={items} onClick={()=>handleClick(items,"discount")}>{items}</button>})}
    </div>

    <div>Price</div>
    <div>{['Under ₹500','₹500 - ₹1,000','₹1,000 - ₹2,000','₹2,000 - ₹3,000','Over ₹3,000'].map((items)=>{
      return <button key={items} onClick={()=>handleClick(items,"price")}>{items}</button>})}
    </div>

    <div>Sort by</div>
    <div>{['Popularity','Price -- Low to High','Price -- High to Low','Newest First'].map((items)=>{
      return <button key={items} onClick={()=>handleClick(items,"sort")}>{items}</button>})}
    </div>
  
  
  </div>
</div>

    </>
  )
}

export default CategoryPage