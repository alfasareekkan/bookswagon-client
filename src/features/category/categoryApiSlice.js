/* eslint-disable import/prefer-default-export */
import { categoryApi } from "../../app/api/categoryApi"; 

// Injecting endpoints into product api

const categoryApiSlice = categoryApi.injectEndpoints({
  endpoints: (builder) => ({
    // getting latest product from api
    getAllCategory: builder.mutation({
      query: (credentials) => ({
        url: 'category',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllCategoryMutation } = categoryApiSlice;