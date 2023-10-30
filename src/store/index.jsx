import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from './authSlice';
import {modalReducer} from './modalSlice';
import {notificationReducer} from './notificationSlice';
import {progressReducer} from './progressSlice';

const store = configureStore({
  reducer: {
    notification: notificationReducer,
    progress: progressReducer,
    auth: authReducer,
    modal: modalReducer,
  },
});

export default store;
