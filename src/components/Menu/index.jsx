import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { uniqueId } from 'lodash';

export default class Menu extends React.Component {
  static propTypes = {
    items: PropTypes.array,
    menuType: PropTypes.string,
    menuName: PropTypes.string,
  }

  makeElementsList = (elements) => {
    const elementsList = elements.map(({ path, name }) => (
      <li className="nav-item" key={uniqueId()}>
        {
          path === '/'
            ? <NavLink to={path} exact className="nav-link" activeClassName="active">{name}</NavLink>
            : <NavLink to={path} className="nav-link" activeClassName="active">{name}</NavLink>
        }
      </li>
    ));
    return elementsList;
  }

  render() {
    const { menuType, menuName, items } = this.props;
    const classNames = cn('nav', menuType, menuName);

    console.log(menuName);

    return (
      <ul className={classNames}>
        {this.makeElementsList(items)}
      </ul>
    );
  }
}
