import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import reducers from './reducers';

import App from './components/App';

const ext = window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line no-underscore-dangle
const devtoolMiddleware = ext && ext();

const defaultState = {
  currentLocation: '/',
};

const store = createStore(
  reducers,
  defaultState,
  devtoolMiddleware,
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container'),
);
