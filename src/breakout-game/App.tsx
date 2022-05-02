import { useEffect } from "react";
import { useReactLoader } from "../loader.js";
import { BALLRADIUS, BALL_COLOR, BRICKCOLUMNCOUNT, BRICKHEIGHT, BRICKOFFSETLEFT, BRICKOFFSETTOP, BRICKPADDING, BRICKROWCOUNT, BRICKWIDTH, BRICK_COLOR, INTERVAL, PADDLE_COLOR } from "./utils/constant.js";



export function BreakoutGame() {
  useEffect(() => {
    const canvas = document.querySelector("#myCanvas")! as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    const paddleHeight = 10;
    const paddleWidth = 75;
    let paddleX = (canvas.width - paddleWidth) / 2;

    // 疑惑：`let` 怪怪的
    // 这些逻辑真该用 useReducer（不可，这是 canvas 游戏）或者 Redux 来办（
    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -2;

    let rightPressed = false;
    let leftPressed = false;

    const bricks = Array.from({ length: BRICKCOLUMNCOUNT }, (_, c) =>
      Array.from({ length: BRICKROWCOUNT }, (_, r) => {
        const x = (c * (BRICKWIDTH + BRICKPADDING)) + BRICKOFFSETLEFT;
        const y = (r * (BRICKHEIGHT + BRICKPADDING)) + BRICKOFFSETTOP;
        return { x, y };
      }));
    console.log(bricks);

    function draw() {
      if (x + dx > canvas.width - BALLRADIUS || x + dx < BALLRADIUS) {
        dx = -dx;
      }
      if (y + dy < BALLRADIUS) {
        dy = -dy;
      }
      else if (y + dy > canvas.height - BALLRADIUS - paddleHeight) {
        if (x > paddleX && x < paddleX + paddleWidth) {
          dy = -Math.abs(dy);
        }
        else if (y + dy > canvas.height - BALLRADIUS) {
          alert("GAME OVER");
          document.location.reload();
        }
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();
      drawPaddle();
      drawBricks();
      x += dx;
      y += dy;
    }

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    function keyDownHandler(e: KeyboardEvent) {
      if (e.code === "ArrowRight") {
        rightPressed = true;
      }
      else if (e.code === "ArrowLeft") {
        leftPressed = true;
      }
    }

    function keyUpHandler(e: KeyboardEvent) {
      if (e.code === "ArrowRight") {
        rightPressed = false;
      }
      else if (e.code === "ArrowLeft") {
        leftPressed = false;
      }
    }
    const drawID = setInterval(draw, INTERVAL);

    function drawBricks() {
      bricks.forEach(cs => {
        cs.forEach(rs => {
          const brickX = rs.x;
          const brickY = rs.y;
          ctx.beginPath();
          ctx.rect(brickX, brickY, BRICKWIDTH, BRICKHEIGHT);
          ctx.fillStyle = BRICK_COLOR;
          ctx.fill();
          ctx.closePath();
        });
      });
    }

    function drawBall() {
      ctx.beginPath();
      ctx.arc(x, y, BALLRADIUS, 0, Math.PI * 2);
      ctx.fillStyle = BALL_COLOR;
      ctx.fill();
      ctx.closePath();
    }
    function drawPaddle() {
      ctx.beginPath();
      ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
      ctx.fillStyle = PADDLE_COLOR;
      ctx.fill();
      ctx.closePath();
      if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
      }
      else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
      }
    }
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

export default () => {
  useReactLoader(<BreakoutGame />);
  return <></>;
};
