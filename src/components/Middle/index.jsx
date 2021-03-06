import React from 'react';
import rootRoutes from '../rootRoutes';
import RoutesList from '../RoutesList';

const Middle = () => (
  <div className="main-middle">
    <rootRoutes.Consumer>
    {routes => (
      <RoutesList routes={routes} />
    )}
    </rootRoutes.Consumer>
  </div>
);
export default Middle;
