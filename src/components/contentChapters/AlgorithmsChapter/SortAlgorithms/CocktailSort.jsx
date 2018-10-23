import React from 'react';
import AlgorithmsLayoutTeamplate from '../AlgorithmsLayoutTemplate';

const algorithmTitle = 'Cocktail sorting';
const algorithmName = 'cocktailSorting';
const description = 'Cocktail sort, also known as bidirectional bubble sort, cocktail shaker sort, shaker sort, ripple sort, shuffle sort or shuttle sort, is a variation of bubble sort that is both a stable sorting algorithm and a comparison sort. The algorithm differs from a bubble sort in that it sorts in both directions on each pass through the list. This sorting algorithm is only marginally more difficult to implement than a bubble sort, and solves the problem of turtles in bubble sorts.';
const entryData = [9, 5, 2, 1, 8, 4, 7, 3, 6];

const bubbleSort = (sortingArray, startIndex, endIndex, status, step, predicate) => {
  if (startIndex === endIndex) {
    return { sortingArray, status };
  }

  const nextIndex = startIndex + step;
  const resultArray = [...sortingArray];
  let currentStatus = status;

  if (predicate(resultArray[startIndex], resultArray[nextIndex])) {
    [resultArray[startIndex], resultArray[nextIndex]] = [
      resultArray[nextIndex], resultArray[startIndex],
    ];
    currentStatus = 'changed';
  }
  return bubbleSort(resultArray, nextIndex, endIndex, currentStatus, step, predicate);
};

const sortArray = (arr) => {
  const start = 0;
  const end = arr.length - 1;
  const increment = 1;
  const decrement = -1;
  const defaultStatus = 'notchanged';
  const haveToSwapUpDirection = (current, next) => current > next;
  const haveToSwapDownDirection = (current, next) => current < next;

  const cocktailSort = (sortingArray, startIndex, endIndex, status) => {
    const onceUpSorted = bubbleSort(
      sortingArray,
      startIndex,
      endIndex,
      status,
      increment,
      haveToSwapUpDirection,
    );
    const onceDownSorted = bubbleSort(
      onceUpSorted.sortingArray,
      endIndex,
      startIndex,
      onceUpSorted.status,
      decrement,
      haveToSwapDownDirection,
    );

    if (onceDownSorted.status === 'changed') {
      return cocktailSort(
        onceDownSorted.sortingArray,
        startIndex + increment,
        endIndex + decrement,
        defaultStatus,
      );
    }
    return onceDownSorted.sortingArray;
  };

  return cocktailSort(arr, start, end, defaultStatus);
};

const algorithm = {
  title: algorithmTitle,
  name: algorithmName,
  description,
  entryData,
  func: sortArray,
};

const CocktailSort = () => <AlgorithmsLayoutTeamplate algorithm={algorithm} />;

export default CocktailSort;
