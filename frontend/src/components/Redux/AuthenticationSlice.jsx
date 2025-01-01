import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const AuthenticateUser = createAsyncThunk('auth/AuthenticateUser', async (credentials) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_WEB_URL}/authentication`,credentials, { withCredentials: true });
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message)
    throw new Error(error.response.data.message);
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
        state.status = 'pending';
      })
      .addCase(AuthenticateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'authenticated';
        toast.success('Authenticated successfully')
      })
      .addCase(AuthenticateUser.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'logged out';
        toast.error('Authentication failed')
        console.log(state.error);
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;