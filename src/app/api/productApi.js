/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';


// base url
const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:4000/user/',
});
// creating an api slice
export const productApi = createApi({
  baseQuery,
  reducerPath: 'productApiSlice',
  endpoints: () => ({}),
});
