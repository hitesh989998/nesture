/* eslint-disable no-undef */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NextSlide, PrevSlide } from '../Redux/SliderSlice';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const SliderHomepage = () => {
  const dispatch = useDispatch();
  const currentSlide = useSelector((state) => state.slider.value);

  const images = ['./1.png', './2.png', './3.png', './4.png'];

  useEffect(() => {
    // Automatically change slides every 7 seconds
    const slideInterval = setInterval(() => {
      dispatch(NextSlide());
    }, 7000);

    return () => clearInterval(slideInterval);
  }, [dispatch]);

  const handleNextSlide = () => {
    dispatch(NextSlide());
  };

  const handlePrevSlide = () => {
    dispatch(PrevSlide());
  };

  return (
    <div className="w-full h-[650px] bg-white py-1 px-8">
      {images.length > 0 && (
        <div className="relative top-[78px] drop-shadow-lg">
          <img
            className="h-[550px] w-full rounded-[28px] drop-shadow-sm transition-all duration-700 ease-in-out"
            src={images[currentSlide]}
            alt="Slider"
          />
          <div className="absolute flex justify-between w-full px-2 top-[45%]">
            <button
              className="text-3xl rounded-full m-1 bg-opacity-20 backdrop-blur-lg shadow-lg text-[#009b7e] hover:bg-[#009b7e] hover:text-white"
              onClick={handlePrevSlide}
            >
              <MdKeyboardArrowLeft />
            </button>
            <button
              className="text-3xl rounded-full m-1 bg-opacity-20 backdrop-blur-lg shadow-lg text-[#009b7e] hover:bg-[#009b7e] hover:text-white"
              onClick={handleNextSlide}
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderHomepage;
