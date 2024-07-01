import { SignUpPayload, User } from "@/types/user.type";
import { useAppSelector } from "@/useRedux/stores/hook";
import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import { toast } from "react-toastify";
import { call, delay, fork, put, select, take } from "redux-saga/effects";
import { LoginPayload, authActions, selectIsLoggedIn } from "./authSlice";
import { signIn, signUp } from "@/apis/auth.api";
import { ResponseType } from "@/types/response.type";

function* handleLogin(payload: LoginPayload) {
  try {
    const response: ResponseType<User> = yield signIn(
      payload.username,
      payload.password
    );

    if (response.status !== 200) {
      toast.error(response.message);
      yield put(authActions.loginFailed("Login fail"));
    } else {
      localStorage.setItem("access_token", response.data.token);
      yield put(authActions.loginSuccess(response.data));
    }

    // );

    // // Redirect to Admin page
    // yield put(push("/admin/dashboard"));
  } catch (error) {
    yield put(authActions.loginFailed("Login fail")); // Dispatch action
  }
}
function* handleRegister(payload: SignUpPayload) {
  try {
    const response: ResponseType<User> = yield signUp(
      payload.username,
      payload.password,
      payload.email,
      payload.gender
    );
    if (response.status !== 200) {
      toast.error(response.message);
      yield put(authActions.loginFailed("Login fail"));
    } else {
      localStorage.setItem("access_token", response.data.token);
      yield put(authActions.registerSuccess(response.data));
    }

    // Redirect to Admin page
    // yield put(push("/admin/dashboard"));
  } catch (error) {
    toast.error("Register fail");
    yield put(authActions.registerFailed("Login fail")); // Dispatch action
  }
}

function* handleLogout() {
  localStorage.removeItem("access_token");

  toast.warning("Logout success");
  // // Redirect to Login page
  // yield put(push("/login"));
}

function* watchAuthFlow() {
  while (true) {
    const isLoggedIn: boolean = yield select(selectIsLoggedIn);
    console.log(isLoggedIn);

    // const isLoggedIn = Boolean(localStorage.getItem("access_token"));

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        authActions.login.type
      );
      yield fork(handleLogin, action.payload); // Non-blocking
    }

    if (isLoggedIn) {
      yield take(authActions.logout.type);
      yield call(handleLogout);
    } // Blocking - wait for the logout function to finish before continuing to watch watchLoginFlow
  }
}
function* watchRegisterFlow() {
  while (true) {
    const isLoggedIn: boolean = yield select(selectIsLoggedIn);

    if (!isLoggedIn) {
      const actionRegister: PayloadAction<SignUpPayload> = yield take(
        authActions.register.type
      );
      yield fork(handleRegister, actionRegister.payload); // Non-blocking
    }

    if (isLoggedIn) {
      yield take(authActions.logout.type);
      yield call(handleLogout);
    } // Blocking - wait for the logout function to finish before continuing to watch watchLoginFlow
  }
}

export function* authSaga() {
  yield fork(watchAuthFlow);
  yield fork(watchRegisterFlow);
}
