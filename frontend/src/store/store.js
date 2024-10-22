import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice'; // Importing the auth slice

// Configure the store
const store = configureStore({
    reducer: {
        auth: authReducer,
        // Add other reducers here in the future
    },
});

export default store;
