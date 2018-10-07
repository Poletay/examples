import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from '../src/components/App';
import Header from '../src/components/Header';
import Middle from '../src/components/Middle';
import Footer from '../src/components/Footer';

configure({
  adapter: new Adapter(),
});

describe('App component test', () => {
  const component = shallow(<App />);
  it('should be selectable by class "main"', () => {
    expect(shallow(<App />).is('.main')).toBe(true);
  });

  describe('Main layout tests', () => {
    it('should contain 3 rows"', () => {
      expect(component.find('div.row').length).toBe(3);
    });

    it('first row should contain Header, Middle and Footer components', () => {
      expect(component.contains(<Header />)).toBe(true);
      expect(component.contains(<Middle />)).toBe(true);
      expect(component.contains(<Footer />)).toBe(true);
    });
  });
});
