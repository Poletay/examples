import React from 'react';
import AlgorithmsChapterTemplate from '../../src/components/contentChapters/AlgorithmsChapter/AlgorithmsChapterTemplate';
import DinamicProgAlgorithms from '../../src/components/contentChapters/AlgorithmsChapter/DinamicProgAlgorithms/index';
import BubbleSort from '../../src/components/contentChapters/AlgorithmsChapter/SortAlgorithms/BubbleSort';
import CocktailSort from '../../src/components/contentChapters/AlgorithmsChapter/SortAlgorithms/CocktailSort';
import InsertionSort from '../../src/components/contentChapters/AlgorithmsChapter/SortAlgorithms/InsertionSort';
import QuickSort from '../../src/components/contentChapters/AlgorithmsChapter/SortAlgorithms/QuickSort';
import TreeSort from '../../src/components/contentChapters/AlgorithmsChapter/SortAlgorithms/TreeSort';
import MergeSort from '../../src/components/contentChapters/AlgorithmsChapter/GraphAlgorithms/BellmanFordAlgorithm';
import CountingSort from '../../src/components/contentChapters/AlgorithmsChapter/SortAlgorithms/CountingSort';
import DijkstraSearch from '../../src/components/contentChapters/AlgorithmsChapter/GraphAlgorithms/DijkstraSearch';
import BellmanFordSearch from '../../src/components/contentChapters/AlgorithmsChapter/GraphAlgorithms/BellmanFordAlgorithm';
import BinarySearch from '../../src/components/contentChapters/AlgorithmsChapter/SearchAlgorithms/BinarySearch';

export default [
  {
    name: 'Search Algorithms',
    path: 'search',
    component: AlgorithmsChapterTemplate,
    routes: [
      { name: 'Binary Search', path: 'binary', component: BinarySearch },
    ],
  },
  {
    name: 'Sort Algorithms',
    path: 'sort',
    component: AlgorithmsChapterTemplate,
    routes: [
      { name: 'Bubble Sort', path: 'bubble', component: BubbleSort },
      { name: 'Cocktail Sort', path: 'cocktail', component: CocktailSort },
      { name: 'Insertion Sort', path: 'insertion', component: InsertionSort },
      { name: 'Quick Sort', path: 'quick', component: QuickSort },
      { name: 'Tree Sort', path: 'tree', component: TreeSort },
      { name: 'Merge Sort', path: 'merge', component: MergeSort },
      { name: 'Counting Sort', path: 'counting', component: CountingSort },
    ],
  },
  {
    name: 'Algorithms on graphs',
    path: 'graphs',
    component: AlgorithmsChapterTemplate,
    routes: [
      { name: 'Dijkstra Search', path: 'dijkstra', component: DijkstraSearch },
      { name: 'Bellman-Ford Search', path: 'bellmanford', component: BellmanFordSearch },
    ],
  },
  { name: 'Dinamic Programming', path: 'dinamicprog', component: DinamicProgAlgorithms },
];
