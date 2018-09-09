import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import List from './components/List/List';

library.add(faFacebook, faPlus, faMinus);

const App = () => [
  <List
    items={[
      { title: 'Item 1' },
      { title: 'Item 2' },
      { title: 'Item 3' }
    ]}
    key='1'
  />
]

ReactDOM.render(<App />, document.getElementById('root')); // eslint-disable-line no-undef
