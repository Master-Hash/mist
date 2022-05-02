import { useVueLoader } from "../loader.js";
import Counter from "./Counter.vue";


export default () => {
  useVueLoader(Counter);
  return <></>;
};
