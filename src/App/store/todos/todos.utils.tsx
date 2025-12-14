import type { TodoState } from "./todos.types";

type CounterType = {
  value: number;
};

export type RootState = {
  todos: TodoState;
  counter: CounterType;
};

export const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem("todosState");
    if (!serializedState) return undefined;

    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Cannot load state", e);
    return undefined;
  }
};

export const saveState = (state: RootState) => {
  try {
    const serializedState = {
      todos: state.todos,
      counter: state.counter,
    };

    localStorage.setItem("todosState", JSON.stringify(serializedState));
  } catch (e) {
    console.error("Cannot save state", e);
  }
};
