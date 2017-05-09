import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';

import App from './containers/App';
import createStore from './store';
import appReducer from './containers/App/reducers';

ReactDOM.render(
  <Provider store={createStore(appReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
