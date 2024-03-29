import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

const Menu = ({ routes, menuType, menuName }) => {
  const classNames = cn('nav', menuType, menuName);
  return (
    <ul className={classNames}>
      {routes.map(({ path, name }) => (
        <li className="nav-item" key={path}>
          {
            <NavLink
              to={path}
              className={({ isActive }) => [
                "nav-link",
                isActive ? "active" : undefined
              ]
              .filter(Boolean)
              .join(' ')
            }
            >
              {name}
            </NavLink>
          }
        </li>
      ))}
    </ul>
  );
};

Menu.propTypes = {
  routes: PropTypes.array.isRequired,
  menuType: PropTypes.string,
  menuName: PropTypes.string,
};

export default Menu;
