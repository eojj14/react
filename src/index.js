import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faCheck, faTimes, faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import List from './components/List/List';

library.add(faFacebook, faPlus, faCheck, faTimes, faCaretRight, faCaretDown);

const App = () => [
  <List
    items={[
      { title: 'Item 1', completed: true, details: 'These are the details.' },
      { title: 'Item 2', completed: false },
      { title: 'Item 3', completed: true, details: 'These are the details.' }
    ]}
    key='List'
  />
]

ReactDOM.render(<App />, document.getElementById('root')); // eslint-disable-line no-undef
