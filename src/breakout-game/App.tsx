import { useEffect } from "react";

export function BreakoutGame() {
  useEffect(() => {
    const canvas = document.querySelector("#myCanvas")! as HTMLCanvasElement;
    // 输出两遍？StrictMode 的特性，不是 bug
    // console.log(canvas);

    const ctx = canvas.getContext("2d")!;

    ctx.beginPath();
    ctx.rect(20, 40, 50, 50);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(160, 10, 100, 40);
    ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
    ctx.stroke();
    ctx.closePath();
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
