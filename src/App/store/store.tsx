import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { loadState, saveState } from "@shared/utils/localStorage";
import { todosReducer } from "./todos/todos.slice";
import { counterReducer } from "./counter/counter.slice";
import { themeReducer } from "@app/store/theme/theme.slice.tsx";

type RootState = {
  theme: ReturnType<typeof themeReducer>;
  todos: ReturnType<typeof todosReducer>;
  counter: ReturnType<typeof counterReducer>;
};

const STORAGE_KEYS = {
  ROOT_STATE: "rootState",
};

const preloadedState = loadState<RootState>(STORAGE_KEYS.ROOT_STATE);

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    counter: counterReducer,
    theme: themeReducer,
  },
  preloadedState,
});

store.subscribe(() => saveState(STORAGE_KEYS.ROOT_STATE, store.getState()));

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
