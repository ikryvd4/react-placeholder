// import { useCounter } from "@app/store/CounterContext";

import { useDispatch, useSelector } from "react-redux";
import css from "./Counter.module.css";

type State = {
  counter: number;
};

export function Counter() {
  // const { state, dispatch } = useCounter();
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state.counter);

  const onIncrement = () => {
    dispatch({ type: "INC" });
  };

  const onDecrement = () => {
    dispatch({ type: "DEC" });
  };
  const onReset = () => {
    dispatch({ type: "RESET" });
  };

  const onRandom = () => {
    const random = Math.floor(Math.random() * 100);
    dispatch({ type: "RND", payload: random });
  };

  return (
    <div className={css.counter}>
      <div className={css.buttons}>
        <button type="button" className={css.button} onClick={onIncrement}>
          Increment
        </button>
        <button type="button" className={css.button} onClick={onDecrement}>
          Decriment
        </button>
        <button type="button" className={css.button} onClick={onReset}>
          Reset
        </button>
        <button type="button" className={css.button} onClick={onRandom}>
          Random
        </button>
      </div>
      <div className={css.content}>{state}</div>
    </div>
  );
}
