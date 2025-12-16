import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {loadState, saveState} from "./localStorage";
import {todosReducer} from "./todos/todos.slice";
import {counterReducer} from "./counter/counter.slice";
import {themeReducer} from "@app/store/theme/theme.slice.tsx";

const preloadedState = loadState();

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        counter: counterReducer,
        theme: themeReducer,
    },
    preloadedState,
});

store.subscribe(() => saveState(store.getState()));

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
