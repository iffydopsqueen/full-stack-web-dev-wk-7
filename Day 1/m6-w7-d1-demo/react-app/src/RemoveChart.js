import React, { Component } from "react";
import { getInitialData, getTruncatedData } from "./helpers";
import NodeGroup from "react-move/NodeGroup";

class RemoveChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: getInitialData()
        };

        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove() {
        this.setState({
            data: getTruncatedData(this.state.data)
        });
    }

    startTransition(d, i) {
        return { y: i * 27, opacity: 1 };
    }

    leaveTransition(d) {
        return { y: [-27], opacity: [0], timing: { duration: 250 } };
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemove}>Remove item</button>
                <svg width="800" height="2200">
                    <g className="chart" transform="translate(100,10)">
                        <NodeGroup 
                            data={this.state.data}
                            keyAccessor={d => d.name}
                            start={this.startTransition}
                            leave={this.leaveTransition}
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

export default RemoveChart;