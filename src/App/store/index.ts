import {
  applyMiddleware,
  combineReducers,
  createStore,
  type Dispatch,
} from "redux";
import { thunk } from "redux-thunk";
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
type UsersFetch = {
  type: "USERS_FETCH";
};

type UsersFetchSuccess = {
  type: "USERS_FETCH_SUCCESS";
  payload: {
    users: UserItem[];
    total: number;
  };
};

type UsersFetchFailed = {
  type: "USERS_FETCH_FAILED";
  payload: string;
};

type UsersNextPage = {
  type: "USERS_NEXT_PAGE";
};

type UsersDelete = {
  type: "USERS_DELETE";
  payload: number;
};

export type UserAction =
  | UsersFetch
  | UsersFetchSuccess
  | UsersFetchFailed
  | UsersNextPage
  | UsersDelete;

type UserItem = {
  id: number;
  name: string;
};

type UserState = {
  users: UserItem[];
  loading: boolean;
  error: null | string;
  total: number;
  page: number;
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  page: 1,
  total: 0,
};

function reducer(state = initialState, action: UserAction): UserState {
  switch (action.type) {
    case "USERS_FETCH":
      return { ...state, loading: true };
    case "USERS_FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload.users,
        total: action.payload.total,
      };
    case "USERS_FETCH_FAILED":
      return { ...state, loading: false, error: action.payload };
    case "USERS_NEXT_PAGE":
      return { ...state, page: state.page + 1 };
    case "USERS_DELETE":
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload),
      };
    default:
      return state;
  }
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

export function fetchUsers(page = 1) {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: "USERS_FETCH" });
      const data = await api.getUsers(page, 3);
      dispatch({
        type: "USERS_FETCH_SUCCESS",
        payload: {
          users: data.users,
          total: data.total,
        },
      });
    } catch {
      dispatch({ type: "USERS_FETCH_FAILED", payload: "FAILED FETCH" });
    }
  };
}

type UsersResponse = {
  users: UserItem[];
  total: number;
};

const api = {
  url: "https://jsonplaceholder.typicode.com/users",
  async getUsers(page = 1, limit = 2): Promise<UsersResponse> {
    const query = new URLSearchParams({
      _page: String(page),
      _limit: String(limit),
    });
    const res = await fetch(this.url + "?" + query);
    if (!res.ok) {
      throw new Error("Failed fetch");
    }

    const total = res.headers.get("x-total-count") || 0;
    const data = await res.json();

    return {
      users: data,
      total: Number(total),
    };
  },
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const rootReducer = combineReducers({ users: reducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
