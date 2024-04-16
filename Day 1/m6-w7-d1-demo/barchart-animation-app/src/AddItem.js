import React, { Component } from "react";
import NodeGroup from "react-move/NodeGroup";
import { getAppendedData } from "./helpers";

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.setState({
      data: getAppendedData(this.state.data)
    });
  }

  startTransition(d, i) {
    return { value: 0, y: i * 27, opacity: 0 };
  }

  enterTransition(d) {
    return { value: [d.value], opacity: [1], timing: { duration: 250 } };
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAdd}>Add item</button>
        <svg width="800" height="200">
          <g className="chart" transform="translate(100,10)">
            <NodeGroup
              data={this.state.data}
              keyAccessor={d => d.id}
              start={this.startTransition}
              enter={this.enterTransition}
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

export default AddItem;
