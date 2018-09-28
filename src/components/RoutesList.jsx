import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteWithSubroutes = route => (
  <Route path={route.path} exact={route.exact} render={props => (
    <route.component {...props} routes={route.routes} />
  )} />
);

const RoutesList = ({ routes }) => routes.map(route => (
    <RouteWithSubroutes key={route.path} {...route} />
));

RoutesList.propTypes = {
  routes: PropTypes.array,
};

export default RoutesList;
