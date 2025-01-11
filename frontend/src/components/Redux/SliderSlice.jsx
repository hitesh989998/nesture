import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    NextSlide: (state) => {
      state.value = (state.value + 1) % 4;
    },
    PrevSlide: (state) => {
      state.value = (state.value - 1 + 4) % 4;
    },
  },
});

export const { NextSlide, PrevSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
