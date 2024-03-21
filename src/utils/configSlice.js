import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        currLang: "en",
    },
    reducers: {
        changeCurrentLang: (state, action) => {
            state.currLang = action.payload;
        },
    },
});

export const { changeCurrentLang } = configSlice.actions;
export default configSlice.reducer;