import { useEffect } from "react";
import { BALLRADIUS, BALL_COLOR, INTERVAL } from "./utils/constant.js";


export function BreakoutGame() {
  useEffect(() => {
    const canvas = document.querySelector("#myCanvas")! as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;

    // 疑惑：`let` 怪怪的
    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -2;

    function draw() {
      if (x + dx > canvas.width - BALLRADIUS || x + dx < BALLRADIUS) {
        dx = -dx;
      }
      if (y + dy > canvas.height - BALLRADIUS || y + dy < BALLRADIUS) {
        dy = -dy;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();
      x += dx;
      y += dy;
    }
    const drawID = setInterval(draw, INTERVAL);
    return () => {
      clearInterval(drawID);
    };

    function drawBall() {
      ctx.beginPath();
      ctx.arc(x, y, BALLRADIUS, 0, Math.PI * 2);
      ctx.fillStyle = BALL_COLOR;
      ctx.fill();
      ctx.closePath();
    }
  }, []);

  return <>
    <canvas
      id="myCanvas"
      // canvas 默认尺寸 300*150
      // 不应当写在 className 里
      width="480" height="320"
      className="block
      bg-[#eee]
      mx-auto my-0"
    />
  </>;
}
