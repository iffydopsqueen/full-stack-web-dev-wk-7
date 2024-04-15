import React, { Component } from "react";
import NodeGroup from "react-move/NodeGroup";

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.startTransition = this.startTransition.bind(this);
  }

  startTransition(d, i) {
    return { y: i * 27 };
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        <svg width="800" height="2200">
          <g className="chart" transform="translate(100,10)">
            <NodeGroup
              data={data}
              keyAccessor={d => d.name}
              start={this.startTransition}
            >
              {nodes => (
                <g>
                  {nodes.map(({ key, state }) => (
                    <rect
                      key={key}
                      y={state.y}
                      width={state.value * 5}
                      height="25"
                      style={{ fill: "#348AA7", opacity: 1 }}
                    />
                  ))}
                </g>
              )}
            </NodeGroup>
          </g>
        </svg>
      </div>
    );
  }
}

export default BarChart;