import { createSlice } from "@reduxjs/toolkit";
import { fetch } from "../thunk/Fetchdata";
const CurrencySlice = createSlice({
  name: "curency",
  initialState: {
    data: [],
    isLoading: true,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetch.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetch.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
export const CurrencyReducer = CurrencySlice.reducer;
