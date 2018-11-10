import React from 'react';
import AlgorithmsTemplate from '../AlgorithmsTemplate';

const algorithmTitle = 'Bubble sorting';
const algorithmName = 'bubbleSorting';
const description = 'Bubble sorting is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.';
const entryData = [9, 5, 2, 1, 8, 4, 7, 3, 6, 0, -1];

const bubbleSort = (sortingArray, startIndex = 0, status = 'notchanged') => {
  const endIndex = sortingArray.length;
  if (startIndex === endIndex) {
    return { sortingArray, status };
  }

  const nextIndex = startIndex + 1;
  const resultArray = [...sortingArray];
  let currentStatus = status;

  if (resultArray[startIndex] > resultArray[nextIndex]) {
    [resultArray[startIndex], resultArray[nextIndex]] = [
      resultArray[nextIndex], resultArray[startIndex],
    ];
    currentStatus = 'changed';
  }

  return bubbleSort(resultArray, nextIndex, currentStatus);
};

const sortArray = (arr) => {
  const onceSortResult = bubbleSort(arr);
  if (onceSortResult.status === 'changed') {
    return sortArray(onceSortResult.sortingArray);
  }
  return onceSortResult.sortingArray;
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
