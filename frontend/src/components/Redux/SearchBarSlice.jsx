import { createSlice } from '@reduxjs/toolkit'
import dummydata from '../../assets/dummy_product_data.json'

const SearchBarSlice = createSlice({
    name: 'searchbar',
    initialState: {
        input: "",
        data: dummydata,
    },
    reducers:{
        updateInput: (state,action)=>{
            state.input=action.payload
        }
    }
})

export default SearchBarSlice.reducer
export const {updateInput} = SearchBarSlice.actions