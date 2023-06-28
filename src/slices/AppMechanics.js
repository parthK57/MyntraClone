import { createSlice } from "@reduxjs/toolkit";

export const AppMechanics = createSlice({
  name: "appMechanics",
  initialState: {
    value: {
      showSidebar: false,
    },
  },
  reducers: {
    toggleSidebar: (state, action) => {
      state.value.showSidebar = action.payload;
    },
  },
});

export const { toggleSidebar } = AppMechanics.actions;