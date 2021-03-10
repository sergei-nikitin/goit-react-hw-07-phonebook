import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import phoneBookReducer from "./pb-reducer";

const midleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];



const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
  },
  midleware,
  decTools: process.env.NODE_ENV === "development",
});

export default store;
