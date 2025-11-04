import { ModalProvider } from "./modal/ModalProvider";
import { CounterProvider } from "./counter/CounterProvider";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CounterProvider>
      <ModalProvider>{children}</ModalProvider>
    </CounterProvider>
  );
};
