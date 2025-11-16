import { type State, type Action } from "./types";

const initialState: State = {
  counter: 0,
};

export function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + 1 };
    case "DEC":
      return { ...state, counter: state.counter - 1 };
    case "RND":
      return { ...state, counter: action.payload };
    case "RESET":
      return { ...state, counter: 0 };
    default:
      return state;
  }
}
