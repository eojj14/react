import React from "react";
import ReactDOM from "react-dom";
import classes from "./test.scss";

const App = () => {
  return <div className={classes.red}>Hello React!</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));