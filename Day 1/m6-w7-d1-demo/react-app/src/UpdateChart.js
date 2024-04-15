import React, { Component } from "react";
import { getInitialData, getUpdatedData } from "./helpers";
import NodeGroup from "react-move/NodeGroup";

class UpdateChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: getInitialData()
        };

        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate() {
        this.setState({
            data: getUpdatedData(this.state.data)
        });
    }

    startTransition(d, i) {
        return { y: i * 27 };
    }

    updateTransition(d) {
        return { opacity: [1], timing: { duration: 300 } };
    }

    render() {
        return (
            <div>
                <button onClick={this.handleUpdate}>Update values</button>
                <svg width="800" height="2200">
                    <g className="chart" transform="translate(100,10)">
                        <NodeGroup
                            data={this.state.data}
                            keyAccessor={d => d.name}
                            start={this.startTransition}
                            update={this.updateTransition}
                        >
                            {nodes => (
                                <g>
                                    {nodes.map(({ key, state }) => (
                                        <rect
                                            key={key}
                                            y={state.y}
                                            width="0"
                                            height="25"
                                            style={{ fill: "#348AA7", opacity: state.opacity }}
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

export default UpdateChart;