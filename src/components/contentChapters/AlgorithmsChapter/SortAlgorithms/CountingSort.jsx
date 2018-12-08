import React from 'react';
import AlgorithmsTemplate from '../AlgorithmsTemplate';

const algorithmTitle = 'Counting sorting';
const algorithmName = 'countingSorting';
const description = 'Counting sorting  is an integer sorting algorithm. It operates by counting the number of objects that have each distinct key value, and using arithmetic on those counts to determine the positions of each key value in the output sequence.';
const entryData = [9, 5, 2, 2, 1, 8, 4, 7, 3, 9, 6, 0, -1, 2, 1, 5, 1, 9, -1];

const getFrequencyElements = (sourceArray) => {
  const maxElement = Math.max(...sourceArray);
  const minElement = Math.min(...sourceArray);
  const frequencyElements = Array(maxElement - minElement + 1).fill(0);
  const auxiliaryArray = sourceArray.reduce((frequency, element) => {
    const newFrequency = [...frequency];
    newFrequency[element - minElement] += 1;
    return newFrequency;
  }, frequencyElements);

  return auxiliaryArray.reduce((acc, element, index) => {
    const newAcc = [...acc];
    if (index > 0) {
      newAcc[index] = newAcc[index - 1] + element;
      return newAcc;
    }
    return [element];
  }, []);
};

const getSortedArray = (sourceArray, auxiliaryArray, minElement) => {
  const iter = (auxArray, currentIndex = 0, sortingArray = []) => {
    if (currentIndex > sourceArray.length - 1) {
      return sortingArray;
    }

    const sortedArray = [...sortingArray];
    const currentElementValue = sourceArray[currentIndex];
    const sortedIndex = auxArray[currentElementValue - minElement] - 1;
    sortedArray[sortedIndex] = currentElementValue;

    const newAuxArray = [...auxArray];
    newAuxArray[currentElementValue - minElement] -= 1;
    return iter(newAuxArray, currentIndex + 1, sortedArray);
  };

  return iter(auxiliaryArray);
};

const countingSort = (sourceArray) => {
  const auxiliaryArray = getFrequencyElements(sourceArray);
  const minElement = Math.min(...sourceArray);
  const sortedArray = getSortedArray(sourceArray, auxiliaryArray, minElement);
  return sortedArray;
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
