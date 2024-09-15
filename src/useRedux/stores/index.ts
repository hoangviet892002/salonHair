import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import authReducer from "../features/auth/authSlice";
import createSagaMiddleware from "redux-saga";
import { history } from "@/utils/history";
import rootSaga from "./rootSaga";

// Redux Persist imports
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import { persistReducer, persistStore } from "redux-persist";

// Create Redux Persist config
const persistConfig = {
  key: "root", // Root key for persisted storage
  storage, // Default storage is localStorage
  whitelist: ["auth"], // Add the reducers you want to persist (e.g., auth)
};

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
});

// Create a persisted reducer using redux-persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer, // Use persisted reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for non-serializable redux-persist actions
    }).concat(sagaMiddleware, routerMiddleware(history)),
});

// Run sagas
sagaMiddleware.run(rootSaga);

// Create the persistor
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
