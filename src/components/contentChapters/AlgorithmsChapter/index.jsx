import React from 'react';
import { HashRouter } from 'react-router-dom';
import LeftSideMenu from '../../Middle/LeftSideMenu';
import SearchAlgorithms from './SearchAlgorithms';
import SortAlgorithms from './SortAlgorithms';

const algorithmsList = [
  { name: 'Search Algorithms', path: '/search', component: SearchAlgorithms },
  { name: 'Sort Algorithms', path: '/sort', component: SortAlgorithms },
];

const AlgorithmsChapter = () => (
  <HashRouter>
    <div className="chapter-algorithms">
      <div className="row">
        <div className="col-4">
          <LeftSideMenu items={algorithmsList} />
        </div>
        <div className="col-8">
        </div>
      </div>
    </div>
  </HashRouter>
);

export default AlgorithmsChapter;
