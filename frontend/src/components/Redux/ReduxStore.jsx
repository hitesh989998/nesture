import addToCartSlice from './AddtoCartSlice';
import SearchBarSlice from './SearchBarSlice';
import SliderSlice from './SliderSlice';
import NavProdSlice from './NavProdSlice';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './AuthenticationSlice';
import CreateUser from './CreateAccountSlice';

const ReduxStore = configureStore({
  reducer: {
    cart: addToCartSlice,
    slider: SliderSlice,
    navProdMenu: NavProdSlice,
    searchbar: SearchBarSlice,
    auth: authSlice,
    createNewUser: CreateUser,
  },
});

export default ReduxStore;
