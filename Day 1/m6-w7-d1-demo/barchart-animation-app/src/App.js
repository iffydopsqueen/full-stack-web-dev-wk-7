import React, { useState } from "react";
import BarChart from "./BarChart";

function App() {
  const [barChartKey, setBarChartKey] = useState(0); // Key to force re-rendering of BarChart

  return (
    <div>
      <BarChart key={barChartKey} />
    </div>
  );
}

export default App;