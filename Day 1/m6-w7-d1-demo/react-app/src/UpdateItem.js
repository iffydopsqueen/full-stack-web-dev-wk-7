import React, { Component } from "react";
import NodeGroup from "react-move/NodeGroup";
import { getUpdatedData } from "./helpers";

class UpdateItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate() {
    this.setState({
      data: getUpdatedData(this.state.data)
    });
  }

  startTransition(d, i) {
    return { value: d.value, y: i * 27, opacity: 1 };
  }

  updateTransition(d, i) {
    return { value: d.value, y: i * 27, timing: { duration: 300 } };
  }

  render() {
    return (
      <div>
        <button onClick={this.handleUpdate}>Update values</button>
        <svg width="800" height="200">
          <g className="chart" transform="translate(100,10)">
            <NodeGroup
              data={this.state.data}
              keyAccessor={d => d.id}
              start={this.startTransition}
              update={this.updateTransition}
            >
              {nodes => (
                <g>
                  {nodes.map(({ key, data, state }) => (
                    <g key={key} transform={`translate(0, ${state.y})`}>
                      <rect
                        width={data.value * 5}
                        height="25"
                        style={{ fill: "#348AA7", opacity: state.opacity }}
                      />
                      <text x={data.value * 5 - 6} y="13" fill="#fff">
                        {data.value.toFixed(0)}
                      </text>
                    </g>
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

export default UpdateItem;