import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { json } from 'react-router';
import { toast } from 'react-toastify';

export const AuthenticateUser = createAsyncThunk('auth/AuthenticateUser', async (credentials) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_WEB_URL}/authentication`,credentials, { withCredentials: true });
    return response.data.user;
  } catch (error) {
    toast.error(error.response.data.message)
    throw new Error(error.response.data.message);
  }
});
let userStatus = JSON.parse(sessionStorage.getItem('userStatus'));
let userAuthStatus = JSON.parse(sessionStorage.getItem('userAuthStatus'));

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: userStatus,
    isAuthenticated: userAuthStatus,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AuthenticateUser.pending, (state) => {
        state.isAuthenticated = 'pending';
      })
      .addCase(AuthenticateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = 'authenticated';
        sessionStorage.setItem('userStatus', JSON.stringify(state.user));
        sessionStorage.setItem('userAuthStatus', JSON.stringify(state.isAuthenticated));
        toast.success('Authenticated successfully')
      })
      .addCase(AuthenticateUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isAuthenticated = 'logged out';
        sessionStorage.setItem('userStatus', JSON.stringify(state.user));
        sessionStorage.setItem('userAuthStatus', JSON.stringify(state.isAuthenticated));
        toast.error('Authentication failed')
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;