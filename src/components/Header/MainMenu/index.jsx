import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { uniqueId } from 'lodash';

export default class MainMenu extends React.Component {
  static propTypes = {
    items: PropTypes.array,
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
    return (
      <ul className="main-menu nav">
        {this.makeElementsList(this.props.items)}
      </ul>
    );
  }
}
