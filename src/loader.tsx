import { useEffect } from "react";
import type { ReactElement } from "react";
import { createRoot } from "react-dom/client";
import { createApp, defineCustomElement } from "vue";
import type { Component } from "vue";


function useSelectorId() {
  return Math.random().toString(36).slice(-8);
}

function useContainer() {
  const randomID = useSelectorId();
  const div = document.createElement("div");
  div.id = randomID;
  div.classList.add("flex", "flex-col", "flex-auto");
  const container = document.querySelector("#app")!;
  useEffect(() => {
    container.append(div);
    return () => {
      container.removeChild(div);
    };
  }, []);
  return div;
}

export function useReactLoader(c: ReactElement) {
  const e = useContainer();
  useEffect(() => {
    const root = createRoot(e);
    root.render(c);
    return () => {
      root.unmount();
    };
  }, []);
}

export function useVueLoader(c: Component) {
  const e = useContainer();
  useEffect(() => {
    const app = createApp(c);
    app.mount(e);
    return () => {
      app.unmount();
    };
  }, []);
}

export function useWebComponentLoader(name: string, constructor: CustomElementConstructor) {
  const e = useContainer();
  useEffect(() => {
    if (customElements.get(name) === undefined) {
      customElements.define(name, constructor);
    }
    const ce = document.createElement(name);
    e.append(ce);
    return () => {
      /**
       * custom elements cannot be undefined
       * @see https://github.com/WICG/webcomponents/issues/754
       */
      e.removeChild(ce);
    };
  }, []);
}
