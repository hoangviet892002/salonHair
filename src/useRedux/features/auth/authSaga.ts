import { SignUpPayload } from "@/types/user.type";
import { useAppSelector } from "@/useRedux/stores/hook";
import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import { toast } from "react-toastify";
import { call, delay, fork, put, select, take } from "redux-saga/effects";
import { LoginPayload, authActions, selectIsLoggedIn } from "./authSlice";

function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(1000); // yield call(api, '')

    localStorage.setItem("access_token", "fake_token");
    yield put(
      authActions.loginSuccess({
        avatar: "",
        email: "",
        role: "USER",
        token: "fake",
        username: payload.username,
      })
    );
    // );

    // Redirect to Admin page
    yield put(push("/admin/dashboard"));
  } catch (error) {
    yield put(authActions.loginFailed("Login fail")); // Dispatch action
  }
}
function* handleRegister(payload: SignUpPayload) {
  try {
    yield delay(1000); // yield call(api, '')
    localStorage.setItem("access_token", "fake_token");
    yield put(
      authActions.loginSuccess({
        username: payload.username,
        email: payload.email,
        avatar: "",
        role: "USER",
        token: "fake_token",
      })
    );

    toast.warning("Register success");
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

    // const isLoggedIn = Boolean(localStorage.getItem("access_token"));

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        authActions.login.type
      );
      yield fork(handleLogin, action.payload); // Non-blocking
    }

    yield take(authActions.logout.type);
    yield call(handleLogout); // Blocking - wait for the logout function to finish before continuing to watch watchLoginFlow
  }
}
function* watchRegisterFlow() {
  while (true) {
    const isLoggedIn: boolean = yield select(selectIsLoggedIn);
    console.log(isLoggedIn);

    if (!isLoggedIn) {
      const actionRegister: PayloadAction<SignUpPayload> = yield take(
        authActions.register.type
      );
      yield fork(handleRegister, actionRegister.payload); // Non-blocking
    }

    yield take(authActions.logout.type);
    yield call(handleLogout); // Blocking - wait for the logout function to finish before continuing to watch watchLoginFlow
  }
}

export function* authSaga() {
  yield fork(watchAuthFlow);
  yield fork(watchRegisterFlow);
}
