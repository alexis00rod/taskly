import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  loading: boolean;
  isAuth: boolean;
  userData: {
    email: string | null;
    uid: string | null;
  };
}

const initialState: AuthState = {
  loading: false,
  isAuth: false,
  userData: {
    email: null,
    uid: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loading = true;
      state.isAuth = true;
      state.userData.email = action.payload.email;
      state.userData.uid = action.payload.uid;
    },
    logout: (state) => {
      state.loading = true;
      state.isAuth = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
