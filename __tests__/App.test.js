import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from '../src/components/App';

configure({
  adapter: new Adapter(),
});

describe('App component test', () => {
  it('should be selectable by class "main"', () => {
    expect(shallow(<App />).is('.main')).toBe(true);
  });
});

/*
describe('Main layout tests', () => {
  const component = shallow(<App />);
  it('should contain 3 rows"', () => {
    expect(component.childAt(0).childAt(0).children().length).toBe(3);
    expect(component.children('div.row').length).toBe(3);
  });

  it('first row should contain Header component', () => {
    const headerCell = component.childAt(0).childAt(0).childAt(0);
    expect(headerCell.name()).toBe('Header');
  });

  it('middle row should contain Middle component', () => {
    const middleCell = component.childAt(1).childAt(0).childAt(0);
    expect(middleCell.name()).toBe('Middle');
  });

  it('last row should contain Footer component', () => {
    const footerCell = component.childAt(2).childAt(0).childAt(0);
    expect(footerCell.name()).toBe('Footer');
  });
}); */
