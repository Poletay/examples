import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div>Losding...</div>;
const SearchAlgorithms = Loadable({
  loader: () => import('../../src/components/contentChapters/AlgorithmsChapter/SearchAlgorithms'),
  loading: Loading,
});

const SortAlgorithms = Loadable({
  loader: () => import('../../src/components/contentChapters/AlgorithmsChapter/SortAlgorithms'),
  loading: Loading,
});

const DinamicProgAlgorithms = Loadable({
  loader: () => import('../../src/components/contentChapters/AlgorithmsChapter/DinamicProgAlgorithms'),
  loading: Loading,
});

const BubbleSort = Loadable({
  loader: () => import('../../src/components/contentChapters/AlgorithmsChapter/SortAlgorithms/BubbleSort'),
  loading: Loading,
});

const CocktailSort = Loadable({
  loader: () => import('../../src/components/contentChapters/AlgorithmsChapter/SortAlgorithms/CocktailSort'),
  loading: Loading,
});

const InsertionSort = Loadable({
  loader: () => import('../../src/components/contentChapters/AlgorithmsChapter/SortAlgorithms/InsertionSort'),
  loading: Loading,
});

export default [
  { name: 'Search Algorithms', path: '/algorithms/search', component: SearchAlgorithms },
  {
    name: 'Sort Algorithms',
    path: '/algorithms/sort',
    component: SortAlgorithms,
    routes: [
      { name: 'Bubble Sort', path: '/algorithms/sort/bubble', component: BubbleSort },
      { name: 'Cocktail Sort', path: '/algorithms/sort/cocktail', component: CocktailSort },
      { name: 'Insertion Sort', path: '/algorithms/sort/insertion', component: InsertionSort },
    ],
  },
  { name: 'Dinamic Programming', path: '/algorithms/dinamicprog', component: DinamicProgAlgorithms },
];
