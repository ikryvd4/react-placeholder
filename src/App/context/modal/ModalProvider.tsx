import { createContext, useContext, useState } from "react";
import { Modal } from "@shared/ui/Modal/Modal";

type ContextModalType = {
  isOpen: boolean;
  closeModal: () => void;
  openModal: (node: React.ReactNode) => void;
};

const ContextModal = createContext<ContextModalType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode | null>(null);

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
  };

  const openModal = (node: React.ReactNode) => {
    setIsOpen(true);
    setContent(node);
  };

  return (
    <ContextModal.Provider value={{ isOpen, closeModal, openModal }}>
      {children}
      <Modal onClose={closeModal} isOpen={isOpen}>
        {content}
      </Modal>
    </ContextModal.Provider>
  );
}

export function useModal() {
  const context = useContext(ContextModal);
  if (!context) {
    throw new Error("Ops ModalProvider has a problem");
  }

  return context;
}
