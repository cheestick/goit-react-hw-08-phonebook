import { createSlice } from '@reduxjs/toolkit';
import { api } from './api';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, isLoggedIn: false },
  reducers: {
    // setCredentials(state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true; //Boolean(state.token); // ?
    // },
    // resetCredentials(state) {
    //   state.user = null;
    //   state.token = null;
    //   state.isLoggedIn = false; // Boolean(state.token); // ?
    // },
    // refreshCredentials(state, action) {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    // },
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        api.endpoints.signUpUser.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        api.endpoints.signInUser.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      );
  },
});

export const { setCredentials, resetCredentials, refreshCredentials } =
  authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = state => state.auth.user;
export const selectCurrentToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
