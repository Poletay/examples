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

describe('Menu component tests', () => {
  const component = shallow(<Menu routes={menuItems} menuName='main-menu' menuType="main-type" />);
  it('should be selectable by menuName', () => {
    expect(component.is('.main-menu')).toBe(true);
  });
  it('should be selectable by menuType', () => {
    expect(component.is('.main-type')).toBe(true);
  });

  describe('MainMenu should take menu-items list as Array of Objects', () => {
    it('MainMenu children count should be equal menuItems length', () => {
      expect(component.children().length).toBe(menuItems.length);
    });
    it('MenuItems should take value from Array of Object', () => {
      expect(component.children().length).toBe(menuItems.length);
    });
  });
});
