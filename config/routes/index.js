import AlgorithmsChapter from '../../src/components/contentChapters/AlgorithmsChapter';
import LibsChapter from '../../src/components/contentChapters/LibsChapter';
import PatternsChapter from '../../src/components/contentChapters/PatternsChapter';
import PaymentChapter from '../../src/components/contentChapters/PaymentChapter';
import SequrityChapter from '../../src/components/contentChapters/SequrityChapter';
import SicpChapter from '../../src/components/contentChapters/SicpChapter';
import AboutMe from '../../src/components/contentChapters/AboutMe';

import Home from '../../src/components/contentChapters/Home/lazyLoad';
import LayoutsChapter from '../../src/components/contentChapters/LayoutsChapter/lazyLoad';

import algorithmsRoutes from './algorithmsRoutes';

export default [
  {
    name: 'Home',
    exact: true,
    path: '/',
    component: Home,
  },
  {
    name: 'Algorithms',
    path: '/algorithms',
    component: AlgorithmsChapter,
    routes: algorithmsRoutes,
  },
  {
    name: 'Layouts',
    path: '/layouts',
    component: LayoutsChapter,
  },
  { name: 'Libs', path: '/libs', component: LibsChapter },
  { name: 'Patterns', path: '/patterns', component: PatternsChapter },
  { name: 'Payment', path: '/payment', component: PaymentChapter },
  { name: 'Sequrity', path: '/sequrity', component: SequrityChapter },
  { name: 'SICP', path: '/sicp', component: SicpChapter },
  { name: 'About me', path: '/aboutme', component: AboutMe },
];
