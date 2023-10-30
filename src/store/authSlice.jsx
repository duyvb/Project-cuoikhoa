import {createSlice} from '@reduxjs/toolkit';
import {QueryClient} from '@tanstack/react-query';
import {localServices} from '../services/localServices';

const queryClient = new QueryClient();

const authInitialState = {
  user: localServices.user.get(),
  isLoggedIn: !!localServices.user.get()?.accessToken,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    login(state, action) {
      localServices.user.set(action.payload);
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      localServices.user.remove();
      state.user = null;
      state.isLoggedIn = false;
      queryClient.removeQueries('userDetail');
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
