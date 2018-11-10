import React from 'react';
import AlgorithmsTemplate from '../AlgorithmsTemplate';

const algorithmTitle = 'Cocktail sorting';
const algorithmName = 'cocktailSorting';
const description = 'Cocktail sort, also known as bidirectional bubble sort, cocktail shaker sort, shaker sort, ripple sort, shuffle sort or shuttle sort, is a variation of bubble sort that is both a stable sorting algorithm and a comparison sort. The algorithm differs from a bubble sort in that it sorts in both directions on each pass through the list. This sorting algorithm is only marginally more difficult to implement than a bubble sort, and solves the problem of turtles in bubble sorts.';
const entryData = [9, 5, 2, 1, 8, 4, 7, 3, 6];

const haveToSwapUpDirection = (current, next) => current > next;
const haveToSwapDownDirection = (current, next) => current < next;


const bubbleSort = (sortingArray, startIndex, endIndex, step, predicate, status = 'notchanged') => {
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
  return bubbleSort(resultArray, nextIndex, endIndex, step, predicate, currentStatus);
};

const cocktailSort = (sortingArray, startIndex, endIndex) => {
  const increment = 1;
  const decrement = -1;

  const onceUpSorted = bubbleSort(
    sortingArray,
    startIndex,
    endIndex,
    increment,
    haveToSwapUpDirection,
  );

  const onceDownSorted = bubbleSort(
    onceUpSorted.sortingArray,
    endIndex,
    startIndex,
    decrement,
    haveToSwapDownDirection,
    onceUpSorted.status,
  );

  if (onceDownSorted.status === 'changed') {
    return cocktailSort(onceDownSorted.sortingArray, startIndex + increment, endIndex + decrement);
  }
  return onceDownSorted.sortingArray;
};

const sortArray = (arr) => {
  const start = 0;
  const end = arr.length - 1;
  return cocktailSort(arr, start, end);
};

const algorithm = {
  title: algorithmTitle,
  name: algorithmName,
  description,
  entryData,
  func: sortArray,
};

const CocktailSort = () => <AlgorithmsTemplate algorithm={algorithm} />;

export default CocktailSort;
