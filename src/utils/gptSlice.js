import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        isGptSearch: false,
        gptMovieNames: null,
        movieResults: null,
    },
    reducers: {
        toggleIsGptSearch: (state) => {
            state.isGptSearch = !state.isGptSearch;
        },
        addGptMovieNames: (state, action) => {
            state.gptMovieNames = action.payload;
        },
        addMovieResults: (state, action) => {
            state.movieResults = action.payload;
        },
    },
});

export const { toggleIsGptSearch, addGptMovieNames, addMovieResults } = gptSlice.actions;
export default gptSlice.reducer;