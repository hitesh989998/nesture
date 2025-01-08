import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const productsWithDiscount = [
  { id: 1, discount: 15 },
  { id: 3, discount: 25 },
  { id: 5, discount: 10 },
  { id: 9, discount: 30 },
  { id: 11, discount: 20 },
  { id: 13, discount: 15 },
  { id: 15, discount: 5 },
  { id: 17, discount: 10 },
  { id: 19, discount: 15 },
  { id: 21, discount: 20 },
  { id: 23, discount: 10 },
  { id: 25, discount: 15 },
  { id: 27, discount: 5 },
  { id: 29, discount: 10 },
  { id: 31, discount: 15 },
  { id: 33, discount: 20 },
  { id: 35, discount: 30 },
  { id: 37, discount: 15 },
  { id: 39, discount: 5 },
  { id: 41, discount: 30 },
  { id: 49, discount: 15 },
];

export const fetchProducts = createAsyncThunk(
  'navprodmenu/fetchProducts',
  async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_WEB_URL}/api/products`
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch products', error.message);
    }
  }
);

const NavProdSlice = createSlice({
  name: 'navprodmenu',
  initialState: {
    allproducts: [],
    status: 'no data fetched',
  },
  reducers: {
    openpage: (state, action) => {
      const filteredData = state.value.filter(
        (item) => item.category === action.payload
      );
      state.value = filteredData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allproducts = action.payload.map((items) => {
          const discountAvailable = productsWithDiscount.find(
            (product) => product.id === items.id
          );
          if (discountAvailable) {
            const updatedItem = {
              ...items,
              discount: discountAvailable.discount,
            };
            return updatedItem;
          }
          return items;
        });
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default NavProdSlice.reducer;
export const { openpage } = NavProdSlice.actions;
