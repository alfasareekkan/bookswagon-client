import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
        currentCategory:{}
    },
    reducers: {
        //inserting all categories to redux state
        insertAllCategories: (state, action) => {
            state.categories = [...action.payload];
        }
    }
})



export const { insertAllCategories } = categorySlice.actions;

export default categorySlice.reducer;