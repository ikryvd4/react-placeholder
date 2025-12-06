import { createSlice } from "@reduxjs/toolkit";
import type { UserState } from "./users.types";
import { fetchUsers } from "./users.thunk";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  page: 1,
  total: 0,
  limit: 2,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchUsers.fulfilled, (state, action) => ({
        ...state,
        users: action.payload.data,
        total: action.payload.total,
        loading: false,
      }))
      .addCase(fetchUsers.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload ?? "Failed to fetch posts",
      }));
  },
});

export default usersSlice.reducer;
