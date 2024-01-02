import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    likedCards: [],
}

export const testSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
        correctLikedCard(state, action) {
            state.likedCards = action.payload;
        },
        deleteLikedCard(state, action) {
            state.likedCards = action.payload;
        }
    }
})

export default testSlice.reducer;
