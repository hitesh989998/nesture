import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const CreateUser = createAsyncThunk('auth/CreateUser', async (credentials) => {
  console.log(import.meta.env.VITE_BACKEND_WEB_URL, 'env data is here');
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_WEB_URL}/createuser`, credentials, { withCredentials: true });
    return response.data;
  } catch (error) {
    // Log the full error to help diagnose
    console.error('Error:', error.response || error);
    toast.error(error.response ? error.response.data.message : 'An unknown error occurred');
    toast(import.meta.env.VITE_BACKEND_WEB_URL)
    throw new Error(error.response ? error.response.data.message : error.message);
  }
});



const createUserSlice = createSlice({
  name: 'createuser',
  initialState: {
    status: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(CreateUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        toast.success('Account created successfully, login to continue')
      })
      .addCase(CreateUser.rejected, (state, action) => {
        state.status = 'failed';
        toast.error('Account creation failed')
        toast(import.meta.env.VITE_BACKEND_WEB_URL)
      });
  },
});

export default createUserSlice.reducer;