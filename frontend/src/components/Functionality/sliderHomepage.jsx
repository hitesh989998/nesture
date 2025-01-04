import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NextSlide, PrevSlide, SliceData } from '../Redux/SliderSlice';
import dummydata from '../../assets/dummydataa.json';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const SliderHomepage = () => {
  const Dispatch = useDispatch();
  const currentSlide = useSelector((state) => state.slider.value);
  const slides = useSelector((state) => state.slider.length);

  useEffect(() => {
    Dispatch(SliceData(dummydata));
    const autoclear = setInterval(() => {
      Dispatch(NextSlide());
    }, 7000);
    return () => {
      clearInterval(autoclear);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[650px] bg-white py-1 px-8">
        {slides.length > 0 && (
          <div className="relative top-[78px] drop-shadow-lg">
            <img
              className="h-[550px] w-full rounded-[28px] drop-shadow-sm"
              src={dummydata[currentSlide].image_url}
            />
            <div className="absolute flex justify-between w-full px-2 top-[45%]">
              <button
                className="text-3xl rounded-full m-1 bg-opacity-20 backdrop-blur-lg shadow-lg text-[#009b7e] hover:bg-[#009b7e] hover:text-white"
                onClick={() => {
                  Dispatch(PrevSlide());
                }}
              >
                <MdKeyboardArrowLeft />
              </button>
              <button
                className="text-3xl rounded-full m-1 bg-opacity-20 backdrop-blur-lg shadow-lg text-[#009b7e] hover:bg-[#009b7e] hover:text-white"
                onClick={() => {
                  Dispatch(NextSlide());
                }}
              >
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SliderHomepage;
