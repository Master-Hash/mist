import { useEffect } from "react";

export function BreakoutGame() {
  useEffect(() => {
    const canvas = document.querySelector("#myCanvas")! as HTMLCanvasElement;
    // 输出两遍？StrictMode 的特性，不是 bug
    // console.log(canvas);

    const ctx = canvas.getContext("2d")!;
    // 疑惑：`let` 怪怪的
    let x = canvas.width / 2;
    let y = canvas.height - 30;
    const dx = 2;
    const dy = -2;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
      x += dx;
      y += dy;
    }
    const drawID = setInterval(draw, 10);
    return () => {
      clearInterval(drawID);
    };
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
