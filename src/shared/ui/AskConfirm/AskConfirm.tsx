// import { useCounter } from "@app/context/counter/CounterProvider";

// import { onRandom } from "@app/context/counter/action";

import "./AskConfirm.css";

type AskConfirmType = {
  title: string;
  onClose: () => void;
  onConfirm: () => void;
};

export function AskConfirm({ onClose, onConfirm, title }: AskConfirmType) {
  return (
    <div className="ask-reset">
      <h2 className="ask-reset__title">{title}</h2>

      <div className="ask-reset__buttons">
        <button
          className="ask-reset__btn ask-reset__btn--yes"
          onClick={onConfirm}
        >
          Yes
        </button>
        <button className="ask-reset__btn ask-reset__btn--no" onClick={onClose}>
          No
        </button>
      </div>
    </div>
  );
}
