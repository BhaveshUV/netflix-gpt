import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        isGptSearch: false,
    },
    reducers: {
        toggleIsGptSearch: (state) => {
            state.isGptSearch = !state.isGptSearch;
        },
    },
});

export const { toggleIsGptSearch } = gptSlice.actions;
export default gptSlice.reducer;