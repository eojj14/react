import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'; //Loads global styles for bootstrap
import Button from './components/Button';


const App = () => {
  return [
    <Button text='Google' href='http://www.google.com' />,
  ]
};

ReactDOM.render(<App />, document.getElementById("root"));