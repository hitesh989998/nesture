import { createSlice } from "@reduxjs/toolkit";
import dummydataprod from "../../assets/dummy_product_data.json";


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

const filteredProducts = dummydataprod.map((items) => {
    const discountAvailable = productsWithDiscount.find((item)=>item.id ===items.id);

    if (discountAvailable) {
      const updatedItem = {
        ...items,
        discount: discountAvailable.discount,
      };
      return updatedItem;
    }
    return items;
  });

const NavProdSlice = createSlice({
  name: "navprodmenu",
  initialState: {
    value: filteredProducts,
    allproducts: filteredProducts,
  },
  reducers: {
    openpage: (state, action) => {
      const filteredata = dummydataprod.filter(
        (items) => items.category === action.payload
      );
      state.value = filteredata;
    },
  },
});

export default NavProdSlice.reducer;
export const { openpage } = NavProdSlice.actions;
