import { Component, ReactSVG, useEffect, useState } from "react";
import type { MouseEvent, FC, ReactElement } from "react";
// import { useAppSelector } from "./app/hooks.js";
// import { selectAngle } from "./features/move/moveSlice.js";
import Sky from "./Sky.js";
import Ground from "./Ground.js";
import CannonBase from "./CannonBase.js";
import CannonPipe from "./CannonPipe.js";
import { calculateAngle } from "./utils/helper.js";

export const Game = () => {
  return <Mouse render={point =>
    <svg
      viewBox="-600 -575 1200 675"
      preserveAspectRatio="xMidYMid meet"
    >
      <Sky />
      <Ground />
      <CannonPipe rotation={calculateAngle(0, 0, point.x, point.y)} />
      <CannonBase />
    </svg>
  }
  />;
};

class Mouse extends Component<RenderPropsType, Point> {
  // class field 好文明，免去 constructor 和 bind 之苦
  state = { x: 0, y: 0 };
  svg: SVGSVGElement | null = null;

  handleMouseMove = (event: MouseEvent) => {
    if (this.svg) {
      const point = this.svg.createSVGPoint();
      point.x = event.clientX;
      point.y = event.clientY;
      const { x, y } = point.matrixTransform(this.svg.getScreenCTM()?.inverse());
      this.setState({ x, y, });
    }
    else {
      console.error();
    }
  };

  componentDidMount() {
    this.svg = document.querySelector("svg");
  }

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

type Point = {
  x: number;
  y: number;
};

type RenderPropsType = {
  render: (mouse: Point) => ReactElement;
};
