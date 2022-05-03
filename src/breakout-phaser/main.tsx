import { useEffect } from "react";
import { useTitle } from "react-use";
import Phaser from "phaser";
import { useReactLoader } from "../loader.js";

function BreakoutPhaser() {
  useEffect(() => {
    // 仿佛 MDN 过时了（
    return () => { };
  }, []);
  return <></>;
}

export default () => {
  useReactLoader(<BreakoutPhaser />);
  useTitle("Breakout Game made with Phaser");
  return <></>;
};
