import React from 'react';
import MainLogo from './MainLogo';
import Menu from '../Menu';
import rootRoutes from '../rootRoutes';

const Header = () => (
  <div className="main-header">
    <MainLogo />
    <rootRoutes.Consumer>
      {routes => (
        <Menu routes={routes} menuName='main-menu' />
      )}
    </rootRoutes.Consumer>
  </div>
);

export default Header;
