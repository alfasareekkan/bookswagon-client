import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
    },
    reducers: {
        //inserting all products to redux state
        insertAllProducts: (state, action) => {
            state.products = [...action.payload];
        },
        updateProducts: (state, action) => { 
            console.log(state.products);
            
            state.products = [...state.products,...action.payload.data];
        }
    }
})



export const { insertAllProducts,updateProducts } = productSlice.actions;

export default productSlice.reducer;