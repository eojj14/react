import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Button from './components/Button/Button';


const App = () => [
  <Button text='Google' href='http://www.google.com' key='useless' />,
];

ReactDOM.render(<App />, document.getElementById('root')); // eslint-disable-line no-undef
