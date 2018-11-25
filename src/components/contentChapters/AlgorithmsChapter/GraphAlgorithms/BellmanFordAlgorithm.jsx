import React from 'react';
import AlgorithmsTemplate from '../AlgorithmsTemplate';

const algorithmTitle = 'Bellman-Ford searching';
const algorithmName = 'bellmanFordSearching';
const description = "The Bellman–Ford algorithm is an algorithm that computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph. It is slower than Dijkstra's algorithm for the same problem, but more versatile, as it is capable of handling graphs in which some of the edge weights are negative numbers.";

const entryData = {
  vertexes: ['start', 'A', 'B', 'C', 'D', 'finish'],
  edges: [
    { from: 'start', to: 'A', distance: 5 },
    { from: 'start', to: 'B', distance: 2 },
    { from: 'A', to: 'C', distance: 4 },
    { from: 'A', to: 'D', distance: 2 },
    { from: 'B', to: 'A', distance: 8 },
    { from: 'B', to: 'D', distance: 7 },
    { from: 'C', to: 'D', distance: 6 },
    { from: 'C', to: 'finish', distance: 3 },
    { from: 'D', to: 'finish', distance: 1 },
    { from: 'A', to: 'start', distance: 5 },
    { from: 'B', to: 'start', distance: 2 },
    { from: 'C', to: 'A', distance: 4 },
    { from: 'D', to: 'A', distance: 2 },
    { from: 'A', to: 'B', distance: 8 },
    { from: 'D', to: 'B', distance: 7 },
    { from: 'D', to: 'C', distance: 6 },
    { from: 'finish', to: 'C', distance: 3 },
    { from: 'finish', to: 'D', distance: 1 },
  ],
};
const entryDescription = (
  <div>
    {'We have to find the shortest way from "start to "finish"'}
    <img src="assets/img/graph1.jpg" alt="Graph №1"/>
  </div>
);

const relaxEdges = (edges, distances, parents, iteration = 0) => {
  if (iteration >= edges.length) {
    return { distances, parents };
  }

  const { distance, from, to } = edges[iteration];
  const newDistance = distances[from] + distance;
  const newDistances = { ...distances };
  const newParents = { ...parents };

  if (distances[to] > newDistance) {
    newDistances[to] = newDistance;
    newParents[to] = from;
  }

  return relaxEdges(edges, newDistances, newParents, iteration + 1);
};

const iterateVertexes = (distances, parents, graph, iteration = 0) => {
  if (iteration > graph.vertexes.length) {
    return { distances, parents };
  }
  const relaxResult = relaxEdges(graph.edges, distances, parents);
  return iterateVertexes(relaxResult.distances, relaxResult.parents, graph, iteration + 1);
};

const getDefaults = (vertexes = [], startElement = 'start') => {
  const distances = {};
  const parents = {};

  vertexes.forEach((vertex) => {
    distances[vertex] = Infinity;
    parents[vertex] = null;
  });
  distances[startElement] = 0;

  return { distances, parents };
};

const bellmanFordSearch = (graph = {}, startElement = 'start') => {
  const { parents, distances } = getDefaults(graph.vertexes, startElement);
  return iterateVertexes(distances, parents, graph);
};

const extractResultPath = (parents, nextVertex, path = []) => {
  if (parents[nextVertex] === null) {
    return [nextVertex, ...path];
  }

  return extractResultPath(parents, parents[nextVertex], [nextVertex, ...path]);
};

const search = (graph) => {
  const startElementName = 'start';
  const endElementName = 'finish';
  const algorithmResult = bellmanFordSearch(graph, startElementName);
  const foundPath = extractResultPath(algorithmResult.parents, endElementName)
  const foundDistance = algorithmResult.distances[endElementName];
  return `Found path: ${foundPath}, Distance: ${foundDistance}`;
};

const algorithm = {
  title: algorithmTitle,
  name: algorithmName,
  description,
  entryData,
  entryDescription,
  func: search,
};

const MergeSort = () => <AlgorithmsTemplate algorithm={algorithm} />;

export default MergeSort;
