import { Component } from "react";
import type { MouseEvent, FC, ReactElement } from "react";
import favicon from "./favicon.svg";

const Cat: FC<{ mouse: Point; }> = ({ mouse }) => {
  return (
    <img
      src={favicon}
      className="absolute w-32 h-32 -translate-x-16 -translate-y-16"
      // 如果是 <svg>，可以写成 transform 动态构造
      style={{ left: mouse.x, top: mouse.y }} />
  );
};

type Point = {
  x: number;
  y: number;
};

type RenderPropsType = {
  render: (mouse: Point) => ReactElement;
};


class Mouse extends Component<RenderPropsType, Point> {
  // class field 好文明，免去 constructor 和 bind 之苦
  state = { x: 0, y: 0 };

  handleMouseMove = (event: MouseEvent) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

function MouseTracker() {
  return <>
    <h1>移动鼠标!</h1>
    <Mouse render={mouse =>
      <Cat mouse={mouse} />}
    />
  </>;
}

export function RenderProps() {
  return <>
    <MouseTracker />
  </>;
}