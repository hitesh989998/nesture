import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { NextSlide, PrevSlide, SliceData } from '../Redux/SliderSlice';
import dummydata from '../../assets/dummydataa.json'



const SliderHomepage = () => {

    const Dispatch = useDispatch();
    const currentSlide = useSelector((state) => state.slider.value);
    const slides = useSelector((state)=>state.slider.length)

    useEffect(()=>{Dispatch(SliceData(dummydata))
        setInterval(()=>{Dispatch(NextSlide())},7000)
    },[])
   


  return (
   <>
   <div>
    {slides.length>0&&<div>
        <img className='h-[500px] w-full'src={dummydata[currentSlide].image_url}/>
        </div>}
   </div>
   <button onClick={()=>{Dispatch(PrevSlide())}}>Prev</button>
   <button onClick={()=>{Dispatch(NextSlide())}}>Next</button>
   </>
  )
}

export default SliderHomepage