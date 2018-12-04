import React from 'react';
import AlgorithmsTemplate from '../AlgorithmsTemplate';

const algorithmTitle = 'Counting sorting';
const algorithmName = 'countingSorting';
const description = 'Counting sorting  is an integer sorting algorithm. It operates by counting the number of objects that have each distinct key value, and using arithmetic on those counts to determine the positions of each key value in the output sequence.';
const entryData = [9, 5, 2, 1, 8, 4, 7, 3, 6, 0, -1];

const countingSort = (sourceArray) => {
  const resultArray = [...sourceArray];
  return resultArray;
};

const sortArray = (sourceArray) => {
  const resultArray = countingSort(sourceArray);
  return resultArray;
};

const algorithm = {
  title: algorithmTitle,
  name: algorithmName,
  description,
  entryData,
  func: sortArray,
};

const BubbleSort = () => <AlgorithmsTemplate algorithm={algorithm} />;

export default BubbleSort;
