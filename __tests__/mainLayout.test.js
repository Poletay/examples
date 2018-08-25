import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/components/App';

jest.mock('../src/components/Header', () => 'Header');
jest.mock('../src/components/Footer', () => 'Footer');
jest.mock('../src/components/LeftContent', () => 'LeftContent');
jest.mock('../src/components/MiddleContent', () => 'MiddleContent');
jest.mock('../src/components/RightContent', () => 'RightContent');

test('example', () => {
  const component = renderer.create(
    <App />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
