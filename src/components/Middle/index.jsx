import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { uniqueId } from 'lodash';

export default class Middle extends React.Component {
  static propTypes = {
    contents: PropTypes.array,
  };

  makeContentsList = (elements) => {
    const elementsList = elements.map(el => (
        <Route key={uniqueId()} exact path={el.path} component={el.component}>{el.name}</Route>
    ));
    return elementsList;
  }

  render() {
    return (
      <div className="main-middle">
        {this.makeContentsList(this.props.contents)}
      </div>
    );
  }
}
