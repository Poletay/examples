import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import reducers from './reducers';

import App from './components/App';

// const ext = window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line no-underscore-dangle
// const devtoolMiddleware = ext && ext();
// 
const defaultState = {
  currentLocation: '/',
  algorithms: {},
};

const store = createStore(
  reducers,
  defaultState,
  // devtoolMiddleware,
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('container'),
);

// import React from 'react';
// import { render } from "react-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
// import App from "./components/App";

// const rootElement = document.getElementById('container');

// function Expenses() {
//   return (
//     <main style={{ padding: "1rem 0" }}>
//       <h2>Expenses</h2>
//     </main>
//   );
// }

// function Invoices() {
//   return (
//     <main style={{ padding: "1rem 0" }}>
//       <h2>Invoices</h2>
//     </main>
//   );
// }

// render(
//   // <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="expenses" element={<Expenses />} />
//         <Route path="invoices" element={<Invoices />} />
//     </Routes>,
//   // </BrowserRouter>,
//   rootElement
// );