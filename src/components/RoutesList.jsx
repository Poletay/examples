import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteWithSubroutes = route => (
  <Route path={route.path} element={props => (
    <route.component {...props} routes={route.routes} />
  )} />
);

const RoutesList = (routes) => {
  // TODO: разобраться, откуда приходят routes в виде объекта
  if (!Array.isArray(routes)) {
    routes = [];
  }

  return routes.map(route => {
    return (
      <Route key={route.name} path={`${route.path}/${route.routes ? '*' : ''}`} element={<route.component routes={route.routes} />} />
    )
  });
};

RoutesList.propTypes = {
  routes: PropTypes.array,
};

export default RoutesList;
