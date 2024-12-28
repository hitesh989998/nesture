import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const AuthenticateUser = createAsyncThunk('auth/AuthenticateUser', async (credentials) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_WEB_URL}/authentication`,credentials, { withCredentials: true });
    console.log('post req sent')
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AuthenticateUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(AuthenticateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
        toast.success('Authenticated successfully')
      })
      .addCase(AuthenticateUser.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'failed';
        toast.error('Authentication failed')
        console.log(state.error);
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;