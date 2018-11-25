import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const AlgorithmsChapterTemplate = Loadable({
  loader: () => import('../../src/components/contentChapters/AlgorithmsChapter/AlgorithmsChapterTemplate'),
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

const QuickSort = Loadable({
  loader: () => import('../../src/components/contentChapters/AlgorithmsChapter/SortAlgorithms/QuickSort'),
  loading: Loading,
});

const TreeSort = Loadable({
  loader: () => import('../../src/components/contentChapters/AlgorithmsChapter/SortAlgorithms/TreeSort'),
  loading: Loading,
});

const MergeSort = Loadable({
  loader: () => import('../../src/components/contentChapters/AlgorithmsChapter/SortAlgorithms/MergeSort'),
  loading: Loading,
});

const DijkstraSearch = Loadable({
  loader: () => import('../../src/components/contentChapters/AlgorithmsChapter/GraphAlgorithms/DijkstraSearch'),
  loading: Loading,
});

const BellmanFordSearch = Loadable({
  loader: () => import('../../src/components/contentChapters/AlgorithmsChapter/GraphAlgorithms/BellmanFordAlgorithm'),
  loading: Loading,
});

const BinarySearch = Loadable({
  loader: () => import('../../src/components/contentChapters/AlgorithmsChapter/SearchAlgorithms/BinarySearch'),
  loading: Loading,
});

export default [
  {
    name: 'Search Algorithms',
    path: '/algorithms/search',
    component: AlgorithmsChapterTemplate,
    routes: [
      { name: 'Binary Search', path: '/algorithms/search/binary', component: BinarySearch },
    ],
  },
  {
    name: 'Sort Algorithms',
    path: '/algorithms/sort',
    component: AlgorithmsChapterTemplate,
    routes: [
      { name: 'Bubble Sort', path: '/algorithms/sort/bubble', component: BubbleSort },
      { name: 'Cocktail Sort', path: '/algorithms/sort/cocktail', component: CocktailSort },
      { name: 'Insertion Sort', path: '/algorithms/sort/insertion', component: InsertionSort },
      { name: 'Quick Sort', path: '/algorithms/sort/quick', component: QuickSort },
      { name: 'Tree Sort', path: '/algorithms/sort/tree', component: TreeSort },
      { name: 'Merge Sort', path: '/algorithms/sort/merge', component: MergeSort },
    ],
  },
  {
    name: 'Algorithms on graphs',
    path: '/algorithms/graphs',
    component: AlgorithmsChapterTemplate,
    routes: [
      { name: 'Dijkstra Search', path: '/algorithms/graphs/dijkstra', component: DijkstraSearch },
      { name: 'Bellman-Ford Search', path: '/algorithms/graphs/bellmanford', component: BellmanFordSearch },
    ],
  },
  { name: 'Dinamic Programming', path: '/algorithms/dinamicprog', component: DinamicProgAlgorithms },
];
