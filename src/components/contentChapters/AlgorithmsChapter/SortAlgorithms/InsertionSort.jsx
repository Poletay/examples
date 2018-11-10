import React from 'react';
import AlgorithmsTemplate from '../AlgorithmsTemplate';

const algorithmTitle = 'Insertion sorting';
const algorithmName = 'insertionSorting';
const description = 'Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.';
const entryData = [9, 5, 2, 1, 8, 4, 7, 3, 6, 0, -1];

const insertionSort = (sortingArray, currentIndex, sortingElement) => {
  const resultArray = [...sortingArray];
  const nextIndex = currentIndex - 1;
  if (currentIndex === 0 || sortingElement > resultArray[nextIndex]) {
    resultArray[currentIndex] = sortingElement;
    return resultArray;
  }

  resultArray[currentIndex] = resultArray[nextIndex];
  return insertionSort(resultArray, nextIndex, sortingElement);
};

const sortArray = (arr, currentIndex = 0) => {
  if (arr.length < 2 || currentIndex === arr.length) {
    return arr;
  }

  const resultArray = insertionSort(arr, currentIndex, arr[currentIndex]);
  const nextIndex = currentIndex + 1;
  return sortArray(resultArray, nextIndex);
};

const algorithm = {
  title: algorithmTitle,
  name: algorithmName,
  description,
  entryData,
  func: sortArray,
};

const InsertionSort = () => <AlgorithmsTemplate algorithm={algorithm} />;

export default InsertionSort;
