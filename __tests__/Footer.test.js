import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Footer from '../src/components/Footer';

configure({
  adapter: new Adapter(),
});

describe('Footer component test', () => {
  it('should be selectable by class "main-footer"', () => {
    expect(shallow(<Footer />).is('.main-footer')).toBe(true);
  });
});
