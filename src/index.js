import React from 'react';
import { render } from 'react-dom';
import makeStore from './redux/makeStore';
import Root from './Root.jsx';
import './index.css';

const initialState = {
  profiles: []
}

const store = makeStore(initialState);

render(<Root store={store} />, document.getElementById('root'));
