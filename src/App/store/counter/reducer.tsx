import { type CounterState, type ActionCounter } from "./types";

const initialState: CounterState = {
  counter: 0,
};

export function counterReducer(state = initialState, action: ActionCounter) {
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
