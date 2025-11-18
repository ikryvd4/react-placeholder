export type CounterState = {
  counter: number;
};

export type ActionCounter =
  | { type: "INC" }
  | { type: "DEC" }
  | { type: "RND"; payload: number }
  | { type: "RESET" };
