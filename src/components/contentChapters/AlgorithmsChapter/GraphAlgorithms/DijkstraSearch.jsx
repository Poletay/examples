import React from 'react';
import { find } from 'lodash';
import AlgorithmsTemplate from '../AlgorithmsTemplate';

const algorithmTitle = 'Dijkstra searching';
const algorithmName = 'dijkstraSearching';
const description = "Dijkstra's lgorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks.";

const entryData = {
  start: { A: 5, B: 2 },
  A: { C: 4, D: 2 },
  B: { A: 8, D: 7 },
  C: { D: 6, finish: 3 },
  D: { finish: 1 },
  finish: {},
};
const entryDescription = (
  <div>
    {'We have to find the shortest way from "start to "finish"'}
    <img src="assets/img/graph1.jpg" alt="Graph №1"/>
  </div>
);

const isArrayContainItem = (arr, item) => arr.includes(item);

function Queue(...initElements) {
  const queue = [...initElements];
  let index = 0;

  this.addElement = (element) => {
    if (!isArrayContainItem(queue, element)) {
      queue.push(element);
    }
  };

  this.getNextElement = () => {
    if (index >= queue.length) {
      return null;
    }
    const element = queue[index];
    index += 1;
    return element;
  };
}

const makeAst = (graph, startEl = 'start') => {
  const elements = Object.keys(graph);

  const getChildrenAst = (children) => {
    const childrenNames = Object.keys(children);
    return childrenNames.map(child => ({
      name: child,
      edgeWeight: children[child],
    }));
  };

  return elements.map(el => ({
    name: el,
    weight: el === startEl ? 0 : Infinity,
    parent: null,
    children: getChildrenAst(graph[el]),
  }));
};

const handleAst = (ast, queue) => {
  const nextElement = queue.getNextElement();

  if (nextElement === null) {
    return ast;
  }

  const handledAst = [...ast];
  const currentElement = find(handledAst, item => item.name === nextElement);
  const { children } = currentElement;

  children.forEach(({ name, edgeWeight }) => {
    const childElement = find(handledAst, item => item.name === name);
    const oldWeight = childElement.weight;
    const newWeight = currentElement.weight + edgeWeight;

    if (oldWeight >= newWeight) {
      childElement.weight = newWeight;
      childElement.parent = currentElement;
    }
    queue.addElement(name);
  });

  return handleAst(handledAst, queue);
};

const takeSearchingResult = (ast, finishElementName) => {
  const finishElement = find(ast, item => item.name === finishElementName);

  if (finishElement.parent === null) {
    return 'The searched route does not exist';
  }

  const makeResult = (element, result = []) => {
    if (element === null) {
      return result;
    }
    const nextResult = [element.name, ...result];
    return makeResult(element.parent, nextResult);
  };
  const resultPath = makeResult(finishElement);
  const result = `Route: [${resultPath.join(' -> ')}], Weigth: ${finishElement.weight}`;
  return result;
};

const dijkstraSearch = (graph = {}) => {
  const startElementName = 'start';
  const finishElementName = 'finish';
  const queue = new Queue(startElementName);

  const ast = makeAst(graph);
  const handledAst = handleAst(ast, queue);
  const result = takeSearchingResult(handledAst, finishElementName);
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
  entryDescription,
  func: search,
};

const MergeSort = () => <AlgorithmsTemplate algorithm={algorithm} />;

export default MergeSort;
