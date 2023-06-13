import { createSlice } from "@reduxjs/toolkit";

// SLICES
import { UserSlice } from "./slices/UserSlice";

const store = createSlice({
  reducers: {
    user: UserSlice.reducer,
  },
});

export default store;
