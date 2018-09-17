import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Menu from '../src/components/Menu';

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
    expect(shallow(<Menu items={menuItems} menuName='main-menu' />).is('.main-menu')).toBe(true);
  });
});

describe('MainMenu should take menu-items list as Array of Objects', () => {
  const component = shallow(<Menu items={ menuItems } />);

  it('MainMenu children count should be equal menuItems length', () => {
    expect(component.children().length).toBe(menuItems.length);
  });
});
