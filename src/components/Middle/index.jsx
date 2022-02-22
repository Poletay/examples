// import React from 'react';
// import rootRoutes from '../rootRoutes';
// import RoutesList from '../RoutesList';
// import { Routes, Route } from "react-router-dom";


// const Middle = () => (
//   <div className="main-middle">
//     <rootRoutes.Consumer>
//     {routes => (
//       <Routes>
//         {/* <RoutesList routes={routes} /> */}

//       </Routes>
//     )}
//     </rootRoutes.Consumer>
//   </div>
// );
// export default Middle;

import React from 'react';
import { Routes } from "react-router-dom";

import rootRoutes from '../rootRoutes';
import RoutesList from '../RoutesList';

function Expenses() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
    </main>
  );
}

function Invoices() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Invoices</h2>
    </main>
  );
}

function Root() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Root</h2>
    </main>
  );
}

const Middle = () => (
  <rootRoutes.Consumer>
    {routes => {
      return (
        <div>
          <Routes>
            {RoutesList(routes)}
          </Routes>
         </div>
      )
    }}

  </rootRoutes.Consumer>
);

export default Middle;
