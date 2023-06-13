import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    value: {},
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUserDetails } = UserSlice.actions;
