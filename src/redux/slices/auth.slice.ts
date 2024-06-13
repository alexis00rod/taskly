import { createSlice } from "@reduxjs/toolkit";
import { UserTypes } from "models";

const initialState: UserTypes = {
  email: null,
  uid: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.uid = null;
      state.email = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
