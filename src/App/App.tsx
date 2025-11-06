import { useModalManager, ModalProvider } from "@app/context/ModalProvider";
import Button from "@components/atoms/Button/Button";

import "./App.css";

function AppProvider() {
  const { openModal } = useModalManager();

  const handleOpenNested = () => openModal(<NestedModal open={openModal} />);
  const handleOpenSimple = () => openModal(<h2>Modal 2</h2>);

  return (
    <div>
      <Button onClick={handleOpenNested} />
      <Button onClick={handleOpenSimple} />
    </div>
  );
}

type NestedModalProps = {
  open: (node: React.ReactNode) => void;
};

function NestedModal({ open }: NestedModalProps) {
  const handleOpenInner = () => open(<h2>Lorem, ipsum dolor.</h2>);

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-semibold mb-2">Modal 1</h2>
      <p className="mb-4">Lorem ipsum dolor sit amet.</p>
      <Button onClick={handleOpenInner} />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ModalProvider>
        <AppProvider></AppProvider>
      </ModalProvider>
    </>
  );
}
