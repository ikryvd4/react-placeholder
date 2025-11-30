import { configureStore } from "@reduxjs/toolkit";
import { reducerCounter } from "./reducer";

export const store = configureStore({ reducer: reducerCounter });
