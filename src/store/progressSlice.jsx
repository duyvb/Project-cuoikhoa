import {createSlice} from '@reduxjs/toolkit';

const progressInitialState = {
  progress: 0,
};

const progressSlice = createSlice({
  name: 'progress',
  initialState: progressInitialState,
  reducers: {
    setProgress(state, action) {
      state.progress = action.payload;
    },
    resetProgress(state) {
      state.progress = 0;
    },
  },
});

export const progressActions = progressSlice.actions;
export const progressReducer = progressSlice.reducer;
