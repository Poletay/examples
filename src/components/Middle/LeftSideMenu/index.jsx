import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { uniqueId } from 'lodash';

export default class LeftSideMenu extends React.Component {
  static propTypes = {
    items: PropTypes.array,
  }

  makeElementsList = (elements) => {
    const elementsList = elements.map(el => (
      <li className="nav-item" key={uniqueId()}>
        <NavLink exact to={el.path} className="nav-link" activeClassName="active">{el.name}</NavLink>
      </li>
    ));
    return elementsList;
  }

  render() {
    return (
      <ul className="nav flex-column">
        {this.makeElementsList(this.props.items)}
      </ul>
    );
  }
}
