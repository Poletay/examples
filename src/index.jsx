import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { createStore, compose } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import reducers from './reducers';
import App from './components/App';
import AlgorithmsChapter from './components/contentChapters/AlgorithmsChapter';
import LayoutsChapter from './components/contentChapters/LayoutsChapter';
import LibsChapter from './components/contentChapters/LibsChapter';
// import menuItems from './components/contentChapters';

/*
const ext = window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line
const devtoolMiddleware = ext && ext();
const middlewares = _.compact([
//  applyMiddleware(thunk),
  devtoolMiddleware,
]);

const defaultState = {
  mainMenuItems: menuItems,
};

const store = createStore(
  reducers,
  defaultState,
  compose(...middlewares),
);
*/

const mainAppStructure = [
  {
    name: 'Algorithms',
    path: '/algorithms',
    component: AlgorithmsChapter,
  },
  {
    name: 'Layouts',
    path: '/layouts',
    component: LayoutsChapter,
  },
  {
    name: 'Libs',
    path: '/libs',
    component: LibsChapter,
  },
];

render(
  <BrowserRouter>
    <App mainAppStructure={mainAppStructure} />
  </BrowserRouter>,
  document.getElementById('container'),
);
