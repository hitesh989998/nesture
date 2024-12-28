import addToCartSlice from "./AddtoCartSlice";
import SearchBarSlice from "./SearchBarSlice";
import SliderSlice from "./SliderSlice";
import NavProdSlice from "./NavProdSlice";
import {configureStore} from '@reduxjs/toolkit';
import authSlice from "./AuthenticationSlice";

const ReduxStore = configureStore({
  reducer: {
    cart: addToCartSlice,
    slider: SliderSlice,
    navProdMenu: NavProdSlice,
    searchbar: SearchBarSlice,
    auth: authSlice
  }
});


export default ReduxStore;
