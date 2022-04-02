import { Component } from "react";
import type { MouseEvent } from "react";

class MouseTracker extends Component {
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
        <h1>移动鼠标!</h1>
        <p>当前的鼠标位置是 ({this.state.x}, {this.state.y})</p>
      </div>
    );
  }
}

export function Dev() {
  return <>
    <MouseTracker />
  </>;
}