import React from 'react';
import AlgorithmsLayoutTeamplate from '../AlgorithmsLayoutTemplate';

const algorithmTitle = 'Insertion sorting';
const algorithmName = 'insertionSorting';
const description = 'Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.';
const entryData = [9, 5, 2, 1, 8, 4, -2, 7, 3, 6, 0, -1];

const insertionSort = sortingArray => sortingArray;

const sortArray = arr => insertionSort(arr);

const algorithm = {
  title: algorithmTitle,
  name: algorithmName,
  description,
  entryData,
  func: sortArray,
};

const InsertionSort = () => <AlgorithmsLayoutTeamplate algorithm={algorithm} />;

export default InsertionSort;
