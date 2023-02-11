import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';


// base url
const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:4000/user/',
});
// creating an api slice
export const categoryApi = createApi({
  baseQuery,
  reducerPath: 'categoryApi',
  endpoints: () => ({}),
});
