import { defineCustomElement } from "vue";
import Counter from "./Counter.ce.vue";
import { useWebComponentLoader } from "../loader.js";

const CounterElement = defineCustomElement(Counter);

export default () => {
  useWebComponentLoader("my-counter", CounterElement);
  return <></>;
};
