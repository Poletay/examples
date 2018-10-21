import React from 'react';
import AlgorithmsLayoutTeamplate from '../AlgorithmsLayoutTemplate';

const algorithmTitle = 'Cocktail sorting';
const algorithmName = 'cocktailSorting';
const description = 'Cocktail sort, also known as bidirectional bubble sort, cocktail shaker sort, shaker sort, ripple sort, shuffle sort or shuttle sort, is a variation of bubble sort that is both a stable sorting algorithm and a comparison sort. The algorithm differs from a bubble sort in that it sorts in both directions on each pass through the list. This sorting algorithm is only marginally more difficult to implement than a bubble sort, and solves the problem of turtles in bubble sorts.';
const entryData = [5, 2, 1, 8, 4, 7, 3, 6];

const bubbleUpSort = (sortingArray, startIndex, endIndex, status) => {
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
  return bubbleUpSort(resultArray, nextIndex, endIndex, currentStatus);
};

const bubbleDownSort = (sortingArray, startIndex, endIndex, status) => {
  if (startIndex === endIndex) {
    return { sortingArray, status };
  }

  const nextIndex = startIndex - 1;
  const resultArray = [...sortingArray];
  let currentStatus = status;

  if (resultArray[startIndex] < resultArray[nextIndex]) {
    [resultArray[startIndex], resultArray[nextIndex],
    ] = [
      resultArray[nextIndex], resultArray[startIndex],
    ];
    currentStatus = 'changed';
  }
  return bubbleDownSort(resultArray, nextIndex, endIndex, currentStatus);
};

const sortArray = (arr) => {
  const start = 0;
  const end = arr.length - 1;
  const defaultStatus = 'notchanged';

  const cocktailSort = (sortingArray, startIndex, endIndex, status) => {
    const onceUpSorted = bubbleUpSort(
      sortingArray, startIndex, endIndex, status,
    );
    const onceDownSorted = bubbleDownSort(
      onceUpSorted.sortingArray, endIndex, startIndex, onceUpSorted.status,
    );

    if (onceDownSorted.status === 'changed') {
      return cocktailSort(onceDownSorted.sortingArray, startIndex + 1, endIndex - 1, defaultStatus);
    }
    return onceDownSorted.sortingArray;
  };

  return cocktailSort(arr, start, end, defaultStatus);
};

const CocktailSort = () => (
  <AlgorithmsLayoutTeamplate
    algorithmTitle={algorithmTitle}
    description={description}
    entryData={entryData}
    algorithmImplementationFunc={sortArray}
    algorithmName={algorithmName}
  />
);

export default CocktailSort;
