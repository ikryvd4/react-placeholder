import { createAsyncThunk } from "@reduxjs/toolkit";
import type { UserItem } from "./users.types";
import { api } from "@shared/api/api";

export const fetchUsers = createAsyncThunk<
  { data: UserItem[]; total: number },
  { page: number; limit: number },
  { rejectValue: string }
>("users/fetchUsers", async ({ page, limit }, { rejectWithValue }) => {
  try {
    const { data, total } = await api.getUsers(page, limit);
    return { data, total };
  } catch (error: any) {
    return rejectWithValue(error.message || "Failed to fetch users");
  }
});
