/* eslint-disable import/prefer-default-export */
import { productApi } from '../../app/api/productApi';

// Injecting endpoints into product api

const productApiSlice = productApi.injectEndpoints({
  endpoints: (builder) => ({
    // getting latest product from api
    getLatestProduct: builder.mutation({
      query: (credentials) => ({
        url: 'latest-products',
        method: 'GET',
      }),
    }),
    getProductByCategory: builder.mutation({
      query: (credentials) => ({
        url: `category-products/${credentials}`,
        method: 'GET',
      }),
    }),
    filter: builder.mutation({
      query: (credentials) => ({
        url: `filter/${credentials.id}/${credentials.type}`,
        method: 'GET',
      }),
    }),
    pagination: builder.mutation({
      query: (credentials) => ({
        url: `paginate-products/${credentials.id}/${credentials.paginate}`,
        method: 'GET',
      }),
    }),
  }),
});
// exporting mutations
export const { useGetLatestProductMutation, useGetProductByCategoryMutation,
  useFilterMutation, usePaginationMutation,
} = productApiSlice;
