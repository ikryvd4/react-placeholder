import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/reducer";
import { usersReducer } from "./users/reducer";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
