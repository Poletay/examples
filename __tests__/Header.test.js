import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Header from '../src/components/Header';

configure({
  adapter: new Adapter(),
});

describe('App components test', () => {
  it('should be selectable by class "main-header"', () => {
    expect(shallow(<Header />).is('.main-header')).toBe(true);
  });
});

describe('Main header layout tests', () => {
  const component = shallow(<Header />);
  it('Main header must contain only 2 elements', () => {
    expect(component.children().length).toBe(2);
  });
  it('first element should contain MainLogo component', () => {
    const firstElement = component.childAt(0);
    expect(firstElement.name()).toBe('MainLogo');
  });

/*  it('second element should contain MainMenu component', () => {
    const secondElement = component.childAt(1);
    expect(secondElement.name()).toBe('MainMenu');
  });
*/
});
