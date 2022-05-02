import { useEffect } from "react";
import type { ReactElement } from "react";
import { createRoot } from "react-dom/client";

export function useReactLoader(c: ReactElement) {
  useEffect(() => {
    const container = document.querySelector("#app")!;
    const root = createRoot(container);
    root.render(c);
    return () => {
      root.unmount();
    };
  }, []);
}
