import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const testSlice = createSlice({
  name: 'authSliceReducer',
  initialState,
  reducers: {
    setTestData(state) {
      return {
        ...state,
        testData: 'doctor',
      };
    },
  },
});

export default testSlice.reducer;
