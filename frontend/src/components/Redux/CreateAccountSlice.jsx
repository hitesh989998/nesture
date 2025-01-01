import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const CreateUser = createAsyncThunk('auth/CreateUser', async (credentials) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_WEB_URL}/createuser`,credentials, { withCredentials: true });    
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message)
    throw new Error(error);
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
      });
  },
});

export default createUserSlice.reducer;