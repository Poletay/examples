import SearchAlgorithms from '../../src/components/contentChapters/AlgorithmsChapter/SearchAlgorithms';
import SortAlgorithms from '../../src/components/contentChapters/AlgorithmsChapter/SortAlgorithms';
import DinamicProgAlgorithms from '../../src/components/contentChapters/AlgorithmsChapter/DinamicProgAlgorithms';
import BubbleSort from '../../src/components/contentChapters/AlgorithmsChapter/SortAlgorithms/BubbleSort';
import CocktailSort from '../../src/components/contentChapters/AlgorithmsChapter/SortAlgorithms/CocktailSort';
import InsertionSort from '../../src/components/contentChapters/AlgorithmsChapter/SortAlgorithms/InsertionSort';

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
