import React from 'react';
import uniqueID from 'lodash';
import AlgorithmsChapter from './AlgorithmsChapter';
import LayoutsChapter from './LayoutsChapter';
import LibsChapter from './LibsChapter';
import PatternsChapter from './PatternsChapter';
import PaymentChapter from './PaymentChapter';
import SequrityChapter from './SequrityChapter';
import SicpChapter from './SicpChapter';

// Должно быть реализовано как-то по-другому.
// Пока предполагаю, что создание данного массива элементов следует вынести в отдельный модуль
// Пока предполагаю, что массив надо будет прокидывать в Главное меню аж с корневого компонента App

const menuItems = [
  { id: uniqueID(), name: 'Algorithms', link: AlgorithmsChapter },
  { id: uniqueID(), name: 'Layouts', link: <LayoutsChapter /> },
  { id: uniqueID(), name: 'LibsChapter', link: <LibsChapter /> },
  { id: uniqueID(), name: 'Patterns', link: <PatternsChapter /> },
  { id: uniqueID(), name: 'PaymentChapter', link: <PaymentChapter /> },
  { id: uniqueID(), name: 'SequrityChapter', link: <SequrityChapter /> },
  { id: uniqueID(), name: 'SicpChapter', link: <SicpChapter /> },
];

export default menuItems;
