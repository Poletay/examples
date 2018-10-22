import React from 'react';
import AlgorithmsLayoutTeamplate from '../AlgorithmsLayoutTemplate';

const algorithmTitle = 'Bubble sorting';
const algorithmName = 'bubbleSorting';
const description = 'Bubble sorting is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.';
const entryData = [5, 2, 1, 8, 4, 7, 3, 6];

const sortArray = (arr) => {
  const startIndex = 0;
  const bubbleSort = ({ sortingArray, currentIndex, status }) => {
    if (status === 'notchanged' && currentIndex === arr.length) {
      return sortingArray;
    }

    if (status === 'changed' && currentIndex === sortingArray.length) {
      return sortArray(sortingArray);
    }

    const nextIndex = currentIndex + 1;
    const intermidiateResult = {
      sortingArray: [...sortingArray],
      currentIndex: nextIndex,
      status,
    };

    if (intermidiateResult.sortingArray[currentIndex]
      > intermidiateResult.sortingArray[nextIndex]) {
      [
        intermidiateResult.sortingArray[currentIndex],
        intermidiateResult.sortingArray[nextIndex],
      ] = [
        intermidiateResult.sortingArray[nextIndex],
        intermidiateResult.sortingArray[currentIndex],
      ];
      intermidiateResult.status = 'changed';
    }
    return bubbleSort(intermidiateResult);
  };
  return bubbleSort({
    sortingArray: arr,
    currentIndex: startIndex,
    status: 'notchanged',
  });
};

const algorithm = {
  title: algorithmTitle,
  name: algorithmName,
  description,
  entryData,
  func: sortArray,
};

const BubbleSort = () => <AlgorithmsLayoutTeamplate algorithm={algorithm} />;

export default BubbleSort;
