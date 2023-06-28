import { configureStore } from "@reduxjs/toolkit";

// SLICES
import { UserSlice } from "./slices/UserSlice";
import { AppMechanics } from "./slices/AppMechanics";

const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    appMechanics: AppMechanics.reducer,
  },
});

export default store;
