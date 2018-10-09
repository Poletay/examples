import React from 'react';
import AlgorithmsLayoutTeamplate from '../AlgorithmsLayoutTemplate';

const algorithmTitle = 'Bubble sorting';
const description = 'Bubble sorting is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.';
const entryData = [5, 2, 1, 8, 4, 7, 3, 6];
const result = [1, 2, 3, 4, 5, 6, 7, 8];

const BubbleSort = () => (
  <AlgorithmsLayoutTeamplate
    algorithmTitle={algorithmTitle}
    description={description}
    entryData={entryData.toString()}
    result={result.toString()}
  />
);

export default BubbleSort;
