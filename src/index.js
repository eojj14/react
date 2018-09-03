import React from "react";
import ReactDOM from "react-dom";
import classes from "./test.css";

const App = () => {
  return <div className={classes.red}>Hello React!</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));