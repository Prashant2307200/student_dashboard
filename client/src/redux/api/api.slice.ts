import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  // prepareHeaders: (headers) => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     headers.set('Authorization', `Bearer ${token}`);
  //   }
  //   return headers;
  // },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Student'],
  endpoints: () => ({}),
});