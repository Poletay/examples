import Home from '../../src/components/contentChapters/Home/lazyLoad';
import AlgorithmsChapter from '../../src/components/contentChapters/AlgorithmsChapter/lazyLoad';
import LayoutsChapter from '../../src/components/contentChapters/LayoutsChapter/lazyLoad';
import LibsChapter from '../../src/components/contentChapters/LibsChapter/lazyLoad';
import PatternsChapter from '../../src/components/contentChapters/PatternsChapter/lazyLoad';
import PaymentChapter from '../../src/components/contentChapters/PaymentChapter/lazyLoad';
import SecurityChapter from '../../src/components/contentChapters/SecurityChapter/lazyLoad';
import SicpChapter from '../../src/components/contentChapters/SicpChapter/lazyLoad';
import AboutMe from '../../src/components/contentChapters/AboutMe/lazyLoad';

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
  { name: 'Security', path: '/sequrity', component: SecurityChapter },
  { name: 'SICP', path: '/sicp', component: SicpChapter },
  { name: 'About me', path: '/aboutme', component: AboutMe },
];
