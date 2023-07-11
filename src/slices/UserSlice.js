import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      username: "Parth",
      email: "parth@email.com",
      age: 22
    },
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUserDetails } = UserSlice.actions;
