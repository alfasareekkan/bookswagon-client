import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'category',
    initialState: {
        products: [],
    },
    reducers: {
        //inserting all products to redux state
        insertAllProducts: (state, action) => {
            state.products = [...action.payload];
        }
    }
})



export const { insertAllProducts } = productSlice.actions;

export default productSlice.reducer;