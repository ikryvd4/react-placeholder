import { createContext, useState, useContext } from "react";
import Modal from "@components/atoms/Modal/Modal";

type ModalContextType = {
  isOpen: boolean;
  openModal: (name: React.ReactNode) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const openModal = (node: React.ReactNode) => {
    setIsOpen(true);
    setContent(node);
  };
  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <Modal isOpen={isOpen} onClose={closeModal}>
        {content}
      </Modal>
    </ModalContext.Provider>
  );
}

export const useModalManager = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalManager must be used within a ModalProvider");
  }
  return context;
};
