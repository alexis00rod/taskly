import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./slices";

const store = configureStore({
  reducer: {
    user: AuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
