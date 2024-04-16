import React from "react";
import { render } from "react-dom";
import App from "./App";
import data from "./data";

const Tree = () => {
  return <App data={data} width={600} height={500} />;
};

render(<Tree />, document.getElementById("root"));
