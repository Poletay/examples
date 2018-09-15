import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Middle from '../src/components/Middle';

configure({
  adapter: new Adapter(),
});

const contents = [
  {
    name: 'menuItem1',
    path: '/',
  },
  {
    name: 'menuItem2',
    path: '/',
  },
  {
    name: 'menuItem3',
    path: '/',
  },
];


describe('Footer component test', () => {
  it('should be selectable by class "main-middle"', () => {
    expect(shallow(<Middle contents={contents} />).is('.main-middle')).toBe(true);
  });
});
