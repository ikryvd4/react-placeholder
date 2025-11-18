import { ACTION } from "./actions";

export type UsersAction =
  | { type: typeof ACTION.FETCH_USERS }
  | { type: typeof ACTION.FETCH_USERS_SUCCESS; payload: UserType[] }
  | { type: typeof ACTION.FETCH_USERS_ERROR; payload: string };

export type UserType = {
  id: number;
  name: string;
};

export type UsersState = {
  users: UserType[];
  loading: boolean;
  error: null | string;
};
