import { onDecrement, onIncrement, onRandom } from "./action";

export type CounterType = {
  count: number;
};

export type ActionType =
  | ReturnType<typeof onIncrement>
  | ReturnType<typeof onRandom>
  | ReturnType<typeof onDecrement>
  | { type: "RESET" };

export type CounterContextType = {
  count: number;
  dispatch: React.Dispatch<ActionType>;
};
