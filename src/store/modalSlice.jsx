import {createSlice} from '@reduxjs/toolkit';

const modalInitialState = {
  isUserUpdateInfoShow: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: modalInitialState,
  reducers: {
    setUserUpdateInfoModal(state, action) {
      state.isUserUpdateInfoShow = action.payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const modalAction = modalSlice.actions;
