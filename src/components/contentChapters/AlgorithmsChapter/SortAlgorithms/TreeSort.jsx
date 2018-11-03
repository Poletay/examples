import React from 'react';
import AlgorithmsLayoutTeamplate from '../AlgorithmsLayoutTemplate';

const algorithmTitle = 'Tree sorting';
const algorithmName = 'treeSorting';
const description = 'A tree sort is a sort algorithm that builds a binary search tree from the elements to be sorted, and then traverses the tree (in-order) so that the elements come out in sorted order.';
const entryData = [5, 2, 1, 8, 4, 9, 7, 3, 6, 0, -1, 5];

const createBinarySortingTree = (arr) => {
  const createNode = () => ({
    value: null,
    left: null,
    right: null,
  });

  const addTreeElement = (tree, element) => {
    if (tree.value === null) {
      return ({
        ...tree,
        value: element,
        left: createNode(),
        right: createNode(),
      });
    }

    const nextChildren = element < tree.value ? 'left' : 'right';
    return {
      ...tree,
      [nextChildren]: addTreeElement(tree[nextChildren], element),
    };
  };

  return arr.reduce((acc, item) => addTreeElement(acc, item), createNode());
};

const treeToArray = (tree) => {
  const resultArray = tree.value === null ? [] : [
    ...treeToArray(tree.left),
    tree.value,
    ...treeToArray(tree.right),
  ];
  return resultArray;
};

const sortArray = (arr) => {
  const sortingTree = createBinarySortingTree(arr);
  const sortedArray = treeToArray(sortingTree);

  return sortedArray;
};

const algorithm = {
  title: algorithmTitle,
  name: algorithmName,
  description,
  entryData,
  func: sortArray,
};

const TreeSort = () => <AlgorithmsLayoutTeamplate algorithm={algorithm} />;

export default TreeSort;
