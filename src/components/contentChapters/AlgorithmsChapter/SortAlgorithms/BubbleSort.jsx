import React from 'react';
import AlgorithmsLayoutTeamplate from '../AlgorithmsLayoutTemplate';

const algorithmTitle = 'Bubble sorting';
const algorithmName = 'bubbleSorting';
const description = 'Bubble sorting is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.';
const entryData = [5, 2, 1, 8, 4, 7, 3, 6];

const bubbleSort = (sortingArray, currentIndex = 0, status = 'notchanged') => {
  if (currentIndex === sortingArray.length) {
    return status === 'changed' ? bubbleSort(sortingArray) : sortingArray;
  }

  const nextIndex = currentIndex + 1;
  const resultArray = [...sortingArray];
  let currentStatus = status;

  if (resultArray[currentIndex]
    > resultArray[nextIndex]) {
    [
      resultArray[currentIndex],
      resultArray[nextIndex],
    ] = [
      resultArray[nextIndex],
      resultArray[currentIndex],
    ];
    currentStatus = 'changed';
  }
  return bubbleSort(resultArray, nextIndex, currentStatus);
};

const algorithm = {
  title: algorithmTitle,
  name: algorithmName,
  description,
  entryData,
  func: bubbleSort,
};

const BubbleSort = () => <AlgorithmsLayoutTeamplate algorithm={algorithm} />;

export default BubbleSort;
