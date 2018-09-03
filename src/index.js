import React from 'react';
import ReactDOM from 'react-dom';
import classes from './test.scss';
import Button from './components/Button';

const App = () => {
  return [
    <div className={classes.red}>Hello React!</div>,
    <Button text='Google' href='http://www.google.com' />
  ]
};

ReactDOM.render(<App />, document.getElementById("root"));