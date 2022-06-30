import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://62bc3390eff39ad5ee1f9e0b.mockapi.io/api/v1/';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Contacts'],
  endpoints: build => ({
    fetchAllContacts: build.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    deleteContact: build.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
        body: { id },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const { useFetchAllContactsQuery, useDeleteContactMutation } =
  contactsApi;
