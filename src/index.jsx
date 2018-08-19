import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
// import { applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import _ from 'lodash';
import App from './components/App';

// const ext = window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line
// const devtoolMiddleware = ext && ext();
/* const middlewares = _.compact([
  applyMiddleware(thunk),
  devtoolMiddleware,
]);

 const defaultState = {};

const store = createStore(
  reducers,
  defaultState,
  compose(...middlewares),
);
*/

render(
  <App />,
  document.getElementById('container'),
);
