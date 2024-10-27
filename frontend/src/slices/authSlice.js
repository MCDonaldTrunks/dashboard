import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to refresh access token
const refreshAccessToken = createAsyncThunk(
  'auth/refreshAccessToken',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { refreshToken } = getState().auth;
      const response = await axios.post('http://localhost:8000/auth/token/refresh/', {
        refresh: refreshToken,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue('Unable to refresh token');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: !!localStorage.getItem('access'),
    accessToken: localStorage.getItem('access'),
    refreshToken: localStorage.getItem('refresh'),
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem('access', action.payload.accessToken);
      localStorage.setItem('refresh', action.payload.refreshToken);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(refreshAccessToken.fulfilled, (state, action) => {
      state.accessToken = action.payload.access;
      localStorage.setItem('access', action.payload.access);
    });
  },
});

export const { login, logout } = authSlice.actions;
export { refreshAccessToken }; // Export refreshAccessToken here
export default authSlice.reducer;
