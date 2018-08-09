import React from 'react';
import Header from './Header';
import LeftContent from './LeftContent';
import MiddleContent from './MiddleContent';
import RightContent from './RightContent';
import Footer from './Footer';

const App = () => (
  <div className="main">
    <div className="row">
      <div className="col-12">
        <Header />
      </div>
    </div>
    <div className="row">
      <div className="col-3">
        <LeftContent />
      </div>
      <div className="col-7">
        <MiddleContent />
      </div>
      <div className="col-2">
        <RightContent />
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
