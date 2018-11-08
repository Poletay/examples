import React from 'react';
import AlgorithmsLayoutTeamplate from '../AlgorithmsLayoutTemplate';

const algorithmTitle = 'Merge sorting';
const algorithmName = 'mergeSorting';
const description = 'Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.';
const entryData = [5, 2, 1, 8, 4, 9, 7, 3, 6, 0, -1, 5];

const merge = (left, right) => {
  const iter = (leftIndex = 0, rightIndex = 0, acc = []) => {
    if (left.length === leftIndex || right.length === rightIndex) {
      return [...acc, ...left.slice(leftIndex), ...right.slice(rightIndex)];
    }

    const result = [...acc];

    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      return iter(leftIndex + 1, rightIndex, result);
    }
    result.push(right[rightIndex]);
    return iter(leftIndex, rightIndex + 1, result);
  };

  return iter();
};

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.round(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(
    mergeSort(left),
    mergeSort(right),
  );
};

const sortArray = (arr) => {
  const sortedArray = mergeSort(arr);
  return sortedArray;
};

const algorithm = {
  title: algorithmTitle,
  name: algorithmName,
  description,
  entryData,
  func: sortArray,
};

const MergeSort = () => <AlgorithmsLayoutTeamplate algorithm={algorithm} />;

export default MergeSort;
