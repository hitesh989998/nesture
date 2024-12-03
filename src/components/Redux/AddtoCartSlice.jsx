import { createSlice } from "@reduxjs/toolkit";

const persistedState = JSON.parse(localStorage.getItem('cartState'))

const addtoCartSlice = createSlice({
  name: "AddToCartFeature",
  initialState: persistedState || {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {
    AddToCart: (state, action) => {
      const payloadstorer = action.payload;
      let filtereddata = state.items.find(
        (items) => items.id === payloadstorer.id
      );

     const finalPrice = payloadstorer.discount? Math.floor(payloadstorer.price - (payloadstorer.price * payloadstorer.discount)/100) : payloadstorer.price
      

      if (filtereddata) {
        filtereddata.quantity += payloadstorer.quantity;
        state.totalItems += payloadstorer.quantity;
        state.totalPrice += payloadstorer.quantity * finalPrice;
      } else {
        state.items.push({
          id: payloadstorer.id,
          category: payloadstorer.category,
          name: payloadstorer.name,
          description: payloadstorer.description,
          quantity: payloadstorer.quantity,
          image_url: payloadstorer.image_url,
          price: payloadstorer.price,
          discount:payloadstorer?.discount??null
        });

        state.totalItems += payloadstorer.quantity;
        state.totalPrice += payloadstorer.quantity * finalPrice;
      }
      localStorage.setItem('cartState', JSON.stringify(state))
    },
    RemoveFromCart: (state, action) => {
      const payloadstorer = action.payload;
      let filtereddata = state.items.find(
        (items) => items.id === payloadstorer.id
      );

      const finalPrice = payloadstorer.discount? Math.floor(payloadstorer.price - (payloadstorer.price * payloadstorer.discount)/100) : payloadstorer.price


      if (filtereddata) {
        state.totalItems -= filtereddata.quantity;
        state.totalPrice -= filtereddata.quantity * finalPrice;

        state.items= state.items.filter(items=>items.id !==payloadstorer.id)
        localStorage.setItem('cartState', JSON.stringify(state))

      } 

    },
    EditQuantity: (state, action) => {
      const { item, quantityChange } = action.payload;

      let filtereddata = state.items.find((items) => items.id == item.id);
      const finalPrice = item.discount? Math.floor(item.price - (item.price * item.discount)/100) : item.price
      
      if (filtereddata) {
        let difference = filtereddata.quantity + quantityChange
        
        if (difference >= 1) {
          filtereddata.quantity += quantityChange;

          state.totalItems += quantityChange;
          state.totalPrice += quantityChange * finalPrice;
          localStorage.setItem('cartState', JSON.stringify(state))

        }
      }
    },

    ClearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
      localStorage.removeItem('cartState')

    },
  },
});

export default addtoCartSlice.reducer;
export const { AddToCart, RemoveFromCart, EditQuantity, ClearCart } = addtoCartSlice.actions;
