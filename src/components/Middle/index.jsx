import React from 'react';
import { Route } from 'react-router-dom';
import { uniqueId } from 'lodash';
import rootRoutes from '../rootRoutes';

const makeContentsList = (elements) => {
  const elementsList = elements.map(({ path, component }) => (
    path === '/'
      ? <Route exact key={uniqueId()} path={path} component={component} />
      : <Route key={uniqueId()} path={path} component={component} />
  ));
  return elementsList;
};

const Middle = () => (
  <div className="main-middle">
    <rootRoutes.Consumer>
    {routes => (
      makeContentsList(routes)
    )}
    </rootRoutes.Consumer>
  </div>
);
export default Middle;
