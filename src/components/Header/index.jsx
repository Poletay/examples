import React from 'react';
import MainLogo from './MainLogo';
import MainMenu from './MainMenu';
import rootRoutes from '../rootRoutes';

const Header = () => (
  <div className="main-header">
    <MainLogo />
    <rootRoutes.Consumer>
      {routes => (
        <MainMenu items={routes} />
      )}
    </rootRoutes.Consumer>
  </div>
);

export default Header;
