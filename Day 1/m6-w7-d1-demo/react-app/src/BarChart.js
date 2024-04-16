import React, { Component } from "react";
import NodeGroup from "react-move/NodeGroup";
import { getInitialData, getAppendedData, getTruncatedData, getUpdatedData } from "./helpers";

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getInitialData()
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleAdd() {
    this.setState({
      data: getAppendedData(this.state.data)
    });
  }

  handleRemove() {
    this.setState({
      data: getTruncatedData(this.state.data)
    });
  }

  handleUpdate() {
    this.setState({
      data: getUpdatedData(this.state.data)
    });
  }

  startTransition(d, i) {
    return { value: 0, y: i * 25, opacity: 0 };
  }

  enterTransition(d) {
    return { value: [d.value], opacity: [1], timing: { duration: 250 } };
  }

  updateTransition(d, i) {
    return { value: [d.value], y: [i * 25], timing: { duration: 300 } };
  }

  leaveTransition(d) {
    return { y: [-25], opacity: [0], timing: { duration: 250 } };
  }

  render() {
    return (
      <div>
        <div id="menu" style={{ marginBottom: "20px" }}>
          <button onClick={this.handleAdd}>Add item</button>
          <button onClick={this.handleRemove}>Remove item</button>
          <button onClick={this.handleUpdate}>Update values</button>
        </div>
        <svg width="800" height="2200">
          <g className="chart" transform="translate(100,10)">
            <NodeGroup
              data={this.state.data}
              keyAccessor={d => d.id}
              start={this.startTransition}
              enter={this.enterTransition}
              update={this.updateTransition}
              leave={this.leaveTransition}
            >
              {nodes => (
                <g>
                  {nodes.map(({ key, data, state }) => (
                    <g className="bar-group" key={key} transform={`translate(0, ${state.y})`}>
                      <rect
                        y={data.y}
                        width={data.value * 5}
                        height="23"
                        style={{ fill: "#348AA7", opacity: state.opacity }}
                      />
                      <text
                        className="value-label"
                        x={data.value * 5 - 6}
                        y="13"
                        alignmentBaseline="middle"
                      >
                        {data.value.toFixed(0)}
                      </text>
                      <text
                        className="name-label"
                        x="-6"
                        y="13"
                        alignmentBaseline="middle"
                        style={{ opacity: state.opacity }}
                      >
                        {data.name}
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

export default BarChart;