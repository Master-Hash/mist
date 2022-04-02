import { Component } from "react";
import type { ReactElement, MouseEvent } from "react";
import type { Point } from "./utils/type.js";


export class Mouse extends Component<RenderPropsType, Point> {
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

type RenderPropsType = {
  render: (mouse: Point) => ReactElement;
};