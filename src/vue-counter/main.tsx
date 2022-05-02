import { useVueLoader } from "../loader.js";
import Counter from "./Counter.vue";
import "../main.css";


export default () => {
  useVueLoader(Counter);
  return <></>;
};