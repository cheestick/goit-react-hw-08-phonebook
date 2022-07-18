import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://connections-api.herokuapp.com';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      token && headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['auth/user', 'contacts'],
  endpoints: build => ({
    fetchCurrentUser: build.query({
      query: () => ({
        url: 'users/current',
      }),
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
      query: () => ({
        url: 'users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['auth/user'],
    }),
    fetchAllContacts: build.query({
      query: () => '/contacts',
      providesTags: ['contacts'],
    }),
    deleteContact: build.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'contacts', id }],
    }),
    addContact: build.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: [{ type: 'contacts' }],
    }),
    updateContact: build.mutation({
      query: (id, patch) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'contacts, id' }],
    }),
  }),
});

export const {
  useFetchCurrentUserQuery,
  useLazyFetchCurrentUserQuery,
  useSignUpUserMutation,
  useSignInUserMutation,
  useLogOutUserMutation,
  useFetchAllContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
  useUpdateContactMutation,
} = api;
