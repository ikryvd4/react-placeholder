export type State = {
  counter: number;
};

export type Action =
  | { type: "INC" }
  | { type: "DEC" }
  | { type: "RND"; payload: number }
  | { type: "RESET" };
