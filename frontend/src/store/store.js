import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice'; // Importing the auth slice
import pictureReducer from '../slices/pictureSlice'; // Importing the picture slice

// Configure the store
const store = configureStore({
    reducer: {
        auth: authReducer,
        pictures: pictureReducer, // Add the picture reducer here
        // Add other reducers here in the future
    },
});

export default store;
