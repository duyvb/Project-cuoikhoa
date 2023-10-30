import {createSlice} from '@reduxjs/toolkit';

const notificationInitialState = {
  open: false,
  type: 'info',
  message: '',
  timeout: 2000,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState: notificationInitialState,
  reducers: {
    addNotification: (state, action) => ({
      ...notificationInitialState,
      ...action.payload,
      open: true,
    }),
    clearNotification: (state, action) => ({
      ...state,
      open: false,
    }),
  },
});

export const notificationActions = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;
