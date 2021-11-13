import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://618ec5e650e24d0017ce144d.mockapi.io/api/v1/',
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: '/contacts/${contactId}',
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useFetchContactsQuery, useDeleteContactMutation } = contactsApi;
