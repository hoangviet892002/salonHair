import { RootState } from "../../stores";
import { SignUpPayload, User } from "@/types/user.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  loading?: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
  loading: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      console.log(action.payload);
      state.loading = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
      state.loading = false;
    },
    loginFailed(state, action: PayloadAction<string>) {
      console.log(action.payload);
      state.loading = false;
    },
    register(state, action: PayloadAction<SignUpPayload>) {
      console.log(action.payload);
      state.loading = true;
    },
    registerSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
      state.loading = false;
    },
    registerFailed(state, action: PayloadAction<string>) {
      console.log(action.payload);
      state.loading = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Selectors
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectCurrentUser = (state: RootState) => state.auth.currentUser;
export const selectLoading = (state: RootState) => state.auth.loading;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
