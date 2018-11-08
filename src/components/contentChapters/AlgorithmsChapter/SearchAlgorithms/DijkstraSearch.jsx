import React from 'react';
import AlgorithmsLayoutTeamplate from '../AlgorithmsLayoutTemplate';

const algorithmTitle = 'Dijkstra searching';
const algorithmName = 'dijkstraSearching';
const description = 'Dijkstra\'s algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks.';
const entryData = {
  start: { A: 5, B: 2 },
  A: { C: 4, D: 2 },
  B: { A: 8, D: 7 },
  C: { D: 6, finish: 3 },
  D: { finish: 1 },
  finish: {},
};

const dijkstraSearch = (graph = {}) => {
  const result = { ...graph };
  return result;
};

const search = (graph) => {
  const searchResult = dijkstraSearch(graph);
  return searchResult;
};

const algorithm = {
  title: algorithmTitle,
  name: algorithmName,
  description,
  entryData,
  func: search,
};

const MergeSort = () => <AlgorithmsLayoutTeamplate algorithm={algorithm} />;

export default MergeSort;
