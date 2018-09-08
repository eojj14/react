import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button from './components/Button/Button';

library.add(fab, fas);

const App = () => [
  <Button
    text='Google'
    href='http://www.google.com'
    iconRight={['fas', 'arrow-right']}
    iconLeft={['fas', 'arrow-left']}
    key='1'
  />,
];

ReactDOM.render(<App />, document.getElementById('root')); // eslint-disable-line no-undef
