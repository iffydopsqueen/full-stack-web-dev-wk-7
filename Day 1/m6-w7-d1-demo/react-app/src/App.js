import React, { Component } from "react";
import BarChart from "./BarChart";
import { getAppendedData, getTruncatedData, getUpdatedData } from "./helpers";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    // Ensure that the bar chart is displayed on initial page load
    this.handleButtonClick('add');
  }

  handleButtonClick(action) {
    let newData;
    switch (action) {
      case 'add':
        newData = getAppendedData(this.state.data);
        break;
      case 'remove':
        newData = getTruncatedData(this.state.data);
        break;
      case 'update':
        newData = getUpdatedData(this.state.data);
        break;
      default:
        newData = this.state.data;
    }
    this.setState({ data: newData });
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: "20px" }}>
          <button onClick={() => this.handleButtonClick('add')}>Add item</button>
          <button onClick={() => this.handleButtonClick('remove')}>Remove item</button>
          <button onClick={() => this.handleButtonClick('update')}>Update values</button>
        </div>
        <BarChart data={this.state.data} />
      </div>
    );
  }
}

export default App;