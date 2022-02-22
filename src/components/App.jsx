import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

import rootRoutes from './rootRoutes';
import routes from '../../config/routes';

import Header from './Header';
import Middle from './Middle';
import Footer from './Footer';

const App = () => (
  <div className="main">
    <rootRoutes.Provider value={routes}>
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
            <Middle />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </rootRoutes.Provider>
  </div>
);

export default App;

// import React from 'react';
// import { Link } from "react-router-dom";

// export default function App() {
//   return (
//     <div>
//       <h1>Bookkeeper</h1>
//       <nav
//         style={{
//           borderBottom: "solid 1px",
//           paddingBottom: "1rem"
//         }}
//       >
//         <Link to="/invoices">Invoices</Link> |{" "}
//         <Link to="/expenses">Expenses</Link>
//       </nav>
//     </div>
//   );
// }