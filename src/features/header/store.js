import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCount } from '../counter/counterAPI';

const initialState = { header: '', status: '' };

// Action async
export const changeHeaderAsync = createAsyncThunk(
  'header/changeHeaderAsync',
  async (newHeader) => {
    const response = await fetchCount(newHeader);
    return response.data;
  }
);

export const header = createSlice({
  name: 'header',
  initialState,
  reducers: {
    changeHeader: (state, action) => {
      state.header = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeHeaderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(changeHeaderAsync.fulfilled, (state, action) => {
        state.status = 'done';
        state.header = action.payload;
      });
  },
});

export const { changeHeader } = header.actions;

export default header.reducer;
