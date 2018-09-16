import React from 'react';
import Home from './contentChapters/Home';
import AlgorithmsChapter from './contentChapters/AlgorithmsChapter';
import LayoutsChapter from './contentChapters/LayoutsChapter';
import LibsChapter from './contentChapters/LibsChapter';
import PatternsChapter from './contentChapters/PatternsChapter';
import PaymentChapter from './contentChapters/PaymentChapter';
import SequrityChapter from './contentChapters/SequrityChapter';
import SicpChapter from './contentChapters/SicpChapter';
import AboutMe from './contentChapters/AboutMe';

const rootRoutes = React.createContext([
  { name: 'Home', path: '/', component: Home },
  { name: 'Algorithms', path: '/algorithms', component: AlgorithmsChapter },
  { name: 'Layouts', path: '/layouts', component: LayoutsChapter },
  { name: 'Libs', path: '/libs', component: LibsChapter },
  { name: 'Patterns', path: '/patterns', component: PatternsChapter },
  { name: 'Payment', path: '/payment', component: PaymentChapter },
  { name: 'Sequrity', path: '/sequrity', component: SequrityChapter },
  { name: 'SICP', path: '/sicp', component: SicpChapter },
  { name: 'About me', path: '/aboutme', component: AboutMe },
]);

export default rootRoutes;
