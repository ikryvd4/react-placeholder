import { Portal } from "../Portal/Portal";

type ModalPropsType = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

import "./Modal.css";

export function Modal({ isOpen, onClose, children }: ModalPropsType) {
  return (
    isOpen && (
      <Portal>
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal__overlay" onClick={onClose}>
            <div
              className="modal__content"
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>
        </div>
      </Portal>
    )
  );
}
