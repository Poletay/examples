import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

export default class MainMenu extends React.Component {
  static propTypes = {
    items: PropTypes.array,
  }

  makeElementsList = (elements) => {
    const elementsList = elements.map(el => (
      <div key={uniqueId()}>
        <a href="#">{el.name}</a>
      </div>
    ));
    return elementsList;
  }

  render() {
    return (
      <div className="main-menu">
        {this.makeElementsList(this.props.items)}
      </div>
    );
  }
}
