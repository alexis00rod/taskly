import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserData {
  email: string | null;
  uid: string | null;
  photoURL: string | null | undefined;
}

interface AuthState {
  loading: boolean;
  isAuth: boolean;
  userData: UserData;
}

const initialState: AuthState = {
  loading: false,
  isAuth: false,
  userData: {
    email: null,
    uid: null,
    photoURL: null,
  },
};

interface LoginPayload {
  email: string | null;
  uid: string;
  photoURL?: string | null;
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.loading = false;
      state.isAuth = true;
      state.userData.email = action.payload.email;
      state.userData.uid = action.payload.uid;
      state.userData.photoURL = action.payload.photoURL;
    },
    logout: (state) => {
      state.loading = false;
      state.isAuth = false;
      state.userData.email = null;
      state.userData.uid = null;
      state.userData.photoURL = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { login, logout, setLoading } = authSlice.actions;
