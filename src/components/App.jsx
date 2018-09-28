import React from 'react';
import { HashRouter } from 'react-router-dom';
import rootRoutes from './rootRoutes';
import routes from '../../config/routes';

import Header from './Header';
import Middle from './Middle';
import Footer from './Footer';

const App = () => (
  <div className="main">
    <HashRouter>
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
    </HashRouter>
  </div>
);

export default App;
