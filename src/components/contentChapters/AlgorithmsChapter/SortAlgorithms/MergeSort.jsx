import React from 'react';
import AlgorithmsLayoutTeamplate from '../AlgorithmsLayoutTemplate';

const algorithmTitle = 'Merge sorting';
const algorithmName = 'mergeSorting';
const description = 'Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.';
const entryData = [5, 2, 1, 8, 4, 9, 7, 3, 6, 0, -1, 5];

const sortArray = (arr) => {
  const sortedArray = [...arr];

  return sortedArray;
};

const algorithm = {
  title: algorithmTitle,
  name: algorithmName,
  description,
  entryData,
  func: sortArray,
};

const TreeSort = () => <AlgorithmsLayoutTeamplate algorithm={algorithm} />;

export default TreeSort;
