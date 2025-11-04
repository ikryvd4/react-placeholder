import { useCounter } from "./context/counter/CounterProvider";
import { useModal } from "./context/modal/ModalProvider";
import { AskConfirm } from "@shared/ui/AskConfirm/AskConfirm";
import {
  onIncrement,
  onDecrement,
  onRandom,
  onReset,
} from "./context/counter/action";
//---------------------------------------------------------------------------
import NumberFlow from "@number-flow/react";

import "./App.css";

export function App() {
  const { openModal, closeModal } = useModal();
  const { count, dispatch } = useCounter();

  const handleRandom = () => {
    const rnd = Math.floor(Math.random() * 100);
    dispatch(onRandom(rnd));
    closeModal();
  };

  const handleReset = () => {
    dispatch(onReset());
    closeModal();
  };

  return (
    <>
      <div style={{ display: "flex", gap: 30, marginBottom: 50 }}>
        <button
          type="button"
          className="button"
          onClick={() => dispatch(onIncrement())}
        >
          Increment
        </button>
        <button
          type="button"
          className="button"
          onClick={() => dispatch(onDecrement())}
        >
          Decrement
        </button>
        <button
          type="button"
          className="button"
          onClick={() =>
            openModal(
              <AskConfirm
                onClose={closeModal}
                onConfirm={handleRandom}
                title="Are you sure you want to random the counter?"
              />
            )
          }
        >
          Random
        </button>
        <button
          type="button"
          className="button"
          onClick={() =>
            openModal(
              <AskConfirm
                onClose={closeModal}
                onConfirm={handleReset}
                title="Are you sure you want to reset the counter?"
              />
            )
          }
        >
          Reset
        </button>
      </div>

      <div className="info">
        Counter: <NumberFlow value={count} />
      </div>
    </>
  );
}
