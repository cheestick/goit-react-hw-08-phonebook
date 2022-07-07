import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://connections-api.herokuapp.com';

export const authApi = createApi({
  reducerPath: 'auth/user',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['auth/user'],
  endpoints: build => ({
    fetchCurrentUser: build.query({
      query: () => ({}),
      providesTags: ['auth/user'],
    }),
    signUpUser: build.mutation({
      query: newUser => ({
        url: 'users/signup',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['auth/user'],
    }),
    signInUser: build.mutation({
      query: user => ({
        url: 'users/login',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['auth/user'],
    }),
    logOutUser: build.mutation({
      query: token => ({
        url: 'users/logout',
        method: 'POST',
        //'Authorization': `Bearer ${token}`
      }),
      invalidatesTags: ['auth/user'],
    }),
  }),
});

export const {
  useFetchCurrentUserQuery,
  useSignUpUserMutation,
  useSignInUserMutation,
  useLogOutUserMutation,
} = authApi;
