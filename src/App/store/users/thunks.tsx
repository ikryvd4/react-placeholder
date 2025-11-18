import { ACTION } from "./actions";
import { type UsersAction } from "./types";
import { type Dispatch } from "redux";
import axios from "axios";

export function fetchUsers() {
  return async (dispatch: Dispatch<UsersAction>) => {
    try {
      dispatch({ type: ACTION.FETCH_USERS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: ACTION.FETCH_USERS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: ACTION.FETCH_USERS_ERROR,
        payload: "ERROR FETCH USERS",
      });
    }
  };
}
