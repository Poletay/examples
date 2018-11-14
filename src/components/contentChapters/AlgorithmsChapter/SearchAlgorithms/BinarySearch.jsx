import React from 'react';
import AlgorithmsTemplate from '../AlgorithmsTemplate';

const algorithmTitle = 'Binary searching';
const algorithmName = 'binarySearching';
const description = 'binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array.';
const entryData = {
  sortedArray: [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  requiredElement: 8,
};

const getMidIndex = (first, last) => Math.round((first + last) / 2);

const binarySearching = (sortedArray, requiredElement) => {
  const firstIndex = 0;
  const lastIndex = sortedArray.length;

  const search = (first, last) => {
    const midIndex = getMidIndex(first, last);

    if (requiredElement > sortedArray[midIndex]) {
      return search(midIndex + 1, last);
    }

    if (requiredElement < sortedArray[midIndex]) {
      return search(first, midIndex - 1);
    }

    return midIndex;
  };

  return search(firstIndex, lastIndex);
};

const sortArray = ({
  sortedArray,
  requiredElement,
}) => binarySearching(sortedArray, requiredElement);

const algorithm = {
  title: algorithmTitle,
  name: algorithmName,
  description,
  entryData,
  func: sortArray,
};

const BinarySearch = () => <AlgorithmsTemplate algorithm={algorithm} />;

export default BinarySearch;
