import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, isLoggedIn: false },
  reducers: {
    setCredentials(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = Boolean(state.token); // ?
    },
    resetCredentials(state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = Boolean(state.token); // ?
    },
  },
});

export const { setCredentials, resetCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = state => state.auth.user;
export const selectCurrentToken = state => state.auth.token;
