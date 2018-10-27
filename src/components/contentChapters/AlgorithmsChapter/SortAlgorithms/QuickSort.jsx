import React from 'react';
import AlgorithmsLayoutTeamplate from '../AlgorithmsLayoutTemplate';

const algorithmTitle = 'Quick sorting';
const algorithmName = 'quickSorting';
const description = 'Quicksort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is defined. In efficient implementations it is not a stable sort, meaning that the relative order of equal sort items is not preserved.';
const entryData = [9, 5, 2, 1, 8, 4, 7, 3, 6, 0, -1];

const quickSort = (sortingArray) => {
  const resultArray = [...sortingArray];
  return resultArray;
};

const sortArray = (arr) => {
  const resultArray = quickSort(arr);
  return resultArray;
};

const algorithm = {
  title: algorithmTitle,
  name: algorithmName,
  description,
  entryData,
  func: sortArray,
};

const QuickSort = () => <AlgorithmsLayoutTeamplate algorithm={algorithm} />;

export default QuickSort;
