import { createSlice } from '@reduxjs/toolkit';

import { IAuthData, IAuthState } from './types';

const initialState: IAuthState = {
  step: 1,
  authData: {} as IAuthData,
  isLoading: false,
  errorStatus: 0,
  responseMessage: '',
};

export const authSlice = createSlice({
  name: 'AUTH',
  initialState,
  reducers: {
    setDefiniteStep: (state, { payload }) => {
      state.step = payload;
    },
    setAuthData: (state, { payload }) => {
      const { data } = payload;

      state.authData = data;
      state.isLoading = true;
    },
    setErrorStatus: (state, { payload }) => {
      state.errorStatus = payload;
    },
    cancelLoading: (state) => {
      state.isLoading = false;
    },
    setResponseMessage: (state, { payload }) => {
      state.responseMessage = payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
