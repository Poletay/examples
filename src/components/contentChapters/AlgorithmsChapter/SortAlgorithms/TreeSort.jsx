import React from 'react';
import AlgorithmsLayoutTeamplate from '../AlgorithmsLayoutTemplate';

const algorithmTitle = 'Tree sorting';
const algorithmName = 'treeSorting';
const description = 'A tree sort is a sort algorithm that builds a binary search tree from the elements to be sorted, and then traverses the tree (in-order) so that the elements come out in sorted order.';
const entryData = [9, 5, 2, 1, 8, 4, 7, 3, 6, 0, -1];

const treeSort = (sortingArray) => {
  const resultArray = [...sortingArray];
  return resultArray;
};

const sortArray = (arr) => {
  const resultArray = treeSort(arr);
  return resultArray;
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
