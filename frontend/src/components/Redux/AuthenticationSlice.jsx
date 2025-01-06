/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const AuthenticateUser = createAsyncThunk(
  'auth/AuthenticateUser',
  async (credentials) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_WEB_URL}/authentication`,
        credentials,
        { withCredentials: true }
      );
      return response.data.user;
    } catch (error) {
      toast.error(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  }
);

export const LogoutUser = createAsyncThunk('auth/LogoutUser', async () => {
  try {
    await axios.post(
      `${import.meta.env.VITE_BACKEND_WEB_URL}/logout`,
      {},
      { withCredentials: true }
    );

    return 'Logout successful';
  } catch (error) {
    throw new Error(error);
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
    logout: () => {
      sessionStorage.removeItem('userStatus');
      sessionStorage.removeItem('userAuthStatus');
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
        sessionStorage.setItem(
          'userAuthStatus',
          JSON.stringify(state.isAuthenticated)
        );
        toast.success('Authenticated successfully');
      })
      .addCase(AuthenticateUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isAuthenticated = 'logged out';
        sessionStorage.setItem('userStatus', JSON.stringify(state.user));
        sessionStorage.setItem(
          'userAuthStatus',
          JSON.stringify(state.isAuthenticated)
        );
        toast.error('Authentication failed');
      })
      .addCase(LogoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = null;
        sessionStorage.removeItem('userStatus');
        sessionStorage.removeItem('userAuthStatus');
        toast.success('Logged out successfully');
      })
      .addCase(LogoutUser.rejected, (state, action) => {
        state.error = action.payload;
        toast.error(action.payload);
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
