import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Header from '../src/components/Header';
import MainLogo from '../src/components/Header/MainLogo';

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

  it('Main header should contain MainLogo component', () => {
    expect(component.contains(<MainLogo />)).toBe(true);
  });
});
