import React from 'react';
import Loadable from 'react-loadable';
import algorithmsRoutes from './algorithmsRoutes';

const Loading = () => <div>Losding...</div>;
const Home = Loadable({
  loader: () => import('../../src/components/contentChapters/Home'),
  loading: Loading,
});

const AlgorithmsChapter = Loadable({
  loader: () => import('../../src/components/contentChapters/AlgorithmsChapter'),
  loading: Loading,
});

const LayoutsChapter = Loadable({
  loader: () => import('../../src/components/contentChapters/LayoutsChapter'),
  loading: Loading,
});

const LibsChapter = Loadable({
  loader: () => import('../../src/components/contentChapters/LibsChapter'),
  loading: Loading,
});

const PatternsChapter = Loadable({
  loader: () => import('../../src/components/contentChapters/PatternsChapter'),
  loading: Loading,
});

const PaymentChapter = Loadable({
  loader: () => import('../../src/components/contentChapters/PaymentChapter'),
  loading: Loading,
});

const SecurityChapter = Loadable({
  loader: () => import('../../src/components/contentChapters/SecurityChapter'),
  loading: Loading,
});

const SicpChapter = Loadable({
  loader: () => import('../../src/components/contentChapters/SicpChapter'),
  loading: Loading,
});

const AboutMe = Loadable({
  loader: () => import('../../src/components/contentChapters/AboutMe'),
  loading: Loading,
});

export default [
  {
    name: 'Home',
    exact: true,
    path: '/',
    component: Home,
    componentUrl: './contentChapters/Home',
  },
  {
    name: 'Algorithms',
    path: '/algorithms',
    component: AlgorithmsChapter,
    routes: algorithmsRoutes,
    componentUrl: './contentChapters/AlgorithmsChapter',
  },
  {
    name: 'Layouts',
    path: '/layouts',
    component: LayoutsChapter,
    componentUrl: './contentChapters/LayoutsChapter',
  },
  {
    name: 'Libs',
    path: '/libs',
    component: LibsChapter,
    componentUrl: './contentChapters/LibsChapter',
  },
  {
    name: 'Patterns',
    path: '/patterns',
    component: PatternsChapter,
    componentUrl: './contentChapters/PatternsChapter',
  },
  {
    name: 'Payment',
    path: '/payment',
    component: PaymentChapter,
    componentUrl: './contentChapters/PaymentChapter',
  },
  {
    name: 'Security',
    path: '/sequrity',
    component: SecurityChapter,
    componentUrl: './contentChapters/SecurityChapter',
  },
  {
    name: 'SICP',
    path: '/sicp',
    component: SicpChapter,
    componentUrl: './contentChapters/SicpChapter',
  },
  {
    name: 'About me',
    path: '/aboutme',
    component: AboutMe,
    componentUrl: './contentChapters/AboutMe',
  },
];
