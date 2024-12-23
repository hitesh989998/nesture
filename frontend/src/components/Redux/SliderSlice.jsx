import {createSlice} from '@reduxjs/toolkit'


const SliderSlice = createSlice({
    name: 'homeslide',
    initialState: {
        value:0,
        length: []
    },
    reducers: {
        NextSlide: (state)=>{(state.value < state.length.length -1)?state.value+=1:state.value=0},
        PrevSlide: (state)=>{(state.value>0)?state.value-=1:state.value=state.length.length-1},
        SliceData: (state,action)=>{state.length = action.payload}
    }
})

export default SliderSlice.reducer
export const {NextSlide,PrevSlide,SliceData} = SliderSlice.actions