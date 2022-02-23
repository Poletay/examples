import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Menu from '../src/components/Menu';

configure({
  adapter: new Adapter(),
});
const menuName = 'main-menu';
const menuType = 'main-type';
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
  const component = shallow(<Menu routes={menuItems} menuName={menuName} menuType={menuType} />);
  it('should be selectable by menuName', () => {
    expect(component.is(`.${menuName}`)).toBe(true);
  });
  it('should be selectable by menuType', () => {
    expect(component.is(`.${menuType}`)).toBe(true);
  });

  describe('MainMenu should take menu-items list as Array of Objects', () => {
    it('MainMenu children count should be equal menuItems length', () => {
      expect(component.children().length).toBe(menuItems.length);
    });
    it('MenuItems should take values from Array of Objects', () => {
      component.children().forEach((node, itemIndex) => {
        expect(node.find('.nav-item').childAt(0).text()).toBe(menuItems[itemIndex].name);
      });
    });
  });
});
