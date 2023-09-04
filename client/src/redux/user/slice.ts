import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TUserState } from './types';
import { TUser } from 'types/user';

const initialState: TUserState = {
  jwt: '',
  userData: {} as TUser,
  additionalInfo: {} as any,
  enteredBookName: '',
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    setJwt: (state, { payload }) => {
      state.jwt = payload;
    },
    setUserData: (state, { payload }) => {
      state.userData = payload;
    },

    setAdditionalInfo: (state, { payload }) => {
      state.additionalInfo = payload;
    },
    getUser: (state, { payload }) => {
      state.isLoading = true;
    },
    clearUser: () => initialState,
    setBookName: (state, { payload }: PayloadAction<string>) => {
      state.enteredBookName = payload;
    },
    setAvatar: (state, { payload }: PayloadAction<string>) => {
      if (state.userData) {
        state.additionalInfo.avatar = payload;
      }
    },
    putComment: (state, { payload }) => {
      state.isLoading = true;
    },
    postComment: (state, { payload }) => {
      state.isLoading = true;
    },
    putUser: (state, { payload }) => {
      state.isLoading = true;
    },
    putAvatar: (state, { payload }) => {
      state.isLoading = true;
    },
    deletelBooking: (state, { payload }) => {
      state.isLoading = true;
    },
    cancelLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
