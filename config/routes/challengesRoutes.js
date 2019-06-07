import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Bin2Dec = Loadable({
  loader: () => import('../../src/components/contentChapters/Challenges/Bin2Dec'),
  loading: Loading,
});


export default [
  {
    name: 'Bin2Dec',
    path: '/challenges/bin2dec',
    component: Bin2Dec,
  },
];
