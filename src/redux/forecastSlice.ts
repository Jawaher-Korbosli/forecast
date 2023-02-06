import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "forecast",
  initialState: {
    value: {
      unit: "metric",
      data: {},
      city: "Tunis",
    },
  },
  reducers: {
    update: (state, action) => {
      state.value = { ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = counterSlice.actions;

export default counterSlice.reducer;
