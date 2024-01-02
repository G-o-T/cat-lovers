import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cats: [],
    isLoading: false,
    error: ''
}

export const catSlice = createSlice({
    name: 'cat',
    initialState,
    reducers: {
        catsFetching(state) {
            state.isLoading = true;
        },
        catsFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = '';
            state.cats = action.payload;
        },
        catsFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default catSlice.reducer;
