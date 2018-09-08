import React from 'react';
import Header from './Header';
import Middle from './Middle';
import Footer from './Footer';

const App = () => (
  <div className="main">
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
  </div>
);

export default App;
