import { createSlice } from '@reduxjs/toolkit';

const initialState = { header: '' };

export const header = createSlice({
  name: 'header',
  initialState,
  reducers: {
    changeHeader: (state, action) => {
      state.header = action.payload;
    },
  },
});

export const { changeHeader } = header.actions;

export default header.reducer;
