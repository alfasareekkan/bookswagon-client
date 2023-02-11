/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './api/productApi';
import { categoryApi } from './api/categoryApi';
import categoryReducer from '../features/category/categorySlice';
import productReducer from '../features/product/productSlice';

// redux store configuration

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    category: categoryReducer,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(),
  devTools: true,

});
