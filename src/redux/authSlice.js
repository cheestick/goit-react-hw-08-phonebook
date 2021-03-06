import { createSlice } from '@reduxjs/toolkit';
import { api } from './api';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isLoggedIn: false,
    // isError: false,
    isContactsPending: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        api.endpoints.signUpUser.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
          state.isError = false;
        }
      )
      .addMatcher(api.endpoints.signUpUser.matchPending, (state, _action) => {
        state.isPending = true;
        state.isLoggedIn = false;
        // state.isError = false;
      })
      .addMatcher(api.endpoints.signUpUser.matchRejected, (state, _action) => {
        state.isError = true;
        state.isLoggedIn = false;
      })
      .addMatcher(api.endpoints.signInUser.matchPending, (state, _action) => {
        state.isPending = true;
        state.isLoggedIn = false;
        // state.isError = false;
      })
      .addMatcher(
        api.endpoints.signInUser.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
          // state.isError = false;
        }
      )
      .addMatcher(api.endpoints.signInUser.matchRejected, (state, _action) => {
        state.isError = true;
        state.isLoggedIn = false;
      })
      .addMatcher(
        api.endpoints.fetchCurrentUser.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        api.endpoints.fetchCurrentUser.matchRejected,
        (state, _action) => {
          state.user = null;
          // state.token = null;
          state.isLoggedIn = false;
          // state.isError = false;
        }
      )
      .addMatcher(api.endpoints.logOutUser.matchFulfilled, (state, _action) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export default authSlice.reducer;

export const selectCurrentUser = state => state.auth.user;
export const selectCurrentToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsError = state => state.auth.isError;
export const selectIsPending = state => state.auth.isPending;
