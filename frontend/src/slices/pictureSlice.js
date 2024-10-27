import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { refreshAccessToken } from './authSlice';

// Thunk to fetch pictures
const fetchPictures = createAsyncThunk(
  'pictures/fetchPictures',
  async (_, { getState, dispatch, rejectWithValue }) => {
    try {
      const { accessToken } = getState().auth;
      const response = await axios.get('http://localhost:8000/pictures/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        try {
          // Try refreshing the token
          await dispatch(refreshAccessToken());
          // Retry fetching pictures after refreshing token
          const { accessToken } = getState().auth;
          const retryResponse = await axios.get('http://localhost:8000/pictures/', {  // Make sure this matches the backend URL
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          return retryResponse.data;
        } catch (refreshError) {
          return rejectWithValue('Unable to refresh token');
        }
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Thunk to upload a picture
const uploadPicture = createAsyncThunk(
    'pictures/uploadPicture',
    async (pictureData, { getState, dispatch, rejectWithValue }) => {
        try {
            const { accessToken } = getState().auth;
            const formData = new FormData();
            formData.append('image', pictureData.image);
            formData.append('description', pictureData.description);

            
            const response = await axios.post('http://localhost:8000/pictures/upload/', formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 401) {
                try {
                    // Try refreshing the token
                    await dispatch(refreshAccessToken());

                    // Recreate formData as it's not reusable
                    const newFormData = new FormData();
                    newFormData.append('image', pictureData.image);
                    newFormData.append('description', pictureData.description);

                    // Retry uploading picture after refreshing token
                    const { accessToken } = getState().auth;
                    const retryResponse = await axios.post('http://localhost:8000/pictures/upload/', newFormData, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            'Content-Type': 'multipart/form-data',
                        },
                    });
                    return retryResponse.data;
                } catch (refreshError) {
                    return rejectWithValue('Unable to refresh token');
                }
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


const pictureSlice = createSlice({
  name: 'pictures',
  initialState: {
    pictures: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPictures.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPictures.fulfilled, (state, action) => {
        state.loading = false;
        state.pictures = action.payload;
      })
      .addCase(fetchPictures.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(uploadPicture.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadPicture.fulfilled, (state, action) => {
        state.loading = false;
        if (Array.isArray(state.pictures)) {
          state.pictures.push(action.payload);
        } else {
          state.pictures = [action.payload];
        }
      })
      .addCase(uploadPicture.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default pictureSlice.reducer;
export { fetchPictures, uploadPicture };
