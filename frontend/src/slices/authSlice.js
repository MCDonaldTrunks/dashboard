import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: !!localStorage.getItem('access'), // Check if the user is authenticated
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
});

export const { login, logout } = authSlice.actions; // Export actions for login and logout
export default authSlice.reducer; // Export the reducer
