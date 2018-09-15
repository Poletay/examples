import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import MainMenu from '../src/components/Header/MainMenu';

configure({
  adapter: new Adapter(),
});

const menuItems = [
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


describe('MainMenu components test', () => {
  it('should be selectable by class "main-menu"', () => {
    expect(shallow(<MainMenu items={menuItems} />).is('.main-menu')).toBe(true);
  });
});

describe('MainMenu should take menu-items list as Array of Objects', () => {
  const component = shallow(<MainMenu items={ menuItems } />);

  it('MainMenu children count should be equal menuItems length', () => {
    expect(component.children().length).toBe(menuItems.length);
  });
});
