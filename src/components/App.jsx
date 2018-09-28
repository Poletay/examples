import React from 'react';
import { HashRouter } from 'react-router-dom';
import rootRoutes from './rootRoutes';

import Header from './Header';
import Middle from './Middle';
import Footer from './Footer';

import Home from './contentChapters/Home';
import AlgorithmsChapter from './contentChapters/AlgorithmsChapter';
import LayoutsChapter from './contentChapters/LayoutsChapter';
import LibsChapter from './contentChapters/LibsChapter';
import PatternsChapter from './contentChapters/PatternsChapter';
import PaymentChapter from './contentChapters/PaymentChapter';
import SequrityChapter from './contentChapters/SequrityChapter';
import SicpChapter from './contentChapters/SicpChapter';
import AboutMe from './contentChapters/AboutMe';

const routes = [
  { name: 'Home', path: '/', component: Home },
  { name: 'Algorithms', path: '/algorithms', component: AlgorithmsChapter },
  { name: 'Layouts', path: '/layouts', component: LayoutsChapter },
  { name: 'Libs', path: '/libs', component: LibsChapter },
  { name: 'Patterns', path: '/patterns', component: PatternsChapter },
  { name: 'Payment', path: '/payment', component: PaymentChapter },
  { name: 'Sequrity', path: '/sequrity', component: SequrityChapter },
  { name: 'SICP', path: '/sicp', component: SicpChapter },
  { name: 'About me', path: '/aboutme', component: AboutMe },
];

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
