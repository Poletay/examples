import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import Home from './components/contentChapters/Home';
import AlgorithmsChapter from './components/contentChapters/AlgorithmsChapter';
import LayoutsChapter from './components/contentChapters/LayoutsChapter';
import LibsChapter from './components/contentChapters/LibsChapter';
import PatternsChapter from './components/contentChapters/PatternsChapter';
import PaymentChapter from './components/contentChapters/PaymentChapter';
import SequrityChapter from './components/contentChapters/SequrityChapter';
import SicpChapter from './components/contentChapters/SicpChapter';
import AboutMe from './components/contentChapters/AboutMe';

const mainAppStructure = [
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

render(
  <HashRouter>
    <App mainAppStructure={mainAppStructure} />
  </HashRouter>,
  document.getElementById('container'),
);
