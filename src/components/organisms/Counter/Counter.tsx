import { useAppDispatch, useAppSelector } from "@app/store/store";
import { increment, reset } from "@app/store/counter/counter.slice";

export function Counter() {
  const { value } = useAppSelector((state) => state.counter);

  const dispatch = useAppDispatch();

  return (
    <div className="counter">
      <div className="buttons" style={{ display: "flex", gap: "2rem" }}>
        <button type="button" onClick={() => dispatch(increment())}>
          Plus
        </button>
        <button type="button" onClick={() => dispatch(reset())}>
          reset
        </button>
      </div>

      <div className="value">{value}</div>
    </div>
  );
}
