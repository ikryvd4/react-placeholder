import "./AskConfirm.css";

type AskConfirmType = {
  title: string;
  onClose: () => void;
  onConfirm: () => void;
};

export function AskConfirm({ onClose, onConfirm, title }: AskConfirmType) {
  return (
    <div className="ask-confirm">
      <h2 className="ask-confirm__title">{title}</h2>

      <div className="ask-confirm__buttons">
        <button
          className="ask-confirm__btn ask-confirm__btn--yes"
          onClick={onConfirm}
        >
          Yes
        </button>
        <button
          className="ask-confirm__btn ask-confirm__btn--no"
          onClick={onClose}
        >
          No
        </button>
      </div>
    </div>
  );
}
