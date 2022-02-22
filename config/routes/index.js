import React from 'react';
// import Loadable from 'react-loadable';
import algorithmsRoutes from './algorithmsRoutes';
import challengesRoutes from './challengesRoutes';
import Home from '../../src/components/contentChapters/Home/index';
import AlgorithmsChapter from '../../src/components/contentChapters/AlgorithmsChapter/index';
import Challenges from '../../src/components/contentChapters/Challenges/index';
import LayoutsChapter from '../../src/components/contentChapters/LayoutsChapter/index';
import LibsChapter from '../../src/components/contentChapters/LibsChapter/index';
import PatternsChapter from '../../src/components/contentChapters/PatternsChapter/index';
import PaymentChapter from '../../src/components/contentChapters/PaymentChapter/index';
import SecurityChapter from '../../src/components/contentChapters/SecurityChapter/index';
import SicpChapter from '../../src/components/contentChapters/SicpChapter/index';
import AboutMe from '../../src/components/contentChapters/AboutMe/index';

// const AlgorithmsChapter = () => <div>Tru algo</div>;

// const Loading = () => <div>Loading...</div>;
// const Home = Loadable({
//   loader: () => import('../../src/components/contentChapters/Home'),
//   loading: Loading,
// });

// const AlgorithmsChapter = Loadable({
//   loader: () => import('../../src/components/contentChapters/AlgorithmsChapter'),
//   loading: Loading,
// });

// const Challenges = Loadable({
//   loader: () => import('../../src/components/contentChapters/Challenges'),
//   loading: Loading,
// });


// const LayoutsChapter = Loadable({
//   loader: () => import('../../src/components/contentChapters/LayoutsChapter'),
//   loading: Loading,
// });

// const LibsChapter = Loadable({
//   loader: () => import('../../src/components/contentChapters/LibsChapter'),
//   loading: Loading,
// });

// const PatternsChapter = Loadable({
//   loader: () => import('../../src/components/contentChapters/PatternsChapter'),
//   loading: Loading,
// });

// const PaymentChapter = Loadable({
//   loader: () => import('../../src/components/contentChapters/PaymentChapter'),
//   loading: Loading,
// });

// const SecurityChapter = Loadable({
//   loader: () => import('../../src/components/contentChapters/SecurityChapter'),
//   loading: Loading,
// });

// const SicpChapter = Loadable({
//   loader: () => import('../../src/components/contentChapters/SicpChapter'),
//   loading: Loading,
// });

// const AboutMe = Loadable({
//   loader: () => import('../../src/components/contentChapters/AboutMe'),
//   loading: Loading,
// });

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
    name: 'Challenges',
    path: '/challenges',
    component: Challenges,
    routes: challengesRoutes,
  },
  {
    name: 'Layouts',
    path: '/layouts',
    component: LayoutsChapter,
  },
  {
    name: 'Libs',
    path: '/libs',
    component: LibsChapter,
  },
  {
    name: 'Patterns',
    path: '/patterns',
    component: PatternsChapter,
  },
  {
    name: 'Payment',
    path: '/payment',
    component: PaymentChapter,
  },
  {
    name: 'Security',
    path: '/sequrity',
    component: SecurityChapter,
  },
  {
    name: 'SICP',
    path: '/sicp',
    component: SicpChapter,
  },
  {
    name: 'About me',
    path: '/aboutme',
    component: AboutMe,
  },
];
