import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from '../src/components/App';

configure({
  adapter: new Adapter(),
});

describe('App components test', () => {
  it('should be selectable by class "main"', () => {
    expect(shallow(<App />).is('.main')).toBe(true);
  });
});

describe('Main layout tests', () => {
  const component = shallow(<App />);
  it('should contain 3 rows"', () => {
    expect(component.children().length).toBe(3);
    expect(component.children('div.row').length).toBe(3);
  });
  it('first row should contain Header component', () => {
    const headerCell = component.childAt(0).childAt(0).childAt(0);
    expect(headerCell.name()).toBe('Header');
  });

  describe('Middle row tests', () => {
    it('middle row should contain only 3 columns', () => {
      const middleRow = component.childAt(1);
      expect(middleRow.children().length).toBe(3);
      expect(middleRow.children('div[className*="col-"]').length).toBe(3);
    });

    it('first collumn should contain LeftContent component', () => {
      const leftCell = component.childAt(1).childAt(0).childAt(0);
      expect(leftCell.name()).toBe('LeftContent');
    });

    it('middle collumn should contain MiddleContent component', () => {
      const rightCell = component.childAt(1).childAt(1).childAt(0);
      expect(rightCell.name()).toBe('MiddleContent');
    });

    it('last collumn should contain RightContent component', () => {
      const rightCell = component.childAt(1).childAt(2).childAt(0);
      expect(rightCell.name()).toBe('RightContent');
    });
  });

  it('last row should contain Footer component', () => {
    const footerCell = component.childAt(2).childAt(0).childAt(0);
    expect(footerCell.name()).toBe('Footer');
  });
});
