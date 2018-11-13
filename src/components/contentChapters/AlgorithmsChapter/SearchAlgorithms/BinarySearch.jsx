import React from 'react';
import AlgorithmsTemplate from '../AlgorithmsTemplate';

const algorithmTitle = 'Binary searching';
const algorithmName = 'binarySearching';
const description = 'binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array.';
const entryData = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const binarySearching = (sortingArray) => {
  const sortedArray = [...sortingArray];
  return sortedArray;
};

const sortArray = (arr) => {
  const sortedArray = binarySearching(arr);
  return sortedArray;
};

const algorithm = {
  title: algorithmTitle,
  name: algorithmName,
  description,
  entryData,
  func: sortArray,
};

const BinarySearch = () => <AlgorithmsTemplate algorithm={algorithm} />;

export default BinarySearch;
