import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function Portal({ children }: { children: React.ReactNode }) {
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = document.createElement("div");
    document.body.appendChild(el);
    setNode(el);

    return () => {
      document.body.removeChild(el);
      setNode(null);
    };
  }, []);

  if (!node) return;

  return createPortal(children, node);
}
